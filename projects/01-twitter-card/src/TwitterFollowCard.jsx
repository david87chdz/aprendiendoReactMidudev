import { useState } from "react";
/* eslint-disable react/prop-types */
export function TwitterFollowCard({formatUserName, userName, name , initialIsFollowing}) {

    //Cambiamos las ter lineas por la siguiente desestructuración
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    //const state = useState(false);
    //Primera posición del array es el estado, la segunda es la función que modifica el estado 
    //const isFollowing = state[0];
    //const setIsFollowing = state[1];

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    console.log(isFollowing)
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';
    /* const addAt = (userName) => `@${userName}`; */
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar'
                    src={`https://unavatar.io/${userName}`} alt="El avatar de midudev" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong> {/* Corregido aquí */}
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span> {/* Corregido aquí */}
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}