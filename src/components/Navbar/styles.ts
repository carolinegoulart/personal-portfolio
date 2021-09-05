import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
  background: var(--background-navbar);
  height: 80px;
  z-index: 10;
`;

export const Container = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 1080px;
  margin: 0 auto;
  align-items: center;
  box-sizing: border-box;
`;

export const NavMenu = styled.div`
  display: flex;

  @media (max-width: 720px) {
    display: none;
  }
`;

export const NavLinkBox = styled.div`
  text-decoration: none;
  border: 2px solid var(--pink-dark);
  border-radius: 25px;
  margin-right: 24px;
  box-sizing: border-box;
  width: 88px;
  padding: 6px 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: var(--pink-dark);
  transition: background-color 170ms ease-out, color 170ms ease-out;
  
  &:hover {
    background-color: var(--pink-dark);
    color: var(--background-navbar) !important;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
`;

export const LogoLink = styled(Link)`
  font-size: 28px;
  color: var(--pink-dark);
  text-decoration: none;
  cursor: pointer;
  padding-left: 24px;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: var(--pink-dark);

  @media (max-width: 720px) {
    display: block;
    position: absolute;
    top: 0.6rem;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;