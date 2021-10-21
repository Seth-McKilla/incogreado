import { CeramicClient } from "@ceramicnetwork/http-client";

export default function ceramicWrapper(handler) {
  return (req, res) => {
    const ceramic = new CeramicClient(process.env.API_URL);
    req.ceramic = ceramic;
    return handler(req, res);
  };
}
