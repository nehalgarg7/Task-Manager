import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';
import '../css/Task.css';
import React, { useContext} from 'react';

function Task() {

    const { task, setTask } = useContext(UserContext);

    const del = (id) => {
        let newdata = task.filter((e) => e.id !== id)
        setTask(newdata);
    }


    const handleCheckBoxClick = (e) => {
        let id = Number(e.target.name);
        let checkStatus = e.target.checked;

        task.map((e) => {
            if ((e.id === id)) {
                if (checkStatus === true) {
                    let id1 = e.id;

                    task.map((e) => {
                        if (e.id === id1) {
                            e.status = true
                        }
                    })
                } else {
                    let id1 = e.id;

                    task.map((e) => {
                        if (e.id === id1) {
                            e.status = false
                        }
                    })
                }

            }
        }
        )

        setTask([...task]);
    }



    console.log(task)

    return (
        <>
            {
                <div className="taskbox">
                    <div className={`table ${task.length > 9 ? "scroll" : ""}`}>
                        <table className='taskboxTable myTable'>
                        <caption>Task Details</caption>
                            <thead>
                                <th className='th'>

                                </th>
                                <th className='th'> 
                                    <span>Name</span>
                                </th>
                                <th className='th'>
                                    <span>Status</span>
                                </th>
                                <th className='th'>
                                    <span>Delete</span>
                                </th>
                                <th className='th'>
                                    <span>Edit</span>
                                </th>
                            </thead>
                            <tbody>
                            {
                                task?.map((data) =>
                                    <tr>
                                        <td>
                                            <input type="checkbox" className = "checkbox" name={`${data.id}`} onChange={handleCheckBoxClick} />
                                        </td>

                                        <td className={`${data.status === true ? "checked" : "notchecked"}`}>
                                            <Link to={`/view/${data.id}`} className='linkname'>{data.name}</Link>
                                        </td>
                                        <td>{data.status === true ? "Completed" : "Not Completed"}</td>
                                        <td><button className='deletebtn' onClick={() => del(data.id)} > Delete</button></td>
                                        <td><Link to={`/edit/${data.id}`}><button className='editbtnn'>Edit Task</button></Link></td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            }

        </>
    )
}

export default Task;