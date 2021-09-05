import { Background, Container, Copyright, Menu, Social, Contact, NavLink } from './styles';

export function Footer() {
  return (
    <Background>
      <Container>
        <Copyright>
          Copyright © 2021
        </Copyright>
        <Menu>
          <NavLink to="/about">
            About
          </NavLink>

          <NavLink to="/work">
            Work
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>
        </Menu>
        <Social>
          <a href="https://www.linkedin.com/in/carolinegoulart/" target="_blank" rel="noopener noreferrer">
            <div>LinkedIn</div>
          </a>
          <a href="https://github.com/carolinegoulart" target="_blank" rel="noopener noreferrer">
            Github
          </a>
          <a href="https://www.instagram.com/carolinesgoulart/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </Social>
        <Contact>
          
        </Contact>
      </Container>
    </Background>
  )
}