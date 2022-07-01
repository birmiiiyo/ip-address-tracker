import React from 'react';

export default function Information() {
  React.useEffect(() => {
    fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_2Qgm5PRnbE3K7F7Ps8AgQTv3gduoH&ipAddress=`,
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <>
      <div>
        <p> IP ADDRESS</p>
        <h6></h6>
      </div>
      <div>
        <p>LOCATION</p>
        <h6></h6>
      </div>
      <div>
        <p>TIMEZONE</p>
        <h6></h6>
      </div>
      <div>
        <p>ISP</p>
        <h6></h6>
      </div>
    </>
  );
}
