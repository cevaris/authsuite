import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Card extends Component {
  render() {
    const imageUrl = this.props.imageUrl || 'https://placehold.it/200x200';
    return (
      <div className='card'>
        <img alt='' className='card-img-top img-fluid' src={imageUrl}/>
        <div className='card-block'>
          <h4 className='card-title'>{this.props.title}</h4>
          <p className='card-text'>
            {this.props.body}
          </p>
        </div>
        <div className='card-footer'>
          <a className='btn btn-primary' href={this.props.buttonLink}>{this.props.buttonText}</a>
        </div>
      </div>
    );
  }

  static propTypes = {
    body: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired
  }

}

export default Card;

