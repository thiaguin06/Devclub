import styled from "styled-components";


export const Container= styled.div`
background: linear-gradient(120deg, #FFDEE9, #B5FFFC);

display:flex;
flex-direction:column;
align-items:center;
justify-content:space-evenly;
padding:20px;
/* use min-height so content can grow on smaller screens without being clipped
    and allow scrolling when content exceeds the viewport */
min-height:100vh;
width:100%;
overflow-y:auto;
`


export const TopBackground = styled.div`
background:linear-gradient(to right,#fe7e5d,#7f3841);
height:30vh;
width:90vw;
max-width:800px;
border-radius:30px;
display:flex;
align-items:center;
justify-content:center;
img{
    max-width:100%;
    max-height:100%;
}`


export const  Form = styled.form`
display:flex;
flex-direction:column;
align-items:center;
gap:20px;
max-width:500px;
`
export const Title = styled.h2`
color:#fff;
text-align:center;
font-size:34px;
font-weight:700;
font-style:normal;
`
export const ContainerInputs = styled.div`
display:flex;
gap:20px;
`


export const Input = styled.input`
background-color:#fff;
border: 1px solid #0f0606ff;
outline:none;
border-color: #FF6B00;
border-radius:10px;
width:100%;
padding:10px;
`


export const InputLabel = styled.label`
color:#fff;
font-size:15px;
font-weight:500;
span{
    color: #f99603ff;
    font-weight:700px; 
}`
