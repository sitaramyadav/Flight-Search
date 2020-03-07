import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-itmes: center;
  height: 100px;
  background-color: black;
  color: white;
`;

const CXLoyalty = styled.h1`
  margin: 32px 0 0 0;
`;

export const Header = () => {
  return (
    <HeaderContainer data-testid={"Header"}>
      <CXLoyalty>cxLoyalty</CXLoyalty>
    </HeaderContainer>
  );
};
