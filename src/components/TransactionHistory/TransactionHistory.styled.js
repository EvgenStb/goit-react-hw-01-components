import styled from 'styled-components';

export const Tabel = styled.table`
  min-width: 400px;
  border-collapse: 1px solid black;
`;
export const TableHead = styled.thead`
  height: 40px;
  padding: 15px;
  font-weight: 500;
  color: white;
  background-color: #5ebbca;
`;

export const TableString = styled.tr`
  height: 40px;
  text-align: center;
  background-color: #f2f2f2;
  cursor: pointer;
  &:nth-child(even) {
    background-color: #98c7ce;
  }
  &:hover {
    background-color: rgba(66, 205, 218, .5);
  }
`;
