import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const Home = () => {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = async () => {
        // if used in more components, this should be in context 
        // axios to /logout endpoint 
        setAuth({});
        navigate('/linkpage');
    }

    return (
        <section>
            <h1>LoatheitLove</h1>
            <br />
            <p>Hey Prajit ! You are logged in!</p>
            <br />
            <Link to="/aboutuser">Tell us about you .. </Link>
            <br />
            <Link to="/matches">Check your match .. </Link>
            <br />
            <Link to="/linkpage">Lets gossip with your matches ..</Link>
            <div className="flexGrow">
                <button onClick={logout}>Sign Out</button>
            </div>
        </section>
    )
}

export default Home
