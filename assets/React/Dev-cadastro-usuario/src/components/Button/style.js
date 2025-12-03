import styled from "styled-components";

export const Button = styled.button`
  background: linear-gradient(135deg, #ff7716, #ff6b00);
  border: none;
  color: white;
  font-size: 15px;
  font-weight: 600;
  border-radius: 12px;
  width: 280px;
  height: 48px;
  padding: 0;
  margin-top: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(255, 107, 0, 0.3);
  letter-spacing: 0.5px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(255, 107, 0, 0.4);
    background: linear-gradient(135deg, #ff8b2b, #ff7716);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(255, 107, 0, 0.3);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
