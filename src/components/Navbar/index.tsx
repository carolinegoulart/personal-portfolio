import { Nav, Container, LogoLink, Bars, NavMenu, NavLinkBox, NavLink } from './styles';

export function Navbar() {
  return (
    <Nav>
      <Container>
        <LogoLink to="/">
          <h1>carolineg</h1>
        </LogoLink>

        <Bars />

        <NavMenu>
          <NavLink to="/about">
            <NavLinkBox>About</NavLinkBox>
          </NavLink>

          <NavLink to="/work">
            <NavLinkBox>Work</NavLinkBox>
          </NavLink>

          <NavLink to="/contact">
            <NavLinkBox>Contact</NavLinkBox>
          </NavLink>
        </NavMenu>
      </Container>
    </Nav>
  )
}