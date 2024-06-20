
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
export function App() {
    /*Para pasarle una función*/
    const  format = (userName) => `@${userName}`;
    return (
        <section className='App'>
        <TwitterFollowCard formatUserName={format} userName='pheralb' name='Pablo Hernández' />
        <TwitterFollowCard formatUserName={format} userName='vxnder' name='Vanderhart' />
        <TwitterFollowCard formatUserName={format} userName='midudev' name='Miguel Angel Duran' />
        <TwitterFollowCard formatUserName={format} userName='midudev' name='Miguel Angel Duran' />
        </section>
    )
}