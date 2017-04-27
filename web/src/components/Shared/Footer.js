import React, {Component} from "react";
import moment from "moment";

class Footer extends Component {
  render() {
    const currYear = moment().format('YYYY');
    return (
      <div>
        <div className="container">
          <p className="m-0 text-center text-white">Copyright © AuthQuick {currYear}</p>
        </div>
      </div>
    );
  }
}

export default Footer;
