import React from 'react';
import Background from "../../../images/businessSummary.webp";

  const myStyle={
        backgroundImage:  `url(${Background})`,
        height:'100vh',
        // marginTop:'-70px',
        // fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

const Summary = () => {
  
    return (
        <div styles={myStyle}>
            <h1>bkb</h1>
        </div>
    );
};

export default Summary;