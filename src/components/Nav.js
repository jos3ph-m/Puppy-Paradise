import React from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 2rem;
  color: black;
  margin-right: 5rem;
`;

const Nav = () => {
  return (
    <NavBar>
      <Logo>P²</Logo>
    </NavBar>
  );
};

export default Nav;
