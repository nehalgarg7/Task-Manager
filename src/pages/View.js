import { useContext } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import UserContext from "../context/UserContext";
import "../css/View.css";
function View() {
    const { id } = useParams();

    const { task } = useContext(UserContext);
    let name = "", description = "", priority = "", status = "";

    task.map((e) => {
        if (e.id === Number(id)) {
            name = e.name;
            description = e.description;
            priority = e.priority;
            status = e.status;
        }
    })

    return (
        <>
            <Header></Header>

            <div className="view-container">
                <table className="View">
                    <tbody>
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
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default View;