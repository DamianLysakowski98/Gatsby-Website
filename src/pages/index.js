import React from "react"
import { createGlobalStyle } from "styled-components"

////////// Component /////////////

import Header from "../components/Header"
import Content from "../components/Content"
import Footer from "../components/Footer"

////////// Style /////////////

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,400;1,700&display=swap');
    font-family: 'Mulish', sans-serif;
    @media (min-width: 1080px) {
      padding: 0;
      margin: 0;
      width: 1200px;
      margin: 0 auto;
      height: 100vh;
    }
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
