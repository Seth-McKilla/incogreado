import { DataModel } from "@glazed/datamodel";
import { DIDDataStore } from "@glazed/did-datastore";
import { DID } from "dids";
import { Ed25519Provider } from "key-did-provider-ed25519";
import { getResolver } from "key-did-resolver";
import { fromString } from "uint8arrays";
import modelAliases from "./model.json";

export default function authWrapper(handler) {
  return async (req, res) => {
    if (req.ceramic.did && req.model && req.store) return handler(req, res);

    try {
      const key = fromString(process.env.DID_KEY, "base16");

      const did = new DID({
        provider: new Ed25519Provider(key),
        resolver: getResolver(),
      });
      await did.authenticate();

      req.ceramic.did = did;

      const model = new DataModel({
        ceramic: req.ceramic,
        model: modelAliases,
      });
      const store = new DIDDataStore({ ceramic: req.ceramic, model });

      req.model = model;
      req.store = store;

      return handler(req, res);
    } catch (error) {
      return res.status(500).send(error);
    }
  };
}
