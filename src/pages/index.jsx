import * as React from "react"
import { ThemeProvider, Typography } from "@mui/material";

import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { theme } from "../styles/theme";

import "../styles/index.css";

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <main>

        <ResponsiveAppBar />
        <section>
          <section>
            <Typography variant="h2">Hey, there. <br/> I'm Cortney Thomas</Typography>
            <Typography variant="subtitle1">Software Engineer & Unrelenting Learner</Typography>
          </section>
          {/* <section>put image here</section> */}

        </section>

        <section>
          <Typography variant="h2">About Me</Typography>
          <Typography variant="body1">I'm a frontend software engineer, learning to navigate the backend and cloud ecosystems. </Typography>
        </section>

        <section>
          <section>
            <Typography variant="h2">Academic Achievements</Typography>
            <Typography variant="body1">
              <ul></ul>
            </Typography>
          </section>
          <section>
            <Typography variant="h2">Career Experience</Typography>
            <Typography variant="body1">
              <ul>
                <li>Senior Software Engineer</li>
                <li>Software Engineer</li>
                <li>Software Engineer</li>
              </ul>
            </Typography>
          </section>
        </section>
      </main>
    </ThemeProvider>

  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
