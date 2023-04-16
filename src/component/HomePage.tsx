import React from "react";
import styled from 'styled-components';

const HomePageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: fixed;
  width: 100%;
  font-family: Quicksand;
  .bio {
    max-width: 400px;
    width: 100%;
    padding: 16px;
    font-size: 18px;
    margin-bottom: 80px;
  }
  .footer {
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 16px;
    font-size: 14px;
    opacity: 0.6;
    p {
      margin: 0;
    }
  }
  a {
    color: black;
    text-decoration: underline;
    text-decoration-color: transparent;
    font-weight: bold;
    transition: all 0.15s;
    &:hover {
      text-decoration-color: black;
    }
  }
`;

const HomePageBackground = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    font-weight: 400;
    color: #666;
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
  span {
    color: #666;
  }
`;

const HomePage: React.FC = (props) => {
  console.log("props", props);

  let themeKey: string | null = null;
  if (window.location.hash) {
    themeKey = window.location.hash.substr(1);
  }

  return (
    <HomePageDiv>
      <HomePageBackground></HomePageBackground>
      <div className="bio">
        <p>Hey, I'm Mingyuan. </p>
        <p>
          I currently do swe at{" "}
          <a href="mingyuanhua.github.io">My Home</a>. Earlier I moved
          buttons around at Tesla. I like simplifying
          and prettifying things,{" "}
          reading, and working out every day.
        </p>
        <p>
          If you like my work, we should meet up. 
          My email is m.y.hua@hotmail.com.
        </p>
        <Links>
          <a href="https://mingyuanhua.github.io/projects">Projects</a>
          <span>∙</span>
          <a href="">Home</a>
          <span>∙</span>
          <a href="https://www.linkedin.com/in/huamingyuan">LinkedIn</a>
          <span>∙</span>
          <a href="mailto:m.y.hua+site@hotmail.com">Contact</a>
        </Links>
      </div>
    </HomePageDiv>
  );
};

export default HomePage;