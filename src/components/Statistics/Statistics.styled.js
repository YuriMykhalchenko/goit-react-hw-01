import styled from '@emotion/styled';

export const StatisticsWrapper = styled.section`
  width: 400px;
  padding: 60px;
  background-color: ${p => p.theme.colors.wrapper};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
`;

export const Title = styled.h2`
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
  margin: 0;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  background-color: ${p => p.theme.colors.secondary};
  color: ${p => p.theme.colors.heading};
  box-shadow: 0px 2px 5px rgb(217 213 213);
`;
