import React, { useState } from 'react'
import { useAppContext } from '../util/context'

const List = () => {
    const { isLoading, results} = useAppContext()
    

    if (isLoading) {
        return <div className='isloading'><div className='spinner' /></div>
    }
    return (
        results.map((monsters) =>{
            const {index,name,url} = monsters
            return (
                <article key={index} className='item'>
            <h4 onClick={url} className='article-title'>{name}</h4>
            <button onClick={url}>Details</button>
        </article>
            )
        })
    

    )
}

export default List
