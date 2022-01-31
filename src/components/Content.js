import React from "react"
import styled from "styled-components"

////////// Component /////////////

import ContentList from "./Element.js/ContentList"
import Form from "../components/Element.js/Form"

////////// Style /////////////

const StyledSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 120px 0;
  width: 100%;
  margin: 0 auto;
  @media (min-width: 1080px) {
    flex-direction: row;
    padding: 280px 0 170px 0;
    width: 1170px;
    margin: 0 auto;
  }
`
const StyledSectionLeft = styled.section`
  width: 100%;
  padding: 0 20px;
  @media (min-width: 1080px) {
    z-index: 100;
    width: 60%;
  }
`
const StyledSectionHeader = styled.h1`
  font-size: 36px;
  line-height: 48px;
  @media (min-width: 1080px) {
    font-size: 48px;
    font-weight: 700;
    line-height: 60px;
  }
`
const StyledSpanAnimation = styled.span`
  position: relative;
  display: inline;
  font-weight: 700;

  @media (min-width: 1080px) {
    position: relative;
    display: inline;
    font-weight: 700;
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
  }
`
const StyledSectionArticle = styled.p`
  margin-top: 24px;
  font-size: 20px;
  line-height: 30px;
  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 34px;
    margin: 32px 30px 0 0;
    letter-spacing: 1px;
    text-align: justify;
  }
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
