import React from "react";
import { Wrapper, Logo, StyledLink } from "./Navigation.style";

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Study
          <br />
          Buddy
        </h1>
      </Logo>
      <StyledLink exact to="/group/A">
        Dashboard
      </StyledLink>
    </Wrapper>
  );
};

export default Navigation;
