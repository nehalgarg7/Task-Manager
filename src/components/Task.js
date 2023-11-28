import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';
import '../css/Task.css';
import React, { useContext, useEffect, useState } from 'react';

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





    return (
        <>
            {<table>
                <thead>
                    <td>

                    </td>
                    <td>
                        ID
                    </td>
                    <td>
                        Name
                    </td>
                    <td>
                        Status
                    </td>
                    <td>
                        Delete
                    </td>
                    <td>
                        Edit
                    </td>
                </thead>
                {
                    task?.map((data) =>
                        <tr>
                            <td>
                                <input type="checkbox" name={`${data.id}`} onChange={handleCheckBoxClick}  />
                            </td>
                            <td>
                                {data.id}
                            </td>
                            <td className={`${data.status === true ? "checked" : "notchecked"}`}>
                                <Link to={`/view/${data.id}`}>{data.name}</Link>
                                </td>
                            <td>{data.status === true ? "Completed" : "Not Completed"}</td>
                            <td><button onClick={() => del(data.id)}> Delete</button></td>
                            <td><Link to={`/edit/${data.id}`}><button>Edit Task</button></Link></td>
                        </tr>
                    )
                }
            </table>

            }

        </>
    )
}

export default Task;