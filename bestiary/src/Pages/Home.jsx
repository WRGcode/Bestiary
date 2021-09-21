import React, { useState } from 'react'
import List from '../components/List'
import Search from '../components/Search'


const TopBTN = () => {
    return (
        <button>▲</button>
    )
} 

const Home = () => {console.log('test home');
    return (
        
        <main>
            <h2>DND 5 Edition Bestiary</h2>
            <Search />
            <h2>List of monsters in alphabetical order from A-Z</h2>
            <TopBTN />
            <List />
        </main>
        
    )
}

export default Home

