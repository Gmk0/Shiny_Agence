import React from "react";
import { useTheme } from "../../StyleGlobal/Hools";
import { StyledLink } from "../../Components/Header/headerStyle";
import {
  HomeContainer,
  HomeWrapper,
  Illustration,
  LeftCol,
  StyledTitle,
} from "./HomeStyle";
import HomeIllustration from "../../assets/lanch.svg";
const Home = () => {
  const { theme } = useTheme();
  return (
    <>
      <HomeWrapper>
        <HomeContainer theme={theme}>
          <LeftCol>
            <StyledTitle theme={theme}>
              Reperez vos besoins on s'occupe du reste , avec les meilleurs
              talens
            </StyledTitle>
            <StyledLink to="/Survey/1" $isFullLink>
              Faire le test
            </StyledLink>
          </LeftCol>
          <Illustration src={HomeIllustration} />
        </HomeContainer>
      </HomeWrapper>
    </>
  );
};

export default Home;
