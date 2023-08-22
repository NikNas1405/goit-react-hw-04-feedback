import styled from 'styled-components';

export const FeedbackList = styled.ul`
  display: flex;
  justify-content: space-between;
  max-width: 300px;
  gap: 10px;
`;

export const FeedbackListItem = styled.li`
  text-align: center;
`;

export const Button = styled.button`
  font-size: 15px;
  font-weight: 500;
  width: 100px;

  cursor: pointer;
  color: #008080;
  background-color: #cdf7d6;
  border: none;
  border-radius: 30%;

  &:is(:focus, :hover) {
    color: #1c1694;
    background-color: #5cff7c;
  }
`;
