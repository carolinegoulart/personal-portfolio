import styled from 'styled-components';
import { Parallax } from 'react-parallax';

export const Background = styled(Parallax)`
  background-color: var(--grey-light);
  min-height: 100vh;
  display: flex;

  img {
    width: 100vw;
    object-fit: cover;
  }
`;