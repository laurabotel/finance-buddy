import * as React from "react";
import CustomChatbot from "../components/chatbot/CustomChatbot";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router";
import image from "../assets/8749.png";
import { createTheme, ThemeProvider } from "@mui/material";
import Header from "../components/nav";
const centerDivStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};
const sections = [
  { title: "Technology", url: "#" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" },
];
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Home
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#d3dfea",
    },
    secondary: {
      main: "#f3e5f5",
    },
    background: {
      default: "#0c1035",
    },
  },
});

// TODO remove, this demo shouldn't need to reset the theme.

export default function Home() {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <Header title="UpStart Finance" sections={sections} />
        <img
          src={image}
          width="70%"
          height="500px"
          style={{ marginLeft: "90px" }}
        />

        <div>
          <h2>
            {" "}
            <blockquote style={{ textAlign: "center" }}>
              {" "}
              <q>
                Financial Freedom Made Fun: Empower Your Savings, Grow
                Sustainable Investments!
              </q>
            </blockquote>
          </h2>
        </div>

        <Container
          component="main"
          maxWidth="md"
          style={{ border: "1px solid white" }}
        >
          <h3>INSPIRATION</h3>
          <p>
            Inspired by the Financial Independence Retire Early (FIRE) movement,
            we shared ideas around creating a tool that would encourage less
            spending while investing in sustainable stocks. We wanted a tool
            that would calculate savings to retirement, encouraging folks to
            spend less and take control of their finances. We added as a stretch
            goal to gamify investing by showing people what could be invested
            and how much you can project to have investments after an amount of
            time and allowing you to live a financially independent life.
          </p>
        </Container>

        <CustomChatbot />
        <div style={centerDivStyle}>
          <Container
            component="main"
            maxWidth="lg"
            style={{ border: "1px solid white" }}
          >
            <CssBaseline />

            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </div>
      </div>
    </ThemeProvider>
  );
}
