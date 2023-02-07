import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const appTheme = createTheme({
    palette: {
        background: {
            main: "#f4f1de"
        },
        primary: {
            main: "#e07a5f",
        },
        secondary: {
            main: "#81b29a",
        },
        text: {
            main: "#3d405b"
        }
    },
    typography: {
        h1: {
            color: "#3d405b",
            fontFamily: "Bungee",
            fontSize: "5rem",
            fontWeight: '800',
            letterSpacing: ".2rem",
            textDecoration: "none",
            wordSpacing: "1rem"
        },
        h2: {
            fontFamily: "Bungee",
            fontSize: "3em",
            fontWeight: '800',
            textTransform: 'uppercase'
        },
        h3: {
            fontFamily: "Bungee",
            fontSize: "2.5rem",
            fontWeight: '600',
        },
        h4: {
            fontFamily: "Bungee",
            fontSize: "2rem",
            fontWeight: '600',
        },
        h5: {
            fontFamily: "Bungee",
            fontSize: "1.5rem",
            fontWeight: '600',
        },
        h6: {
            fontFamily: "Bungee",
            fontSize: "1rem",
            fontWeight: '600',
        },
        subtitle1: {
            fontFamily: "Bungee Hairline",
            fontSize: "2.5rem",
            fontWeight: '600',
        },
        subtitle2: {
            fontFamily: "Bungee Hairline",
            fontSize: "2.5rem",
            fontWeight: '600',
        },
        body1: {
            fontFamily: "Libre Franklin",
            fontSize: "2rem",
            fontWeight: '600',
        },
        body2: {
            fontFamily: "Libre Franklin",
            fontSize: "2rem",
            fontWeight: '600',
        },
        button: {
            fontFamily: "Libre Franklin",
            fontSize: "1.5rem",
            fontWeight: '600',
        }
    }
});


export const theme = responsiveFontSizes(appTheme);
