import { ErrorMessage, Field, Form } from 'formik';

import styled from 'styled-components';

export const FormStyled = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const FieldStyled = styled(Field)`
  width: 100%;
  height: 30px;
  margin: 0 auto;

  padding: 0 10px 0 10px;

  border: 1px solid #c3d9d5;
  outline: none;
`;

export const ButtonSubmit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 150px;
  height: 30px;

  border: 1px solid #c3d9d5;

  cursor: pointer;
  :hover {
    background-color: #c3d9d5;
  }
`;

export const ErrorStyled = styled(ErrorMessage)`
  display: flex;
  color: red;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1), 1px 1px 1px rgba(0, 0, 0, 0.5);
`;
