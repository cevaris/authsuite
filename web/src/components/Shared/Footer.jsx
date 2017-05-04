import moment from "moment";
import React, {Component} from "react";

class Footer extends Component {
  render() {
    const currYear = moment().format('YYYY');
    return (
      <footer className='footer'>
        <p className='text-center text-white'>Copyright © AuthQuick {currYear}</p>
      </footer>
    );
  }
}

export default Footer;
