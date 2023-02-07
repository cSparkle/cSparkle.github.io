import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "gatsby";
import { ThemeProvider } from "@mui/material";
import { theme } from "../styles/theme";
import { StyledLink } from "../styles/index";

const pages = ["about", "projects", "wiki", "resume"];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="sticky">
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{
                        display: { xs: "flex", md: "flex" },
                        height: "110px",
                        justifyContent: "space-between"
                    }}>
                        <Typography
                            variant="h1"
                            noWrap
                            href="/"
                            sx={{
                                display: { xs: "none", md: "flex" },
                                justifySelf: "flex-start",
                                margin: 0,
                                width: "auto"
                            }}
                        >
                            C.Thomas
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                            <IconButton
                                size="large"
                                aria-label="menu"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            aria-label="Cortney Thomas"
                            variant="h1"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                alignSelf: "center",
                                color: "#3d405b",
                                display: { xs: "flex", md: "none" },
                                fontSize: "2.5rem"
                            }}
                        >
                            C.Thomas
                        </Typography>
                        <Box sx={{
                            display: { xs: "none", md: "flex" },
                            justifyContent: "space-between",
                            justifySelf: "flex-end",
                            margin: 0,
                            maxWidth: "500px",
                            width: "40vw"
                        }}
                        >
                            {pages.map((page) => (
                                <StyledLink to={page}>{page}</StyledLink>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}
export default ResponsiveAppBar;
