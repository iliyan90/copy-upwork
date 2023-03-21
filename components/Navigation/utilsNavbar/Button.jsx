import React from 'react'
import {IoIosArrowDown} from 'react-icons/io'
import styled from 'styled-components'

const Button = ({label}) => {
  return (
        <Btn>
            <div>
                {label}
            </div> 
            <div>
                <IoIosArrowDown size={12}/>
            </div>
        </Btn>
  )
}

export default Button

const Btn = styled.button`
    display: flex;
    gap: 10px;
    color: 'grey';
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-weight: 600;
    padding: 10px;
    font-size: 12px;
    &:hover{
        color: green;
    }
    @media (max-width: 768px){
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
        font-size: 18px;
    }    
`