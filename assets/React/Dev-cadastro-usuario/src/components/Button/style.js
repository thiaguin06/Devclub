import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) =>
    props.tema === "principal" ? " #ff7716e3" : "#ff7716e3"};
  border:${(props) =>
    props.tema === "principal" ? "none" : "1px solid #1712148e"};
  color: white;
  border: 1px solid #0b0c0c8e;
  font-size: 15px;
  border-radius: 20px;
  width: 250px;
  height: 50px;
  padding: 16px 33px;
  /* small spacing so buttons don't stick to previous elements */
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`;
