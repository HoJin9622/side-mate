import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 3rem;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 426px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputContainer = styled.div`
  width: 90%;
  margin-bottom: 24px;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 30px;
  border: 1px solid #8692a6;
  border-radius: 6px;
  font-size: 0.875rem;
`;

export const Button = styled.button`
  width: 90%;
  height: 64px;
  border: none;
  background-color: #1565d8;
  border-radius: 6px;
`;

export const LoginLabel = styled.span`
  color: #ffffff;
  font-size: 1rem;
`;

export const TextLabel = styled.div`
  color: #696f79;
  font-size: 1rem;
  margin-bottom: 0.875rem;
`;
