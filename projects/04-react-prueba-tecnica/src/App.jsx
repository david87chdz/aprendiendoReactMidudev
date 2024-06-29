import React, { useEffect } from "react";
import { useState } from 'react';

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App (){
    const [fact,setFact] = useState()
    const [imageUrl, setImageUrl] = useState()


    useEffect(() => {
        fetch('https://catfact.ninja/fact')
            .then (res => res.json())
            .then (data => {
                const {fact} = data
                setFact(data.fact)
                const firstWord = fact.split(' ')[0]

                fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
                    .then(res => res.json(), console.log('res'))

                    .then(data => {
                        const {url}  = data
                        setImageUrl(url)
                        console.log(url)
                    })
            })
    },[])


     

    return (
        <main>
            <h1>App de gatitos</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first word for
            ${fact}` }/>}
        </main>
    )
}