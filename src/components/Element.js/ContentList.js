import React from "react"
import styled from "styled-components"

////////// Image /////////////

import stroke from "../../image/stroke.svg"

////////// Style /////////////

const StyledListItem = styled.span`
  font-size: 18px;
  line-height: 23px;
  font-weight: 600;
  color: rgb(0, 0, 0);
  position: relative;
  margin-left: 24px;
  @media (min-width: 768px) {
    margin-left: 42px;
  }
`
const StyledWrapperList = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: start;
  aligne-items: center;

  @media (min-width: 768px) {
    :hover {
      img {
        margin-left: 10px;
        transform: rotate(360deg);
      }
    }
  }
`
const StyledSpanAnimation = styled.span`
  @media (min-width: 768px) {
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
  }
`
const StyledImage = styled.img`
  transition: all 0.6s ease 0s;
`

const Item = props => (
  <>
    <StyledWrapperList>
      <StyledImage src={props.image} />
      <StyledListItem>{props.content}</StyledListItem>
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
        <StyledImage src={stroke} />
        <StyledListItem>
          Access to the data{" "}
          <StyledSpanAnimation>that matters </StyledSpanAnimation>faster
        </StyledListItem>
      </StyledWrapperList>
    </>
  )
}
export default ContentList
