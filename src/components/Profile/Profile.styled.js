import styled from "styled-components";


export const ProfileCard = styled.div `
    margin:20px 20px;
    border: 1px solid grey;
    border-radius:5px;
    width: 300px;
    /* width: calc((100% - 80px)/5); */
`
// ============UserInfo======================
export const UserInfo = styled.div `
text-align: center;
padding: 20px;
border-bottom: 1px solid grey;
`
export const UserPhoto = styled.img `
max-width: 150px;
border-radius: 50%;
`
export const UserName = styled.p `
font-size: 24px;
font-weight: 700;
margin: 10px 0;
`
export const UserAbout = styled.p `
font-size:16px;
color:grey;
margin: 5px 0;`

// =========UserStats=========================

export const UserStatsList = styled.ul `
display:flex;
padding: 0;
margin: 0;
list-style:none;
background-color: #EBEBEB;
`
export const UserStatsItem = styled.li `
display: flex;
padding: 10px;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
flex-grow: 1;

&:not(:last-child) {
    border-right: 1px solid black;
} 
    
`
export const UserStatsMark = styled.span `
/* padding: 5px; */
margin-bottom: 10px;
color: #B9B8B8;
font-size: 16px;
font-weight: 500;
`
export const UserStatsMarkValue = styled.span `
color: #272727;
font-size: 18px;
font-weight: 700;
`