import React from "react";
import Card from "../../Components/Card";
import { useFetch, useTheme } from "../../StyleGlobal/Hools";
import { Loader } from "../../StyleGlobal/GlobalStyle";
import {
  CardsContainer,
  LoaderWrapper,
  PageSubtile,
  PageTitle,
} from "./FreelancesStyle";

const Freelances = () => {
  const { theme } = useTheme();
  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/freelances`
  );
  const freelancersList = data?.freelancersList;

  if (error) {
    return <span>Oups il y a un probleme</span>;
  }

  return (
    <div>
      <PageTitle theme={theme}> Trouvez Votre Prestataire</PageTitle>
      <PageSubtile theme={theme}>
        Chez Shiny nous reunissons les meilleurs profils pour vous
      </PageSubtile>

      {isLoading ? (
        <LoaderWrapper>
          <Loader theme={theme} />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelancersList &&
            freelancersList.map((profile, index) => (
              <Card
                key={`${profile.name}-${index}`}
                label={profile.name}
                title={profile.job}
                picture={profile.picture}
              />
            ))}
        </CardsContainer>
      )}
    </div>
  );
};

export default Freelances;
