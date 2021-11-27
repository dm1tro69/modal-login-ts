import React, {FC} from 'react';
import styled from "styled-components";


const InputWrapper = styled.div`
    margin: 0 auto;
  display: flex;
  align-items: center;
  
  input {
    display: block;
    background: none;
    border: none;
    &:focus {
      outline: none;
      
    }
  }
  
`
const IconContainer = styled.div`
    width: 33px;
  padding-left: 6px;
`
const ModalInput = styled.input`
    display: inline-block;
  outline: none;
  padding: 5px 0;
  margin: 5px 0;
  width: 100%;
  text-indent: 8px;
  
`

const InputContainer = styled(InputWrapper)`
    margin-bottom: 10px;
  width: 100%;
  font-size: 60%;
  border: 1px solid grey;
  
`

type InputWithIconTypeProps = {icon?: JSX.Element} & JSX.IntrinsicElements['input']

const InputWithIcon:FC<InputWithIconTypeProps> = ({icon, ref, ...props}) => {
    return (
        <InputContainer>
            {icon && <IconContainer>{icon}</IconContainer>}
            <ModalInput {...props}/>
        </InputContainer>
    );
};

export default InputWithIcon;
