import React, { useState } from 'react'
import List from '../components/List'
import Search from '../components/Search'


const Home = () => {
    return (
        <main>
            <h2>DND 5 Edition Bestiary</h2>
            <Search />
            <List />
        </main>
    )
}

export default Home

