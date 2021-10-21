import ceramicWrapper from "../../../middleware/ceramicWrapper";
import authWrapper from "../../../middleware/authWrapper";

async function handler(req, res) {
  const { _id } = req.ceramic.did;
  return res.send(JSON.stringify(_id));
}

export default ceramicWrapper(authWrapper(handler));
