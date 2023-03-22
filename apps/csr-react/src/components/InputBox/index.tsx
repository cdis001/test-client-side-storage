import React, { Dispatch, SetStateAction, FormEvent } from "react";
import styled from "styled-components";

const InputStyle = styled.input`
  height: 38px;
  padding: 8px 12px;
  box-sizing: border-box;
  margin: 10px 0;
  border: 1px solid #dbdbdb;
  border-radius: 4px;

  &::placeholder {
    color: #ccc;
  }

  &:focus {
    outline: none;
    border: 1px solid #949494;
  }
`;

type InputBoxProps = {
  placeholder?: string;
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
  type?: string;
};

const InputBox = ({ placeholder, value, setValue, type }: InputBoxProps) => {
  return (
    <InputStyle
      placeholder={placeholder}
      value={value}
      onChange={(e: FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
      }}
      type={type}
    />
  );
};

export default InputBox;
