import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

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

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  padding-bottom: 20px;
  background-color: white;
  border-bottom: 2px solid black;
`;

export const Header = () => {
  return (
    <HeaderContainer data-testid={"Header"}>
      <CXLoyalty>cxLoyalty</CXLoyalty>
    </HeaderContainer>
  );
};

export const Navigations = () => {
  return (
    <Navigation>
      <NavLink to="/" exact>
        {" "}
        Flighs
      </NavLink>
      <NavLink to="/hotels">Hotels</NavLink>
      <NavLink to="/cars">Cars</NavLink>
    </Navigation>
  );
};
