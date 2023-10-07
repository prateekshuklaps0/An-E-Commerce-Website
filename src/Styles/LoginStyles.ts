import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  background-color: #00a8e0;
  color: #ffffff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0089b5;
  }
`;

export const ErrorText = styled.p`
  color: #ff0000;
`;
