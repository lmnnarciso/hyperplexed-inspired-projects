import { useEffect, useRef } from "react";
import styled from "styled-components";

const Body = styled.div`
  background: rgb(10, 10, 10);
  --yellow: rgb(249, 168, 36);
  --purple: rgb(104, 58, 182);
`;
const Title = styled.h2`
  color: white;
  margin: 0px 15vw;
  font-family: "Rubik", sans-serif;
  width: 70vw;
  font-size: 8vw;
  span {
    font-family: "Lobster", cursive;
    font-size: 1.3em;
    line-height: 0.8em;
  }
`;

const Side = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
  overflow: hidden;
  position: absolute;
`;

const LeftSide = styled(Side)`
  background-color: var(--purple);
  width: 60%;
  z-index: 3;
  span {
    color: var(--yellow);
  }
`;
const RightSide = styled(Side)`
  background-color: var(--yellow);
  ${Title} {
    color: rgb(10, 10, 10);
  }
  span {
    color: var(--purple);
  }
`;

const LeftSideStyleWithJS = ({ children }) => {
  const ref = useRef();

  const onMouseMove = (e) => {
    if (ref) {
      const p = (e.clientX / window.innerWidth) * 100;
      console.log({ p });
      ref.current.style.width = `${p}%`;
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [ref]);
  return (
    <LeftSide ref={ref} onMouseMove={onMouseMove}>
      {children}
    </LeftSide>
  );
};

const RightSideStyleWithJS = ({ children }) => {
  return <RightSide ref={ref}>{children}</RightSide>;
};

const SimpleHeader = () => {
  return (
    <Body>
      <LeftSideStyleWithJS>
        <Title>
          Today is going to be <span>awesome</span>
        </Title>
      </LeftSideStyleWithJS>
      <RightSide>
        <Title>
          Today is going to be <span>wonderful</span>
        </Title>
      </RightSide>
    </Body>
  );
};
export default SimpleHeader;
