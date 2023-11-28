import { Link } from "react-router-dom";
import AddTask from "./AddNewTask";
function Header() {

    return (
        <>
            <Link to="/add"><button>Add Task</button></Link>
            <Link to = "/">Home</Link>
            <br />
            <br />
        </>
    )
}

export default Header;