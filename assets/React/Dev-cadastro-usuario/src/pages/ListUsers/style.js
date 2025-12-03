import styled from "styled-components";

export const ContIner = styled.div``;

export const Title = styled.h2`
	text-transform: capitalize;
	font-size: 28px;
	margin: 8px 0 6px;
	/* gradient text to match TopBackground */
	background: linear-gradient(90deg, #ff8b2b, #7f3841);
	-webkit-background-clip: text;
	background-clip: text;
	color: transparent;
	font-weight: 700;
`;

/* Page heading used for the main list title */
export const PageHeading = styled.h1`
	color: #7f3841; /* deep warm maroon that matches the TopBackground gradient */
	font-size: 34px;
	font-weight: 700;
	margin: 10px 0 18px;
	text-transform: capitalize;
`;


export const AvatarImg = styled.img`
	height: 80px;
`;
export const ContUser = styled.div`
	width: 90vw;
	max-width: 800px;
	display: flex;
	flex-direction: column;
	gap: 12px;
	align-items: stretch;
`;

export const CardUser = styled.div`
	background: rgba(255, 255, 255, 0.95);
	color: #080707ff;
	padding: 16px;
	border-radius: 12px;
	display: flex;
    justify-content:space-between;
    align-items:center;
    max-width: 400px;
	gap: 20px;
	box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
`;

export const TraImg = styled.img`
	width: 30px;
	height: 30px;
	object-fit: contain;
	cursor: pointer;
	opacity: 0.9;
	transition: transform .12s ease, opacity .12s ease;
	&:hover{ transform: scale(1.06); opacity: 1; }
`;
