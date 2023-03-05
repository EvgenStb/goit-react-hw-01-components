import styled from "styled-components";

export const Section = styled.section `
width: 300px;
margin: 20px 20px;
border: 1.5px solid #676767;`

export const TitleStats = styled.h2 `
margin:0;
padding: 10px;
border-bottom: 1px solid #676767;
font-siz: 25px;
text-align:center;
color: #795A5A;
`
export const StatsList = styled.ul `
list-style: none;
display:flex;
padding: 0;
margin: 0;
`
export const StatListItem = styled.li `
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
flex-grow: 1;
padding: 5px;
color: #fff;
&:not(:last-child) {
    border-right: 1px solid #676767;
}`

export const StatsName = styled.span `
`
export const StatsValue = styled.span `
font-size: 18px;
font-weight: 500;
margin-top: 5px;
`







