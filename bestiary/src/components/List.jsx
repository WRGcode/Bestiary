import React, { useState, useEffect } from "react";
import { useAppContext } from "../util/context";
import { Link } from "react-router-dom";
import {useFetch} from '../util/useFetch'

const List = () => {
//   const { isLoading, results, setQuery } = useAppContext();
const {data, loading} = useFetch('/')
  console.log(data);
  //   const {results} = results
//   const {results} = data

//   useEffect(() => {
//     setQuery("");
//   }, []);

  if (loading) {
    return (
      <div className="isloading">
        <div className="spinner" />
      </div>
    );
  }

  return data.results.map((monsters) => {
    const { index, name, url } = monsters;
    return (
      <article key={index} className="item">
        <h4 className="article-title">{name}</h4>

        <Link to={`/${index}`}>Details</Link>
        {/* <button onClick={url}>Details</button> */}
      </article>
    );
  });
};

export default List;
