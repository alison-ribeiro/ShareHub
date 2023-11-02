import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items:center; 
    flex-direction: column;
    
    height: 100%;
    
    .container{
        max-width: 150px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: blue;

    button{
        display:inline-block;
    }
    
    input{
        background-color: white;
        padding: 10px;
        font-size: 25px;
    }

`;

