import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

////////// Image /////////////

import Logo from "../image/test.svg"

////////// Style /////////////

const StyledFixedWrapper = styled.div`
  position: fixed;
  width: 100%;
  border-bottom: 1px solid #ddd;
  top: 0;
  left: 0;
  z-index: 120;
  background-color: #fff;
`

const StyledNavigationWrapper = styled.div`
  max-width: 1200px;
  height: 80px;
  margin: 0 auto;
  padding: 16px 0 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const StyledNavigationLinkWrapper = styled.div`
  display: none;
  @media (min-width: 780px) {
    display: flex;
  }
`
const StyledNavigationLink = styled.p`
  font-size: 16px;
  font-weight: 800;
  text-decoration: none;
  color: ${props => (props.primary ? "black" : "white")};
  background-color: ${props => (props.black ? "black" : "white")};
  padding: 8px 20px !important;
  border-radius: 5px;
  display: flex;
`
const StyledImage = styled.img`
  width: 130px;
  height: 40px;
`

const Header = () => {
  return (
    <StyledFixedWrapper>
      <StyledNavigationWrapper>
        <Link className="image-header" to="/404">
          <StyledImage src={Logo} />
        </Link>
        <StyledNavigationLinkWrapper>
          <Link to="/404">
            <StyledNavigationLink primary>Log in</StyledNavigationLink>
          </Link>
          <Link to="/404">
            <StyledNavigationLink black>Sing up free</StyledNavigationLink>
          </Link>
        </StyledNavigationLinkWrapper>
      </StyledNavigationWrapper>
    </StyledFixedWrapper>
  )
}
export default Header
