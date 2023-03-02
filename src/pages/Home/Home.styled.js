import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Test = styled(NavLink)`
display: inline-flex;
justify-content: center;
align-items: center;
border-radius: 20px 20px 0px 0px;
background-color:lightgray;
color:#000000;

width: 138px;
height: 40px;

font-family: Roboto;
font-size: 12px;
font-weight: 700;
line-height: 14px;
letter-spacing: 0.02em;
text-align: center;
text-transform: uppercase;

&.active{
    color:#FF751D;
    background-color:#FFFFFF;
}

`