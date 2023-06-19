import React from 'react'
// import { LineStyle, Timeline, TrendingUp, PermIdentity, Storefront, LocalAtm, Assessment, Drafts, Feedback, Forum, Work, Receipt, PieChart } from "@material-ui/icons";
import styled, { css } from "styled-components";
import { Link } from 'react-router-dom';
import ImgLogo from "../../Images/logo.png"

const AdminSidebar = () => {
    return (
        <SidebarContainer>
            <SidebarWrapper>
                <Logo>
                <LogoImage src={ImgLogo} alt="Logo" />
                </Logo>
                
                <SidebarMenu>
                    <SidebarTitle>Dashboard</SidebarTitle>
                    <SidebarList>
                       <Link to="/admin" className='link' style={{ textDecoration: 'none',color:"grey"}}>
                            <SidebarListItem>
                                {/* <MyLineStyle /> */}
                                Home
                            </SidebarListItem>
                      </Link>

                      <Link to="/AdminAnalytics">
                      <SidebarListItem>
                            {/* <MyTimeline /> */}
                            Analytics
                        </SidebarListItem>
                      </Link>
                        
                        {/* <SidebarListItem>
                            <MyTrendingUp />
                            Sales
                        </SidebarListItem> */}
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarTitle>All Menu</SidebarTitle>
                    <SidebarList>
                            <Link to="/adminuni" className='link'  style={{ textDecoration: 'none',color:"grey"}}>
                            <SidebarListItem>
                                {/* <MyPermIdentity /> */}
                                Universities
                            </SidebarListItem>
                            </Link>
                            <Link to="/newUser" className='link'  style={{ textDecoration: 'none',color:"grey"}}>
                            <SidebarListItem>
                                {/* <MyStorefront /> */}
                                Add University
                            </SidebarListItem>
                            </Link>
                            

                           
                        
                        {/* <SidebarListItem>
                            <MyLocalAtm />
                            Transactions
                        </SidebarListItem> */}
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarTitle>Connect</SidebarTitle>
                    <SidebarList>
                        <SidebarListItem>
                            {/* <MyDrafts /> */}
                            Mail
                        </SidebarListItem>
                        <SidebarListItem>
                            {/* <MyFeedback /> */}
                            Feedback
                        </SidebarListItem>
                        <SidebarListItem>
                            {/* <MyForum /> */}
                            Messages
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarTitle>Employees</SidebarTitle>
                    <SidebarList>
                     <Link to="/adminDetails" className='link' style={{ textDecoration: 'none',color:"grey"}}>
                     <SidebarListItem>
                            {/* <MyWork /> */}
                            Admins
                        </SidebarListItem>
                     </Link>

                        <Link to="/userAd" className='link' style={{ textDecoration: 'none',color:"grey"}}>
                        <SidebarListItem>
                            {/* <MyPieChart /> */}
                            Add Admin
                        </SidebarListItem>
                        </Link>
                        
                        <SidebarListItem>
                            {/* <MyReceipt /> */}
                            Reports
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
export default AdminSidebar;

const SidebarContainer = styled.div`
    flex:1;
    
    height: calc(100vh);
    // background-color: rgb(251, 251, 255);
    position: sticky;
    left:10px
    padding:10px
    width:200px
`
const SidebarWrapper = styled.div`
    padding-top:10px;
    padding-left: 30px;
    padding-right:30px;
    color: #555;
`
const SidebarMenu = styled.div`
    margin-bottom: 10px;
`
const SidebarTitle = styled.h3`
    font-size: 13px;
    color: rgb(187, 186, 186);
    text-align:left
`
const SidebarList = styled.ul`
    list-style: none;
    padding: 5px;
`
const SidebarListItem = styled.li`
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;
&:hover {
        background-color: rgb(240, 240, 255);
    }
`

const Logo= styled.div`
display: flex;
  align-items: center;
  height: 60px;
  
  
`
const LogoImage = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
`;

const sharedStyle = css`
    margin-right: 5px;
    font-size: 20px !important;
`
/* 
const MyLineStyle = styled(LineStyle)`
    ${sharedStyle}
`
const MyTimeline = styled(Timeline)`
    ${sharedStyle}
`
const MyTrendingUp = styled(TrendingUp)`
    ${sharedStyle}
`
const MyPermIdentity = styled(PermIdentity)`
    ${sharedStyle}
`
const MyStorefront = styled(Storefront)`
    ${sharedStyle}
`
const MyAssessment = styled(Assessment)`
    ${sharedStyle}
`
const MyLocalAtm = styled(LocalAtm)`
    ${sharedStyle}
`
const MyDrafts = styled(Drafts)`
    ${sharedStyle}
`
const MyFeedback = styled(Feedback)`
    ${sharedStyle}
`
const MyForum = styled(Forum)`
    ${sharedStyle}
`
const MyWork = styled(Work)`
    ${sharedStyle}
`
const MyPieChart = styled(PieChart)`
    ${sharedStyle}
`
const MyReceipt = styled(Receipt)`
    ${sharedStyle}
` */
