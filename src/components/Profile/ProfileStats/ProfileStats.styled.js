import styled from '@emotion/styled';

export const Stats = styled.ul`
  display: flex;
  width: 400px;
  margin-bottom: 0;
  padding: 0;
  justify-content: space-between;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgb(217, 213, 213, 0.5);
  list-style: none;
`;

export const StatsInfo = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 2px solid lightblue;
  background-color: white;
  padding-left: 41px;
  padding-right: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Label = styled.p`
  font-size: 14px;
  color: rgb(103, 102, 102);
  margin: 0;
`;

export const Quantity = styled.p`
  font-size: 20px;
  font-style: 'Roboto';
  margin: 0;
`;
