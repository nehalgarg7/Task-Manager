import { useContext } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import UserContext from "../context/UserContext";
function View(){
    const {id} = useParams();

    const {task} = useContext(UserContext);
    let name = "", description = "", priority = "" , status = "";

    task.map((e)=>{
        if(e.id === id)
        {
            name = e.name;
            description = e.description;
            priority = e.priority;
            status = e.status;
        }
    })

    return(
        <>
        <Header></Header>

        <table>
            <tr>
                <td>Name</td>
                <td>{name}</td>
            </tr>
            <tr>
                <td>Description</td>
                <td>{description}</td>
            </tr>
            <tr>
                <td>Status</td>
                <td>{status === true ? "Completed" : "Not Completed"}</td>
            </tr>
            <tr>
                <td>Priority</td>
                <td>{priority}</td>
            </tr>
        </table>
        </>
    )
}

export default View;