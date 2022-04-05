import React from "react";
import PropTypes from "prop-types";
import DefaultsPicture from "../../assets/profile.png";
import { useTheme } from "../../StyleGlobal/Hools";
import { CardWrapper, CardTitle, CardImage, CardLabel } from "./CardStyle";

const Card = ({ label, title, picture }) => {
  const { theme } = useTheme();
  return (
    <>
      <CardWrapper theme={theme}>
        <CardLabel theme={theme}>{label}</CardLabel>
        <CardImage src={picture} alt="freelance" />
        <CardTitle theme={theme}>{title}</CardTitle>
      </CardWrapper>
    </>
  );
};

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};
Card.defaultProps = {
  label: "",
  title: "",
  picture: DefaultsPicture,
};

export default Card;
