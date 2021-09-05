import { WorkDetail } from './../Work/styles';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Background = styled.div`
  background-color: var(--grey-light);
  bottom: 0;
  position: relative;
  height: auto;
  width:100%;
  bottom: 0; 
  left: 0; 
  right: 0;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  /* box-sizing: border-box; */
  padding: 90px 50px;
  display: flex;
  flex-direction: row;
`;

export const Copyright = styled.div`
  /* text-transform: uppercase;
  font-weight: 600; */
`;

export const Menu = styled.ul`
  /* display: flex;
  flex-direction: column; */
`;

export const Social = styled.div`
  /* display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    cursor: pointer;
    color: var(--background-navbar);
    margin-bottom: 0.6rem;
  } */
`;

export const Contact = styled.div`
  
`;

export const NavLink = styled(Link)`
  /* text-decoration: none;
  cursor: pointer;
  color: var(--background-navbar);
  margin-bottom: 0.6rem; */
  
`;