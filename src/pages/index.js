import * as React from "react"
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import "../styles/index.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const IndexPage = () => {
  return (
    <main>
      <ResponsiveAppBar />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
