import React from "react"
import { Link } from "gatsby";
import styled from "@emotion/styled"
import { theme } from "./theme"

export const StyledLink = styled(Link)`
    color: ${theme.palette.text.main};
    font-family: ${theme.typography.h2.fontFamily};
    font-size: 1.2rem;
    font-weight: 500;
    text-decoration: none;
    text-transform: uppercase;
`