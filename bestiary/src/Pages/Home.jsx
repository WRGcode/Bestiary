import React, { useState } from 'react'
import List from '../components/List'
import Search from '../components/Search'


const TopBTN = () => {
    return (
        <button className='TopBTN'>▲</button>
    )
} 

const Home = () => {
    
    console.log('test home');
    return (
        
        <main>
            <div className='home'>
            <h2>DND 5 Edition Bestiary</h2>
            <Search />
            <h2>List of monsters in alphabetical order from A-Z</h2>
            </div>
            <TopBTN />
            <List />
        </main>
        
    )
}

export default Home

