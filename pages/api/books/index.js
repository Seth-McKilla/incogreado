import ceramicWrapper from "../../../middleware/ceramicWrapper";
import authWrapper from "../../../middleware/authWrapper";

async function handler(req, res) {
  try {
    switch (req.method) {
      case "POST":
        const { data } = req.body;
        await req.store.set("bookReview", data);
        const reviewsList = await req.store.get("bookReview");

        return res.status(201).json(reviewsList);
      default:
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
}

export default ceramicWrapper(authWrapper(handler));
