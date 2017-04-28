import React, { Component, PropTypes } from 'react';

class Card extends Component {
  render() {
    const imageUrl = this.props.imageUrl || 'https://placehold.it/300x200';
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
          <a className='btn btn-primary'>{this.props.buttonText} href={this.props.buttonLink} </a>
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

