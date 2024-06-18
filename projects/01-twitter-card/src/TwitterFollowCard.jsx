/* eslint-disable react/prop-types */
export function TwitterFollowCard({formatUserName, userName, name , isFollowing}) {
    console.log(isFollowing)
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
                <button className='tw-followCard-button'>Seguir</button>
            </aside>
        </article>
    )
}