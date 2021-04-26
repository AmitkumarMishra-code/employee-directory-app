function UserCard({name, email, picture}){
    return(
        <div className = 'user-card'>
            <img src={picture} alt=""/>
            <div className="user-info">
                <h2>{name.title} {name.first} {name.last}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default UserCard;