import moment from "moment";
import React from "react";

export const Footer = () => {
  const currYear = moment().format('YYYY');
  return (
    <footer className='footer'>
      <p className='text-center text-white'>Copyright © AuthQuick {currYear}</p>
    </footer>
  );
};

