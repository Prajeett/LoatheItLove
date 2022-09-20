import { Link } from "react-router-dom"

const UserHome = () => {
    return (
        <section>
            <h1>Welcome to your page</h1>
            <br />
            <p>Your are loggedin </p>
            <div className="flexGrow">
                <Link to="/">User Home page</Link>
            </div>
        </section>
    )
}

export default UserHome