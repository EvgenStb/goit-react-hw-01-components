import styled from 'styled-components';

export const FriendsList = styled.ul`
padding: 0px;
margin: 10px 20px;
  list-style: none;
  display: flex;
  flex-direction:column;
`;
export const Friend = styled.li`
  display: flex;
  align-items: center;
  width: 150px;
  margin-bottom: 5px;
  padding: 5px;
  background-color: #81dacb;
  border: 1px solid #bebebe;
  border-radius: 5px;
  transition-duration: 0.5s;
  cursor: pointer;
  &:hover {
    background-color: #8197da;
  }
`;
export const OnlineStatus = styled.span`
  display: block;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  background-color: red;
  margin:0 10px;
  ${props =>
    props.isOnline &&
    `
    background-color: green;`}
`;
export const FriendImg = styled.img `
margin-right: 10px;`