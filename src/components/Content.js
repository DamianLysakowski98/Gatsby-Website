import React from "react"
import styled from "styled-components"

////////// Component /////////////

import ContentList from "./Element.js/ContentList"
import Form from "../components/Element.js/Form"

////////// Style /////////////

const StyledSectionWrapper = styled.section`
  display: flex;
  padding: 220px 0;
  width: 1200px;
  margin: 0 auto;
`
const StyledSectionLeft = styled.section`
  z-index: 100;
  width: 60%;
`
const StyledSectionHeader = styled.h1`
  font-size: 48px;
  font-weight: 800;
  line-height: 60px;
`
const StyledSpanAnimation = styled.span`
  position: relative;
  display: inline;
  font-weight: 800;
  :hover::after {
    height: 100%;
  }
  ::after {
    position: absolute;
    bottom: 0px;
    left: 0px;
    content: "";
    width: 100%;
    background-color: rgb(255, 202, 0);
    height: 35%;
    z-index: -1;
    transition: all 0.2s ease 0s;
  }
`
const StyledSectionArticle = styled.p`
  font-size: 22px;
  line-height: 34px;
  margin: 32px 30px 0 0;
  letter-spacing: 1px;
  text-align: justify;
`
const StyledSectionListHeader = styled.h2`
  font-size: 18px;
  margin: 40px 0 24px 0;
  letter-spacing: 1px;
`

const Content = props => {
  return (
    <>
      <StyledSectionWrapper>
        <StyledSectionLeft>
          <StyledSectionHeader>
            Request a LiveSession
            <br />
            <StyledSpanAnimation>demo today</StyledSpanAnimation>
          </StyledSectionHeader>
          <StyledSectionArticle>
            If you are wondering how LiveSession can help you get to know your
            visitors better, schedule an in-depth product demo and get an offer
            tailored to your needs.
          </StyledSectionArticle>
          <ContentList>
            <StyledSectionListHeader>
              What you will get on of this demo:
            </StyledSectionListHeader>
          </ContentList>
        </StyledSectionLeft>
        <Form />
      </StyledSectionWrapper>
    </>
  )
}
export default Content
