import React from "react";
import DefaultsPicture from "../../assets/svg.svg";
import Card from "../../Components/Card";
import { CardsContainer, PageSubtile, PageTitle } from "./FreelancesStyle";

const freelanceProfisl = [
  {
    name: "jane Doe",
    jobTitle: "Devops",
    picture: DefaultsPicture,
  },
  {
    name: "jhon Doe",
    jobTitle: "Devops",
    picture: DefaultsPicture,
  },
  {
    name: "janne Doe",
    jobTitle: "Devops",
    picture: DefaultsPicture,
  },
];

const Freelances = () => {
  return (
    <div>
      <PageTitle> Trouvez Votre Prestataire</PageTitle>
      <PageSubtile>
        Chez Shiny nous reunissons les meilleurs profils pour vous
      </PageSubtile>
      <CardsContainer>
        {freelanceProfisl.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            picture={profile.picture}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </div>
  );
};

export default Freelances;
