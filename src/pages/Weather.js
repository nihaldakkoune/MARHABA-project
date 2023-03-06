import React, { useEffect } from 'react';

function Weather() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://weatherwidget.io/js/widget.min.js';
    script.async = true;
    script.onload = () => {
      // Optional: do something when the script is loaded
    };
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <a className="weatherwidget-io" href="https://forecast7.com/en/25d2951d54/doha-port/" data-label_1="DOHA ,QATAR" data-label_2="WEATHER" data-mode="Current" data-theme="pure" >DOHA ,QATAR WEATHER</a>
    </>
  );
}

export default Weather;