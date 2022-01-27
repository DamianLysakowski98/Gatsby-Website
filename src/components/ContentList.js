import React from "react"
import styled from "styled-components"

////////// Image /////////////

import stroke from "../image/stroke.svg"

const StyleListItem = styled.span`
  font-size: 18px;
  line-height: 23px;
  margin-top: 16px;
  font-weight: 700;
  color: rgb(0, 0, 0);
  position: relative;
  margin-left: 42px;
`
const StyledWrapperList = styled.div`
  margin-top: 16px;
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

const Item = props => (
  <>
    <StyledWrapperList>
      <img src={props.image} />
      <StyleListItem>{props.content}</StyleListItem>
    </StyledWrapperList>
  </>
)
const ContentList = props => {
  return (
    <>
      {props.children}
      <Item
        image={stroke}
        content="Understand how to get most of qualitative analytics"
      />
      <Item
        image={stroke}
        content="Knowledge about LiveSession’s power features"
      />
      <Item
        image={stroke}
        content="An extended trial period and enterprise features"
      />
      <Item image={stroke} content="An offer tailored to your needs" />
      <StyledWrapperList>
        <img src={stroke} />
        <StyleListItem>
          Access to the data{" "}
          <StyledSpanAnimation>that matters </StyledSpanAnimation>faster
        </StyleListItem>
      </StyledWrapperList>
    </>
  )
}
export default ContentList
