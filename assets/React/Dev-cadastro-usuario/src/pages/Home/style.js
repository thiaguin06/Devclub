import styled from "styled-components";


export const Container= styled.div`
	background: linear-gradient(120deg, #FFDEE9, #B5FFFC);
	display:flex;
	flex-direction:column;
	align-items:center;
	justify-content:center;
	padding:20px;
	min-height:100vh;
	width:100%;
	overflow-y:auto;
	gap: 24px;
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
	max-width:520px;
	width: 90vw;
	padding: 24px;
	background: rgba(255,255,255,0.9);
	border-radius: 16px;
	box-shadow: 0 8px 24px rgba(0,0,0,0.12);
`
export const Title = styled.h2`
	color:#0f0606;
	text-align:center;
	font-size:28px;
	font-weight:700;
	margin: 0 0 8px 0;
	letter-spacing: 0.3px;
`
export const ContainerInputs = styled.div`
	display:flex;
	gap:16px;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;
`


export const Input = styled.input`
	background-color:#fff;
	border: 2px solid #e0e0e0;
	outline:none;
	border-color: #FF6B00;
	border-radius:12px;
	width:100%;
	padding:12px 14px;
	font-size: 14px;
	transition: all 0.2s ease;
	&:focus {
		border-color: #ff8b2b;
		box-shadow: 0 0 0 3px rgba(255,139,43,0.1);
	}
	&::placeholder {
		color: #999;
	}
`


export const InputLabel = styled.label`
	color:#0f0606;
	font-size:14px;
	font-weight:600;
	margin-bottom: 6px;
	display: block;
	span{
		color: #ff6b00;
		font-weight:700;
		margin-left: 2px;
	}
`
