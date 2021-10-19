import { useState, useEffect } from "react";
import CeramicClient from "@ceramicnetwork/http-client";
import KeyDidResolver from "key-did-resolver";
import ThreeIdResolver from "@ceramicnetwork/3id-did-resolver";
import { ThreeIdConnect, EthereumAuthProvider } from "@3id/connect";
import { DID } from "dids";

const API_URL = "https://ceramic-clay.3boxlabs.com";

export default function useCeramic() {
  const [ceramic, setCeramic] = useState();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (ceramic) return;
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      (async () => {
        setErrorMessage("");
        setLoading(true);

        try {
          // @ Client
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          const ceramicClient = new CeramicClient(API_URL);
          const resolver = {
            ...KeyDidResolver.getResolver(),
            ...ThreeIdResolver.getResolver(ceramicClient),
          };
          const did = new DID({ resolver });
          ceramicClient.did = did;

          // @ Authentication
          const threeIdConnect = new ThreeIdConnect();
          const authProvider = new EthereumAuthProvider(
            window.ethereum,
            accounts[0]
          );
          await threeIdConnect.connect(authProvider);
          const provider = await threeIdConnect.getDidProvider();
          ceramicClient.did.setProvider(provider);
          await ceramicClient.did.authenticate();

          setCeramic(ceramicClient);
        } catch (error) {
          console.error(error);
          setErrorMessage(error.message);
        }

        return setLoading(false);
      })();
    }
  }, []);

  return { loading, ceramic, errorMessage };
}
