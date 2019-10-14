import styled from "styled-components"

const DivStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 10px;
  margin: auto;
`
const FilterStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: black;
`

const FilterButton = styled.button`
  background: ${({ background }) => background || "white"};
  display: inline-block;
  box-shadow: 0px 10px 25px rgba(84, 104, 255, 0.3);
  width: ${({ width }) => width || "111px"};
  height: ${({ height }) => height || "34px"};
  border-radius: ${({ borderRadius }) => borderRadius || "6px"};
  &:hover {
    background: ${({ hoverColor }) => hoverColor || "#696969"};
    color: ${({ hoverColor }) => hoverColor || "white"};
  }
`

export { FilterButton, DivStyled, FilterStyled }
