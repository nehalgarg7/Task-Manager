import { useParams } from "react-router-dom";
import EditCurrentTask from "../components/EditCurrentTask";
import Header from "../components/Header";

function EditTask () {

    const {id} = useParams();
    return(
        <>
        <Header></Header>
        <EditCurrentTask currentId={id}></EditCurrentTask>
        </>
    )
}

export default EditTask;