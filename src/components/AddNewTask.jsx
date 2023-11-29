import { useContext } from "react";
import UserContext from '../context/UserContext';
import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';
import "../css/AddNewTask.css"

function AddNewTask() {
    const { task, setTask } = useContext(UserContext);

    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [Priority, setPriority] = useState("");
    const navigate = useNavigate();
    const handleClose = () => {
        setPriority("");
        setName("");
        setDescription("");
        setShow(false);
    };
    const handleShow = () => setShow(true);

    const handleClick = () => {

        if (name === "") {
            alert("Cannot Proceed!");
            setShow(true);
        }
        else {
            // console.log(task[task.length]);
            let lastId ; 
            let check = false;
            task?.map((e)=>{
                lastId = e.id;
                check = true;
            })
            // const id = task?.length + 1 || 1;
            
            const id = check === true ? lastId + 1 : 1;
            let obj = {
                id: id,
                description: description,
                name: name,
                priority: Priority,
            }
            if (task?.length >= 0) {
                setTask([...task, obj]);
            }
            else {
                setTask([obj]);
            }
            navigate('/');
        }
    }

    

    return (
        <>
            <div className="addNewTask">
                <Button variant="primary addtaskbtn" onClick={handleShow}>
                    Add Task
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Task Here</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>


                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1" className="nameInput">Name</InputGroup.Text>
                            <Form.Control
                                placeholder="Task Name"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                //ref={nameRef}
                                onChange={(e) => { setName(e.target.value) }
                                }
                            />
                        </InputGroup>


                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
                            <Form.Control
                                placeholder="Description"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={(e) => { setDescription(e.target.value) }
                                }
                            //ref={descriptionRef}
                            />
                        </InputGroup>




                        <InputGroup className="mb-3">
                            <Dropdown className="d-inline mx-2">
                                <Dropdown.Toggle id="dropdown-autoclose-outside" className="priority">
                                    {Priority === "" ? "Priority" : Priority}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#" className="btnpriority" onClick={(e) => setPriority(e.target.innerText)} >low</Dropdown.Item>
                                    <Dropdown.Item href="#" className="btnpriority" onClick={(e) => setPriority(e.target.innerText)} >medium</Dropdown.Item>
                                    <Dropdown.Item href="#" className="btnpriority" onClick={(e) => setPriority(e.target.innerText)} >high</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </InputGroup>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClick} >
                            Save Changes
                        </Button>
                    </Modal.Footer>

                </Modal>

                {/* <button onClick={()=>{setNewID(newID+1)}}>Counter: {newID}</button> */}
            </div>
        </>
    )
}

export default AddNewTask;

/*
Add Task
            <br />
            <form action="" onSubmit={handleClick}>
                <input type="text" name="add" id="" />
                <input type="text" name="data-id" id="" />
                <button type="submit">Add</button>
            </form> 
*/

/*

<InputGroup className="mb-3">
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        <InputGroup.Text id="basic-addon1">Status</InputGroup.Text>
                    </InputGroup>

*/