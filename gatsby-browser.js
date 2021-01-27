/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import colors from "./src/theme/theme"

const globalStyle = createGlobalStyle`
  *{
    margin : 0;
    padding : 0;
    box-sizing: border;
  }
`
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={colors}>
    <globalStyle />
    {element}
  </ThemeProvider>
)
