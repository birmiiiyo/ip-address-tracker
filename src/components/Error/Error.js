import React from 'react';
import './Error.scss';

export default function Error() {
  return (
    <div className="wrapper">
      <h1>no requests</h1>
      <div className="textError">
        <p>If you are interested in this work and want to test it, then you should:</p>
        <ul>
          <li>1.Register at https://geo.ipify.org/docs;</li>
          <li>2.Get a link of type 2 (country + city);</li>
          <li>3.Replace my link with yours in two places (pay attention to ${'id'});</li>
          <li>4.uncomment line 29 in App.js</li>
          <li>5.Start the project.</li>
        </ul>
        <p>if the problem stlil relevant, write me in telegram @birmiii and I wlil help you.</p>
        <p>Thank you for your interest</p>
      </div>
    </div>
  );
}
