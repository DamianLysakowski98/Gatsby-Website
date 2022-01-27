import React from "react"
import styled from "styled-components"

////////// Component /////////////

import ContentList from "./ContentList"
import Form from "./Form"

const SectionWrapper = styled.section`
  display: flex;
  padding: 280px 0;
`
const StyleSectionLeft = styled.section`
  z-index: 100;
  width: 60%;
`
const StyleSectionHeader = styled.h1`
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
const StyleSectionArticle = styled.p`
  font-size: 22px;
  line-height: 34px;
  margin-top: 32px;
  letter-spacing: 1px;
`
const StyleSectionListHeader = styled.h2`
  font-size: 18px;
  margin: 40px 0 24px 0;
  letter-spacing: 1px;
`

const Content = props => {
  return (
    <>
      <SectionWrapper>
        <StyleSectionLeft>
          <StyleSectionHeader>
            Request a LiveSession
            <br />
            <StyledSpanAnimation>demo today</StyledSpanAnimation>
          </StyleSectionHeader>
          <StyleSectionArticle>
            If you are wondering how LiveSession can help you get to know your
            visitors better, schedule an in-depth product demo and get an offer
            tailored to your needs.
          </StyleSectionArticle>
          <ContentList>
            <StyleSectionListHeader>
              What you will get on of this demo:
            </StyleSectionListHeader>
          </ContentList>
        </StyleSectionLeft>
        <Form />
      </SectionWrapper>
    </>
  )
}
export default Content
