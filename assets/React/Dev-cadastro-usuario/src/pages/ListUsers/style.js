import styled from "styled-components";

export const ContIner = styled.div``;

export const Title = styled.h2`
	text-transform: capitalize;
	font-size: 26px;
	margin: 16px 20px;
	background: linear-gradient(90deg, #ff8b2b, #7f3841);
	-webkit-background-clip: text;
	background-clip: text;
	color: transparent;
	font-weight: 700;
	letter-spacing: 0.5px;
`;

export const PageHeading = styled.h1`
	color: #7f3841;
	font-size: 32px;
	font-weight: 700;
	margin: 20px 0 24px;
	text-transform: capitalize;
	letter-spacing: 0.3px;
`;


export const AvatarImg = styled.img`
	width: 52px;
	height: 52px;
	border-radius: 50%;
	object-fit: cover;
	border: 3px solid rgba(255, 135, 43, 0.2);
	background-color: #fff;
	transition: transform 0.2s ease, border-color 0.2s ease;
	&:hover { transform: scale(1.08); border-color: rgba(255, 135, 43, 0.4); }
`;

export const ContUser = styled.div`
	width: 90vw;
	max-width: 750px;
	display: flex;
	flex-direction: column;
	gap: 14px;
	align-items: center;
	margin: 0 auto;
	
`
export const CardUser = styled.div`
	background: rgba(255, 255, 255, 0.98);
	color: #0f0606;
	padding: 14px 16px;
	border-radius: 14px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 12px;
	width: 100%;
	max-width: 700px;
	margin: 0 auto;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	transition: all 0.2s ease;
	&:hover { 
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.14);
		transform: translateY(-2px);
	}
`;

export const UserLeft = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	flex: 1;
`;

export const UserDetails = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3px;
	text-align: center;
	text-transform: capitalize;
	flex: 1;
	p { margin: 0; }
	.name { font-size: 16px; font-weight: 700; color: #0f0606; letter-spacing: 0.2px; }
	.email { font-size: 13px; color: #666; margin-top: 2px; }
	.age { font-size: 12px; color: #999; margin-top: 1px; }
`;

export const TraImg = styled.img`
	width: 32px;
	height: 32px;
	object-fit: contain;
	cursor: pointer;
	opacity: 0.85;
	transition: transform 0.2s ease, opacity 0.2s ease;
	flex-shrink: 0;
	&:hover{ 
		transform: scale(1.15) rotate(10deg); 
		opacity: 1; 
		filter: drop-shadow(0 2px 4px rgba(255, 135, 43, 0.3));
	}
`;
