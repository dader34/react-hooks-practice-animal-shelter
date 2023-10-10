import React, { useState,useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  // useEffect(()=>{
  //   onFindPetsClick()
  // },[])

  const onChangeType = (type) =>{
    setFilters({type: type})
  }

  const onFindPetsClick = () =>{
    const API = filters.type === "all" ? "http://localhost:3001/pets" : `http://localhost:3001/pets?type=${filters.type}`
    fetch(API)
    .then(resp => resp.json())
    .then(setPets)
  }


  
  const onAdoptPet = (petId) =>{
    const newArr = pets.map(pet =>{
      if(pet.id === petId){
        return{
          ...pet,
          isAdopted : true
        }
      }
      return pet
    })
    setPets(newArr)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;