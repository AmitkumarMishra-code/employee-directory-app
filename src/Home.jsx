import './styles.css'
import UserCard from './UserCard'
import users from './data.js'

function Home(props){
    console.log(users)
    return (
        <div>
        <h1>Users at Acme Inc.</h1>
        <div className="user-display">
            {users.map(user => <UserCard name = {user.name} email = {user.email} picture = {user.picture.medium}/>)}
        </div>
        </div>
    );
}

export default Home;