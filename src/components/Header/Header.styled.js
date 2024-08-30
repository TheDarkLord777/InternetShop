import { Link } from "react-router-dom"
import styled from "styled-components"

export const LinkTo=styled(Link)`
text-decoration:none;
padding:0 10px;
font-weight:bold;
color:green;
display:flex;
align-items:center;
gap:10px;   
&:last-child{
    margin-left:auto;
    color:orange;
}
&:nth-child(1){
    color:black;
}
&:nth-child(2){
    color:aliceblue;
}
&:nth-child(3){
    color:yellow;
}
`