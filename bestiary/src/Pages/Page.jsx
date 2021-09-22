import React, { useState, useEffect } from 'react'
import { useAppContext } from '../util/context';
import { useFetch } from '../util/useFetch';

const Page = () => { 
  console.log('test page');

  // const{isLoading, query, setQuery, data} = useAppContext()
  const{data, loading} = useFetch(window.location.pathname)

  console.log(data);
  
  if(loading) {
    return <div className="loading"></div>
  }
  return ( 

    <main>
      {console.log(data)}
      <div className="creature">
        <h3>name</h3>
        <h3>type</h3>
        <h3>subtype</h3>
        <h3>size</h3>
        <h3>alignment</h3>
      </div>
      <div className="livability">
        <h3>armor_class</h3>
        <h3>hit_points</h3>
      </div>
      <div className="stats">
        <h3>strength</h3>
        <h3>dexterity</h3>
        <h3>constitution</h3>
        <h3>intelligence</h3>
        <h3>wisdom</h3>
        <h3>charisma</h3>
      </div>
      <div className="skills">
        <h3>proficiency</h3>
        <h4>name</h4>

        <h3>senses</h3>
        <h4>name</h4>

        <h3>languages</h3>
        <h4>name</h4>
      </div>
      <div className="resilients">
        <h3>damage_vulnerabilities</h3>
        <h4>name</h4>

        <h3>damage_resistances</h3>
        <h4>name</h4>

        <h3>damage_immunities</h3>
        <h4>name</h4>

        <h3>condition_immunities</h3>
        <h4>name</h4>
      </div>
      <div className="challenge">
        <h3>challenge_rating</h3>
        <h3>xp</h3>
      </div>

      <div className="battle">
        <h3>special_abilities</h3>
        <h4>name</h4>
        <p>desc</p>

        <h3>actions</h3>
        <h4>name</h4>
        <p>desc</p>
      </div>
    </main>
  );
};

export default Page;
