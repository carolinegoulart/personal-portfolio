import { Background, Container, Hello, Description, Paragraph } from './styles';

export function Presentation() {
  return (
    <Background>
      <Container>
        <Hello>
          <h3>Hey, there,</h3>
        </Hello>
        <Description>
          <h1>I'm Caroline.</h1>
          <h2>A Software Engineer based in São Paulo, Brazil</h2>
        </Description>
        <Paragraph>
          <div>
            <p>Welcome to my portfolio!</p>
          </div>
          <div>
            <p>Despite the backend background, I enjoy building mobile apps and websites, focusing on performance 
              and user experience. In my free time, I also venture into cyber security, just for fun. I'm currently working 
              at <a href="https://www.picpay.com/site" target="_blank" rel="noopener noreferrer"><b>PicPay</b></a>, 
              the owner of the largest digital wallet in Latin America.</p>
          </div>
        </Paragraph>
      </Container>
    </Background>
  )
}