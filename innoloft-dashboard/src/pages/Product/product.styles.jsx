import styled from "styled-components";

export const PStyle = styled.div`
  width: 100%;
  display: grid;
  height: 100%;
  place-items: center;
`;

export const PContent = styled.div`
  width: 90%;
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ProductContent = styled.div`
  width: 67.5%;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 250px;
    border-radius: 5px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
  }
`;

export const TabMenu = styled.div`
  height: 25px;
  width: 100%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  border-radius: 5px 5px 0px 0px;
`;

export const TabSpan = styled.span`
  width: 50%;
  text-align: center;
  display: grid;
  place-items: center;
  transition: all 0.25s linear;
  color: ${({active}) => active ? "white" : "black"};
  background-color: ${({active}) =>
    active ? "rgba(39, 46, 113, 1)" : "rgba(39, 46, 113, 0.1)"};
  height: 100%;
  cursor: pointer;
`;

export const DetailCOntainer = styled.div`
  width: 100%;
  height: 275px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(0,0,0,0.1);
`;

export const UserContent = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
`;
