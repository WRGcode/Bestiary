import React, { useState, useEffect } from "react";
import { useAppContext } from "../util/context";
import { useFetch } from "../util/useFetch";

const Page = () => {
  console.log("test page");

  // const{isLoading, query, setQuery, data} = useAppContext()
  const { data, loading } = useFetch(window.location.pathname);
  const {
    index,
    name,
    type,
    subtype,
    size,
    alignment,
    armor_class,
    hit_points,
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
    proficiencies,
    senses,
    languages,
    damage_vulnerabilities,
    damage_resistances,
    damage_immunities,
    condition_immunities,
    challenge_rating,
    xp,
    special_abilities,
    actions,
    legendary_actions,
  } = data;

  
  if (loading) {
    return <div className="loading"></div>;
  }
  const sensesArray = [];
  for (const [key, value] of Object.entries(senses)) {
    sensesArray.push({ name: key, value: value });
  }

  console.log(sensesArray);
  console.log(data);


  return (
    <main key={index}>
      {console.log(data)}
      <div className="creature">
        <h3>Name: {name}</h3>
        <h3>Type: {type}</h3>
        <h3>Subtype: {subtype}</h3>
        <h3>Size: {size}</h3>
        <h3>Alignment: {alignment}</h3>
      </div>
      <div className="livability">
        <h3>Armor class = {armor_class}</h3>
        <h3>Hit points = {hit_points}</h3>
      </div>
      <div className="stats">
        <h3>strength = {strength}</h3>
        <h3>dexterity = {dexterity}</h3>
        <h3>constitution = {constitution}</h3>
        <h3>intelligence = {intelligence}</h3>
        <h3>wisdom = {wisdom}</h3>
        <h3>charisma = {charisma}</h3>
      </div>

      <div className="skills">
        <h3>proficiencies</h3>
        {proficiencies.map((capability) => {
          const { proficiency } = capability;
          const { index, name } = proficiency;
          return <h4 key={index}>•{name}</h4>;
        })}

        <h3>senses</h3>
        {sensesArray.map((sense)=>{
          const{ name } = sense
          return (<h4>•{name}</h4>)
            
          
        })}

        <h3>Languages</h3>
        <h4>{languages}</h4>
      </div>
      <div className="resilients">
        <h3>Damage vulnerabilities</h3>
        <h4>•{damage_vulnerabilities}</h4>

        <h3>Damage resistances</h3>
        <h4>•{damage_resistances}</h4>

        <h3>Damage immunities</h3>
        <h4>•{damage_immunities}</h4>

        <h3>Condition immunities</h3>
        <h4>•{condition_immunities}</h4>
      </div>
      <div className="challenge">
        <h3>Challenge rating = {challenge_rating}</h3>
        <h3>Xp = {xp}</h3>
      </div>

      <div className="battle">
        <h3>special_abilities</h3>
        {special_abilities.map((abilities) => {
          const { name, desc } = abilities;
          return (
            <>
              <h4 key={name}>•{name}</h4>
              <h5 key={desc}>{desc}</h5>
            </>
          );
        })}

        <h3>actions</h3>
        {actions.map((action) => {
          const { name, desc } = action;
          return (
            <>
              <h4>•{name}</h4>
              <p>{desc}</p>
            </>
          );
        })}

        <h3>legendary_actions</h3>
        {legendary_actions.map((action) => {
          const { name, desc } = action;
          return (
            <>
              <h4>•{name}</h4>
              <p>{desc}</p>
            </>
          );
        })}
      </div>
    </main>
  );
};

export default Page;
