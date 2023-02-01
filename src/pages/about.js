import * as React from "react";
import Button from '@mui/material/Button';

const AboutPage = () => {
    return (
        <main>
            <header>
                <p>About</p>
                <h1>Cortney Thomas</h1>
                <h2>Developer & Psychology Nerd</h2>
                <Button variant="contained">Hello World</Button>
            </header>
      </main>
  )
}

export default AboutPage

export const Head = () => <title>About</title>
