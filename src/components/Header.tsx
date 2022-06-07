import styled from 'styled-components';
import logoImg from '../assets/logo.svg';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Steve Jobs" />
        <span>Jobs</span>
      </Content>
    </Container>
  );
}

const Container = styled.header`
  background: var(--blue);
`;

const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem 1rem;
  height: 15vh;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 48px;
    height: 48px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
  }

  span {
    margin: 1rem;
    color: #fff;
    font-weight: 500;
    font-size: 1.5rem;
  }

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    margin-left: auto;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
