import styled from '@emotion/styled';

export const StatList = styled.ul`
  width: 400px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  padding-bottom: 2px;
  box-shadow: 0px 2px 5px rgb(217 213 213);
  background-color: ${p => p.theme.colors.secondary};
`;
