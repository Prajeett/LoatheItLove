import { Link } from "react-router-dom"

const Admin = () => {
    return (
        <section>
            <h1>Admins Page</h1>
            <br />
            <p>This page will later moderate and control registered users for loathellove</p>
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}

export default Admin
