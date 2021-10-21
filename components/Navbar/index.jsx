import { useContext } from "react";
import { Context } from "../../context";

// Next
import Link from "next/link";
import Image from "next/image";

// Mui
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

// Assets
import LogoInverted from "../../public/logo-inverted.png";
import CeramicLogo from "../../public/ceramic-logo.png";

export default function NavBar() {
  const { state, dispatch } = useContext(Context);

  const handleConnect = async () => {
    dispatch({ type: "CERAMIC_REQUEST" });

    try {
      const response = await fetch("/api/ceramic/authenticate");
      const keyDID = await response.json();
      dispatch({ type: "CONNECT_SUCCESS", payload: keyDID });
    } catch (error) {
      console.error(error);
      dispatch({ type: "CERAMIC_FAIL", payload: error });
    }

    return dispatch({ type: "CERAMIC_RESET" });
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
            <Button color="inherit">My Books</Button>
          </Link>
          <Link href="/books/new" passHref>
            <Button color="inherit">+ Add Book</Button>
          </Link>
          {state.keyDID ? (
            <Tooltip title={state.keyDID}>
              <IconButton>
                <Image
                  src={CeramicLogo}
                  width={30}
                  height={30}
                  alt="Ceramic Logo"
                />
              </IconButton>
            </Tooltip>
          ) : (
            <Button color="inherit" onClick={handleConnect}>
              Authenticate
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
