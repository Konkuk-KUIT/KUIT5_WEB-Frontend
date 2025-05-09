import React from 'react'
import styled from 'styled-components'

const Input = ({value,onChange,placeholder="input something..."}) => {
    return (
        <StyledInput
            type={"text"}
            value={value}
            placeholder={placeholder}
            onChange={onChange} />
    )
};


const StyledInput = styled.input`
    padding : 8px 4px;
    border-radius : 12px;
    border : 1px solid #eee;
`;

export default Input
