import styled from "styled-components";
const Body = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100vw;
  background: rgb(10, 10, 10);
  --border: rgb(3, 169, 244);

  --g1: rgb(98, 0, 234);
  --g2: rgb(236, 64, 122);
  --g3: rgb(253, 216, 53);
`;

const Card = styled.div`
  aspect-ratio: 1 /1.6;
  border: 0.5px solid var(--border);
  cursor: pointer;
  position: relative;
  width: 56vmin;

  :hover:before {
    background-position: 100% 100%;
    transform: scale(1.08, 1.03);
  }

  ::before {
    background: linear-gradient(
      130deg,
      transparent 0% 33%,
      var(--g1) 66%,
      var(--g2) 83.5%,
      var(--g3) 100%
    );
    background-position: 0% 0%;
    background-size: 300% 300%;
    content: "";
    height: 100%;
    left: 0px;
    top: 0px;
    position: absolute;
    width: 100%;
    transition: background-position 350ms ease, transform 350ms ease;
    /* transition-delay: 500ms; */
  }
`;

const CardContent = styled.div`
  background: radial-gradient(rgba(255, 255, 255, 0.2) 8%, transparent 8%);
  background-position: 0% 0%;
  background-size: 5vmin 5vmin;
  height: 100%;
  width: 100%;
  position: relative;
  transition: background-position 350ms ease;
  z-index: 2;
  padding: 5vmin;

  ${Card}:hover & {
    background-position: -10% 0%;
  }
`;

const Title = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: white;
    font-family: "Anek Latin", sans-serif;
    font-weight: 400;
    margin: 0px;
  }
`;

const CardTitle = styled.h3`
  font-size: 6vmin;
`;

const CardSubtitle = styled.h4`
  font-size: 3vmin;
  margin-top: 2vmin;
`;

const CardSubSpan = styled.span`
  display: inline-block;
  margin: 0vmin 0.3vmin;
  transform: translateY(40%);
  transition: none;
  opacity: 0;
  ${Card}:hover & {
    opacity: 1;
    transform: translateY(0%);
    transition: opacity 0ms, transform 200ms cubic-bezier(0.9, 0.06, 0.15, 0.9);
  }
`;

const CardSubtitleComponent = ({ children }) => {
  const createSubtitle = (text) =>
    text.split(" ").map((text, index) => (
      <CardSubSpan
        index={index}
        key={index}
        style={{ transitionDelay: `${40 * index}ms` }}
      >
        {text}
      </CardSubSpan>
    ));

  return (
    <CardSubtitle>{createSubtitle(children).map((item) => item)}</CardSubtitle>
  );
};

export default function TwitchCard() {
  return (
    <Body>
      <Card>
        <CardContent>
          <Title>
            <CardTitle>This is my Card Title</CardTitle>
            <CardSubtitleComponent>
              This is my card sub title hehe more words to check the delay
              transition animation
            </CardSubtitleComponent>
          </Title>
        </CardContent>
      </Card>
    </Body>
  );
}
