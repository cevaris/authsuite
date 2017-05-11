import PropTypes from "prop-types";
import React from "react";

export const Card = (props) => {
  const imageUrl = props.imageUrl || 'https://placehold.it/400x200';
  return (
    <div className='card'>
      <img alt='' className='card-img-top img-fluid' src={imageUrl}/>
      <div className='card-block'>
        <h4 className='card-title'>{props.title}</h4>
        <p className='card-text'>
          {props.body}
        </p>
      </div>
      <div className='card-footer'>
        <a className='btn btn-primary' href={props.buttonLink}>{props.buttonText}</a>
      </div>
    </div>
  );
};

Card.propTypes = {
  body: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired
};
