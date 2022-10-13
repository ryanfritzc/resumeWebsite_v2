import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  .section{
    opacity: 0;
    transform: translateY(10vh);
    will-change: opacity, transform;
    transition: opacity 2s ease, transform 1s ease;
  }
  .visible {
    opacity: 1;
    transform: none;
  }
`;

function ScrollFade(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  let x = isVisible ? 'section visible' : 'section';

  return (
    <StyledDiv>
      <div className={x} ref={domRef}>
        {props.children}
      </div>
    </StyledDiv>
  );
}

export default ScrollFade;
