import Image from "next/image";
import styles from "./page.module.css";
import getStripe from "@/get-stripe";
import { SignedIn, SignedOut, UserButton  } from "@clerk/nextjs";
import { AppBar, Container, Toolbar, Button, Typography , Box, Grid} from "@mui/material";
import Head from 'next/head'



export default function Home() {
  return (
    <Container maxWidth="100vw">
      <Head>
        <title>Flashcard SaaS</title>
        <meta name="description" content="Create whatever flashcard you need!"/>
      </Head>

      <AppBar position="static">
        <Toolbar variant = "h6">
          <Typography variant="h6" style={{flexGrow: 1, }}>Flashcard SaaS</Typography>
          <SignedOut>
            <Button color = "inherit" href="/sign-in">Login</Button>
            <Button color = "inherit" href="/sign-up">Sign Up</Button>
          </SignedOut>
          <SignedIn></SignedIn>
        </Toolbar>
      </AppBar>

      <Box sx={{textAlign: "center", my: 4}}>
        <Typography variant="h2"> Welcome to Flashcard SaaS</Typography>
        <Typography variant="h5">The easiest way to make flashcards from whatever you want!</Typography>

        <Button variant="contained" color="primary" sx={{mt:2}}>Get Started</Button>
      </Box>

      <Box sx={{my:6}}>
        <Typography variant="h4" component="h2" gutterBottom>Features</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Easy Text Input</Typography>
            <Typography>Simply input your text, and our software will do the rest! Creating Flashcards has never been easier</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Smart Flashcard</Typography>
            <Typography>Simply input your text, and our software will do the rest! Creating Flashcards has never been easier</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Easy Accessability</Typography>
            <Typography>Simply input your text, and our software will do the rest! Creating Flashcards has never been easier</Typography>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{my:6, textAlign:"center"}}>
        <Typography variant="h4">Pricing</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{p:3,border:'1px solid', borderColor: "grey.3000", borderRadius:2}}>
              <Typography variant="h6" gutterBottom>Student - $14.99 / Month</Typography>
              <Typography>Basic flashcard features and limited storage</Typography>
              <Button variant="contained" color="primary">Get Student</Button>
            </Box>
            
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{p:3,border:'1px solid', borderColor: "grey.3000", borderRadius:2}}>
              <Typography variant="h6" gutterBottom>Professional - $14.99 / Month</Typography>
              <Typography>Basic flashcard features and limited storage</Typography>
              <Button variant="contained" color="primary">Get Professional</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      
    </Container>
  );
}
