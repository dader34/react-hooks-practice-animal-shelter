import React from "react";

import Pet from "./Pet";

function PetBrowser({pets,onAdoptPet}) {
  // console.log(pets)
  const allPets = pets.map((pet) =>{
    return <Pet key={pet.id} onAdoptPet={onAdoptPet} pet={pet}/>
  })
  return <div className="ui cards">{allPets}</div>;
}

export default PetBrowser;