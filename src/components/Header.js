import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

////////// Image /////////////

import Logo from "../image/Group 65.png"

const StyleFixedWrapper = styled.div`
  position: fixed;
  width: 100%;
  border-bottom: 1px solid #ddd;
  left: 0;
  z-index: 120;
  background-color: #fff;
`

const StyleNavigationWrapper = styled.div`
  width: 1200px;
  height: 80px;
  margin: 16px auto 0 auto;
  padding-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const StyleNavigationLinkWrapper = styled.div`
  display: flex;
`
const StyleNavigationLink = styled.p`
  font-size: 16px;
  font-weight: 800;
  text-decoration: none;
  color: ${props => (props.primary ? "black" : "white")};
  background-color: ${props => (props.black ? "black" : "white")};
  padding: 8px 20px !important;
  border-radius: 5px;
  display: flex;
`

const Header = () => {
  return (
    <StyleFixedWrapper>
      <StyleNavigationWrapper>
        <Link className="image-header" to="/404">
          <img src={Logo} />
        </Link>
        <StyleNavigationLinkWrapper>
          <Link to="/404">
            <StyleNavigationLink primary>Log in</StyleNavigationLink>
          </Link>
          <Link to="/404">
            <StyleNavigationLink black>Sing up free</StyleNavigationLink>
          </Link>
        </StyleNavigationLinkWrapper>
      </StyleNavigationWrapper>
    </StyleFixedWrapper>
  )
}
export default Header
