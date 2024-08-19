import { Container, Toolbar, Button, Typography, Box, AppBar, Link } from "@mui/material";
import { SignedIn, SignedOut, UserButton, SignIn, SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
    return (
        <Container maxWidth="100vw" > 
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

            <Box display="flex" flexDirection = "column" alignItems="center" justifyContent={"center"}>
                <Typography variant="h4">Sign Up</Typography>
                <SignUp />
            </Box>
        
        </Container>
    )
}