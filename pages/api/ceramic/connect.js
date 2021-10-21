import ceramicWrapper from "../../../middleware/ceramicWrapper";

function handler(req, res) {
  return res.send();
}

export default ceramicWrapper(handler);
