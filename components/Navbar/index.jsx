import { useContext } from "react";
import { Context } from "../../context";
import ceramic from "../../ceramic";

// Next
import Link from "next/link";
import Image from "next/image";

// Mui
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

// Assets
import LogoInverted from "../../public/logo-inverted.png";
import MetaMaskIcon from "../../public/metamask.svg";

export default function NavBar() {
  const { state, dispatch } = useContext(Context);

  const handleConnect = async () => {
    dispatch({ type: "CERAMIC_REQUEST" });

    try {
      const ceramicClient = await ceramic();
      return dispatch({ type: "CERAMIC_SUCCESS", payload: ceramicClient });
    } catch (error) {
      console.error(error);
      return dispatch({ type: "CERAMIC_FAIL", payload: error });
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ height: 50 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Link href="/" passHref>
              <IconButton>
                <Image
                  src={LogoInverted}
                  width={40}
                  height={40}
                  alt="Incogreado logo"
                />
              </IconButton>
            </Link>
          </Box>
          <Link href="/books" passHref>
            <Button color="inherit">All Books</Button>
          </Link>
          <Link href="/books/new" passHref>
            <Button color="inherit">+ Add Book</Button>
          </Link>
          {state.ceramic && state.ceramic.did.authenticated ? (
            <IconButton>
              <Image
                src={MetaMaskIcon}
                width={30}
                height={30}
                alt="MetaMask Icon"
              />
            </IconButton>
          ) : (
            <Button color="inherit" onClick={handleConnect}>
              Connect
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
