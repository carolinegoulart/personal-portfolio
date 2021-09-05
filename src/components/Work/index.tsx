import { Background, Container, WorkDetail, Image, Details, Name, Description, Tag, Title, Tools  } from './styles';
import dtmoneyImg from '../../assets/dtmoney.png';
import githubImg from '../../assets/github.png';
import externalLinkImg from '../../assets/external-link.png';

export function Work() {
  return (
    <Background>
      <Container>
        <h1>Some projects I've built</h1>

        <WorkDetail>
          <Image>
            <div>
              <img src={dtmoneyImg} alt="dtmoney"/>
            </div>
          </Image>
          <Title>
            <Tag>Personal Project</Tag>
            <Name>DtMoney</Name>
          </Title>

          <Details>
            <Description>
              <p>A web application designed for personal financial management, where the user is able to insert his revenues 
                and expenses, as well as organize and separate his expenses into categories. Developed during 
                the <a href="https://rocketseat.com.br/ignite" target="_blank" rel="noopener noreferrer"><b>Ignite</b></a> bootcamp.</p>
            </Description>
          </Details>

          <Tools>
            React - Styled Components - TypeScript - MirageJS
            <div>
              <a href="https://ignite-dtmoney.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <img src={externalLinkImg} alt="external link"/>
              </a>
              <a href="https://github.com/carolinegoulart/ignite-dtmoney" target="_blank" rel="noopener noreferrer">
                <img src={githubImg} alt="github"/>
              </a>
            </div>
          </Tools>
        </WorkDetail>

        <WorkDetail>
          <Image>
            <div>
              <img src={dtmoneyImg} alt="dtmoney"/>
            </div>
          </Image>
          <Title>
            <Tag>Personal Project</Tag>
            <Name>DtMoney</Name>
          </Title>

          <Details>
            <Description>
              <p>A web application for personal financial management, where the user is able to insert his revenues 
                and expenses, as well as organizing and separating its expenses into categories. Developed during 
                the <a href="https://rocketseat.com.br/ignite" target="_blank" rel="noopener noreferrer"><b>Ignite</b></a> bootcamp.</p>
            </Description>
          </Details>

          <Tools>
            React - Styled Components - API
            <div>
              <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                <img src={externalLinkImg} alt="external link"/>
              </a>
              <a href="https://github.com/carolinegoulart" target="_blank" rel="noopener noreferrer">
                <img src={githubImg} alt="github"/>
              </a>
            </div>
          </Tools>

        </WorkDetail>

      </Container>
    </Background>
  )
}