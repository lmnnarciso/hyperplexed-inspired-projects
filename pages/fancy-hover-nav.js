import { useRef } from "react";
import styled from "styled-components";

const Body = styled.div`
  background-color: rgb(10, 10, 10);
  --blue: rgb(61, 90, 254);
  --light-blue: rgb(33, 150, 243);
`;

const NavBody = styled.div`
  color: white;
  font-family: "Permanent Marker", cursive;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FancyLink = styled.a`
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  display: block;
  font-size: clamp(2em, 8vw, 7em);
  padding: clamp(0.25em, 1vw, 1em) clamp(1em, 4vw, 4em);
  text-decoration: none;
  position: relative;
  :nth-child(3) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }
  cursor: pointer;

  &:hover:before {
    width: 100%;
    transition: width 250ms ease;
  }
  ::before {
    background: linear-gradient(
      to right,
      transparent,
      var(--blue) var(--light-blue-percent),
      var(--light-blue)
    );
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100%;
    width: 0;
  }
`;

const StyledLinkWithJS = ({ children }) => {
  const ref = useRef();
  const onMouseMove = (e) => {
    if (ref) {
      const decimal = e.clientX / ref.current.offsetWidth;
      const basePercent = 80;
      const percentRange = 20;
      const adjustablePercent = percentRange * decimal;

      const lightBluePercent = basePercent + adjustablePercent;

      ref.current.style.setProperty(
        "--light-blue-percent",
        `${lightBluePercent}%`
      );
    }
  };

  return (
    <FancyLink ref={ref} target="_blank" onMouseMove={onMouseMove}>
      {children}
    </FancyLink>
  );
};
const FancyNav = () => {
  return (
    <NavBody className="fancy-nav">
      <StyledLinkWithJS target="_blank">How</StyledLinkWithJS>
      <StyledLinkWithJS target="_blank">To</StyledLinkWithJS>
      <StyledLinkWithJS target="_blank">Make</StyledLinkWithJS>
    </NavBody>
  );
};
export default function FancyNavExample() {
  return (
    <Body>
      <FancyNav />
    </Body>
  );
}
