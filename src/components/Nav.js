import React from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 2rem;
  color: black;
  margin-right: 5rem;
  font-family: 'Oleo Script', cursive;
`;

const Nav = () => {
  return (
    <NavBar>
      <Logo>P²</Logo>
    </NavBar>
  );
};

export default Nav;
