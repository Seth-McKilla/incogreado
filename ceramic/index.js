import { CeramicClient } from "@ceramicnetwork/http-client";
import { DataModel } from "@glazed/datamodel";
import { DIDDataStore } from "@glazed/did-datastore";
import KeyDidResolver from "key-did-resolver";
import ThreeIdResolver from "@ceramicnetwork/3id-did-resolver";
import { ThreeIdConnect, EthereumAuthProvider } from "@3id/connect";
import { DID } from "dids";
import modelAliases from "../model.json";

const API_URL = "https://ceramic-clay.3boxlabs.com";

export default async function ceramic() {
  // @ Client
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const ceramicClient = new CeramicClient(API_URL);
  const resolver = {
    ...KeyDidResolver.getResolver(ceramicClient),
    ...ThreeIdResolver.getResolver(ceramicClient),
  };
  const did = new DID({ resolver });
  ceramicClient.did = did;

  // @ Authentication
  const threeIdConnect = new ThreeIdConnect();
  const authProvider = new EthereumAuthProvider(window.ethereum, accounts[0]);
  await threeIdConnect.connect(authProvider);
  const provider = await threeIdConnect.getDidProvider();
  ceramicClient.did.setProvider(provider);
  await ceramicClient.did.authenticate();

  const model = new DataModel({ ceramic, model: modelAliases });
  const store = new DIDDataStore({ ceramic, model });

  return { ceramicClient, model, store };
}
