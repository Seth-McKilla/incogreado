//Mui
import { default as MuiContainer } from "@mui/material/Container";

const styles = {
  root: {
    overflowY: "auto",
    width: "100vw",
    height: "calc(100vh - 115px)",
  },
  container: {
    marginTop: "50px",
    width: "100vw",
    height: "calc(100vh - 215px)",
  },
};

export default function Container({ children }) {
  return (
    <div style={styles.root}>
      <MuiContainer sx={styles.container} maxWidth="lg">
        {children}
      </MuiContainer>
    </div>
  );
}
