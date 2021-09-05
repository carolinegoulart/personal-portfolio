import styled from 'styled-components';

export const Background = styled.div`
  min-height: 65vh;
  background-color: var(--background-presentation);
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 10vh 24px 24px 24px;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    padding: 10vh 100px 24px;
  }

  @media (max-width: 720px) {
    padding: 10vh 24px 24px 24px;
  }
`;

export const Hello = styled.div`
  color: var(--pink-dark);
  text-transform: uppercase;
  font-size: 14px;
`;

export const Description = styled.div`
  color: var(--grey-light);

  h1 {
    font-size: 6rem;
    line-height: 7rem;

    @media (max-width: 720px) {
      font-size: 3.6rem;
      line-height: 4rem;
    }
  }

  h2 {
    font-size: 2rem;
    line-height: 2.4rem;
    padding-bottom: 1rem;

    @media (max-width: 720px) {
      font-size: 1.4rem;
      line-height: 2rem;
    }
  }
`;

export const Paragraph = styled.div`
  margin-top: 1rem;
  color: var(--grey-light);
  width: 60%;
  text-align: justify;

  div:first-child {
    margin-bottom: 0.5rem;
  }

  a {
    color: var(--ocean-green);
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    position: relative;

    &:after {
      content: " ";
      border-bottom-style: solid;
      border-bottom-width: 1px;
      position: absolute;
      width: 200px;
      bottom: 0;
      left: 0;
      width: 0%;
      transition: width 300ms ease;
    }

    &:hover:after {
      width: 100%;
    }
  }

  @media (max-width: 720px) {
    width: 100%;
  }

`;