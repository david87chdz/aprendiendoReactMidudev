
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
export function App() {
    /*Para pasarle una función*/
    const  format = (userName) => `@${userName}`;
    return (
        <section className='App'>
        <TwitterFollowCard formatUserName={format} isFollowing={false} userName='pheralb' name='Pablo Hernández' />
        <TwitterFollowCard formatUserName={format} isFollowing userName='vxnder' name='Vanderhart' />
        <TwitterFollowCard formatUserName={format} isFollowing={true} userName='midudev' name='Miguel Angel Duran' />
        <TwitterFollowCard formatUserName={format} isFollowing userName='midudev' name='Miguel Angel Duran' />
        </section>
    )
}