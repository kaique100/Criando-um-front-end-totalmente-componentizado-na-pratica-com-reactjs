import styled from "styled-components";


export const Wrapper = styled.div`

button{
 
    align-content: center;
    background-color: rgb(255, 255, 255);
    border-color: #260120; 
    border-style: solid;
    color: #260120;
    font-size: 120%;
    border-radius: 1.7rem;
    cursor: pointer;
    border: 0.1rem solid #260120;
    cursor: pointer;
    text-align: center;
    width: 174px;
    height: 45px;
    margin-top: 10px;
    margin-left: 1%;
}
button:hover{
    background-color: #000;
    color: #fff;
    border-color: #000;

    transition-duration: 700ms;
    transition-timing-function: ease-in-out ;
    /*de fora para dentro a transição de cores*/
}


`;
