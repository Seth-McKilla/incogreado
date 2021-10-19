import Head from "next/head";
import Link from "next/link";

// Mui
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// Components
import { Button, Container, Logo } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>incog-read-o</title>
        <meta name="description" content="Decentralized book reviews" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Grid item xs={12} align="center">
          <Logo />
        </Grid>

        <Grid item xs={12} align="center">
          <Typography variant="h2">Welcome to incog-read-o!</Typography>
          <Typography variant="h4">
            The decentralized library of book reviews.
          </Typography>
        </Grid>

        <Grid item xs={12} align="center" mt={4}>
          <Link href="/books" passHref>
            <Button>Browse books</Button>
          </Link>
        </Grid>
      </Container>
    </div>
  );
}
