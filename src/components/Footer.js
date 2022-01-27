import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

////////// Style /////////////

const StyledWrapper = styled.div`
  background: #f8f8f8;
  position: absolute;
  left: 0;
  right: 0;
  padding-top: 23px;
`
const StyledSectionWrapper = styled.div`
  width: 1200px;
  margin: 0 auto 40px auto;
  display: flex;
  justify-content: space-between;
`

const StyledHeader = styled.h2`
  font-size: 18px;
  font-weight: 800;
  margin: 40px 0 16px 0;
`
const StyledItemListContent = styled.p`
  font-size: 16px;
  margin: 16px 0 0 0;
  color: black;
  :hover {
    text-decoration: underline;
  }
`
const StyledColumn = styled.div`
  width: 15%;
`
const StyledReadMore = styled.p`
  font-size: 16px;
  font-weight: 800;
  
  :hover{
      span{
          margin-left:20px;
      }
  }
  }
  a {
    color: #0a4ed6;
    
  }
`
const StyledArrow = styled.span`
  font-weight: 400;
  margin-left: 5px;
  transition: all 0.5s ease 0s;
`

const ItemHeaderContent = props => (
  <>
    <StyledHeader>{props.ContentFooterHeader}</StyledHeader>
  </>
)
const ItemFooterListContent = props => (
  <>
    <Link to="/404">
      <StyledItemListContent>{props.ContentFooterList}</StyledItemListContent>
    </Link>
  </>
)

const Footer = () => {
  return (
    <>
      <StyledWrapper>
        <StyledSectionWrapper>
          <StyledColumn>
            <ItemHeaderContent ContentFooterHeader="Product" />
            <ItemFooterListContent ContentFooterList="Pricing" />
            <ItemFooterListContent ContentFooterList="Updates" />
            <ItemHeaderContent ContentFooterHeader="Features" />
            <ItemFooterListContent ContentFooterList="Sesion replays" />
            <ItemFooterListContent ContentFooterList="Filters and segments" />
            <ItemFooterListContent ContentFooterList="Engagement score" />
            <ItemFooterListContent ContentFooterList="Custom property" />
            <ItemFooterListContent ContentFooterList="Rade and Error click" />
            <ItemFooterListContent ContentFooterList="Inspect mode" />
            <ItemFooterListContent ContentFooterList="Recording rules" />
            <ItemFooterListContent ContentFooterList="Insights" />
          </StyledColumn>
          <StyledColumn>
            <ItemHeaderContent ContentFooterHeader="Solutions" />
            <ItemFooterListContent ContentFooterList="Conversion optimalizion" />
            <ItemFooterListContent ContentFooterList="User engagement tracking" />
            <ItemFooterListContent ContentFooterList="Usability testing" />
            <ItemFooterListContent ContentFooterList="Aplication debuging" />
            <ItemFooterListContent ContentFooterList="Customer support" />
            <ItemFooterListContent ContentFooterList="Performance marketing" />
            <ItemHeaderContent ContentFooterHeader="Integrations" />
            <ItemFooterListContent ContentFooterList="Intercom" />
            <ItemFooterListContent ContentFooterList="Google Analytics" />
            <ItemFooterListContent ContentFooterList="Segment" />
            <ItemFooterListContent ContentFooterList="All integrations" />
          </StyledColumn>
          <StyledColumn>
            <ItemHeaderContent ContentFooterHeader="Customers" />
            <ItemFooterListContent ContentFooterList="Case studies" />
            <ItemFooterListContent ContentFooterList="G2 Crowd" />
            <ItemFooterListContent ContentFooterList="Capterra" />
            <ItemFooterListContent ContentFooterList="GetApp" />
            <ItemHeaderContent ContentFooterHeader="Copare with" />
            <ItemFooterListContent ContentFooterList="FullStory" />
            <ItemFooterListContent ContentFooterList="HotJar" />
            <ItemFooterListContent ContentFooterList="Mouseflow" />
          </StyledColumn>
          <StyledColumn>
            <ItemHeaderContent ContentFooterHeader="Resorces" />
            <ItemFooterListContent ContentFooterList="API Developers" />
            <ItemFooterListContent ContentFooterList="Help center" />
            <ItemFooterListContent ContentFooterList="Status page" />
            <ItemFooterListContent ContentFooterList="Newsletters" />
            <ItemHeaderContent ContentFooterHeader="Company" />
            <ItemFooterListContent ContentFooterList="Contact us" />
            <ItemFooterListContent ContentFooterList="Careers" />
          </StyledColumn>
          <StyledColumn>
            <ItemHeaderContent ContentFooterHeader="Legal" />
            <ItemFooterListContent ContentFooterList="Terms of service" />
            <ItemFooterListContent ContentFooterList="Privaty policy" />
            <ItemFooterListContent ContentFooterList="GDPR" />
            <ItemFooterListContent ContentFooterList="Data security" />
            <ItemFooterListContent ContentFooterList="Opt out" />
          </StyledColumn>
          <StyledColumn>
            <ItemHeaderContent ContentFooterHeader="Blog" />
            <ItemFooterListContent ContentFooterList="UX in the Time of Conversation" />
            <ItemFooterListContent ContentFooterList="Ideas For improving Customers Experience" />
            <ItemFooterListContent ContentFooterList="How to Analyze Session Recordings (Effectively)" />
            <ItemFooterListContent blue ContentFooterList="Read more post" />
            <StyledReadMore>
              <Link to="/404">
                Read more post
                <StyledArrow>&#10140;</StyledArrow>
              </Link>
            </StyledReadMore>
          </StyledColumn>
        </StyledSectionWrapper>
      </StyledWrapper>
    </>
  )
}
export default Footer
