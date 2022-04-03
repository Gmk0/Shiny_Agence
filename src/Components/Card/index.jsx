import React from 'react';
import PropTypes from 'prop-types'
import DefaultsPicture from '../../assets/svg.svg'
import { CardWrapper,CardTitle, CardImage, CardLabel } from './CardStyle';

const Card = ({ label,title,picture}) => {
    return (
        <>
            <CardWrapper>
                <CardLabel>{label}</CardLabel>
                <CardImage src={picture} alt="freelance" />
                <CardTitle>{title}</CardTitle>

            </CardWrapper>
    
            
        </>
    );


    
};

Card.propTypes ={
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired

}
Card.defaultProps ={
    label: '',
    title: '',
    picture: DefaultsPicture, 
}


export default Card;