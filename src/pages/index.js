import React from "react"
import { createGlobalStyle } from "styled-components"

////////// Component /////////////

import Header from "../components/Header"
import Content from "../components/Content"
import Footer from "../components/Footer"

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    width: 1200px;
    margin: 0 auto;
    height: 100vh;
    a {
        text-decoration:  none;
      }
    }
    h1{
      margin: 0px;
    }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  `

const IndexPage = () => (
  <>
    <GlobalStyle />
    <Header />
    <Content />
    <Footer />
  </>
)
export default IndexPage
