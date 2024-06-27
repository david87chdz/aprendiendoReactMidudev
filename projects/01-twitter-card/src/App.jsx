
import { useState } from 'react';
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
export function App() {
    /*Para pasarle una función*/
    const  format = (userName) => `@${userName}`;
    const [name, setName] = useState('midudev');
    return (
        <section className='App'>
        <TwitterFollowCard formatUserName={format} userName={name} name='Pablo Hernández' initialIsFollowing={true}/>
        <TwitterFollowCard formatUserName={format} userName='vxnder' name='Vanderhart' />
        <TwitterFollowCard formatUserName={format} userName='midudev' name='Miguel Angel Duran' />
        <TwitterFollowCard formatUserName={format} userName='midudev' name='Miguel Angel Duran' />

        <button onClick={()=> setName('david87chz')}>
            Cambia nombre
        </button>
        </section>
    )
}