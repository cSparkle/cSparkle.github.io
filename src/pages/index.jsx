import * as React from "react"
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import "../styles/index.css";
import { ThemeProvider, Typography } from "@mui/material";
import { theme } from "../styles/theme";

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <ResponsiveAppBar />
        <Typography variant="h1">This is an H1</Typography>
        <Typography variant="h2">This is an H2</Typography>
        <Typography variant="h3">This is an H3</Typography>
        <Typography variant="h4">This is an H4</Typography>
        <Typography variant="h5">This is an H5</Typography>
        <Typography variant="h6">This is an H6</Typography>
        <Typography variant="subtitle1">Subtitle 1</Typography>
        <Typography variant="subtitle2">Subtitle 2</Typography>
        <Typography variant="body1">Body 1</Typography>
        <Typography variant="body2">Body 1</Typography>
      </main>
    </ThemeProvider>

  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
