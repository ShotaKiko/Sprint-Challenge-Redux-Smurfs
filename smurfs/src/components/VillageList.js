import React from "react";

import Smurf from "./Smurf";

const VillageList = props => {
  return (
    <div>
        {console.log(props.smurfs)}
      {props.smurfs.map(smurf => {
        return <Smurf key={smurf.name} 
        smurf={smurf} />;
      })}
    </div>
  );
};

export default VillageList;