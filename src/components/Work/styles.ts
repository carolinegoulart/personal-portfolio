import styled from 'styled-components';

export const Background = styled.div`
  min-height: 100vh;
  background-color: var(--background-work);
  box-sizing: border-box;
  height: 100%;
`;

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 6vh 20px;
  max-height: 200px;

  h1 {
    color: var(--grey-light);
    font-size: 2.6rem;
    padding-bottom: 5rem;
  }

  @media (max-width: 1200px) {
    padding: 10vh 100px 24px;
  }

  @media (max-width: 720px) {
    padding: 10vh 24px 24px 24px;
  }
`;

export const WorkDetail = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 2.4fr 4fr;
  grid-template-rows: 1fr 1.5fr 1.5fr;
  height: 24rem;
  margin-top: 1rem;

  @media (max-width: 720px) {
    margin-top: 2rem;
  }
`;

export const Image = styled.div`
  display: inline-block;
  cursor: pointer;
  grid-row: 1 / 4;
  grid-column: 1 / 3;
  transition: background-color 170ms ease-out;

  img {
    max-width:100%;
    max-height:100%;
    opacity: 0.6;
    transition: opacity 170ms ease-out;
    /* filter: gray; */
    /* -webkit-filter: grayscale(1); */
    /* filter: grayscale(1); */
    /* transition: filter 170ms ease-out; */

    /* &:hover {
      filter: none;
    } */
  }

  /* &:hover {
    background: none;
  } */
`;

export const Details = styled.div`
  grid-row: 2 / 3;
  grid-column: 2 / 4;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  padding-bottom: 1rem;
`;

export const Name = styled.div`
    color: var(--grey-light);
    background-color: var(--background-work);
    font-size: 2rem;
    font-weight: 600;
    opacity: 0.9;
    text-align: right;
    line-height: 2.6rem;
`;

export const Tag = styled.div`
    color: var(--pink-light);
    font-weight: 600;
    text-align: right;
    line-height: 16px;
`;

export const Description = styled.div`
    /* background-color: var(--background-navbar); */
    background-color: var(--grey-light);
    /* background-color: #6b6b6b; */
    /* color: var(--grey-light); */
    color: var(--background-navbar);
    padding: 1rem 1.6rem;
    text-align: justify;
    z-index: 1;
    position: relative;

    a {
      font-weight: 600;
      text-decoration: none;
      cursor: pointer;
      color: var(--pink-light);
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
`;

export const Tools = styled.div`
  color: var(--grey-light);
  font-size: 0.9rem;
  text-align: right;
  padding-top: 1rem;

  div {
    padding-top: 0.4rem;
    img {
      width: 1.2rem;
    }
  }
  a:first-child {
    margin-right: 1rem;
  }
`;