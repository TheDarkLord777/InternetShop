import styled from "styled-components";

export const Span=styled.div`
    width: 8%;
    height: 1vh;
    background-color: ${props=>props.$active ? "white" : "black"};
    margin-top: auto;
    cursor: pointer;
    box-shadow: 0 0 3px rgba(255, 255, 255, 1);
    
    `