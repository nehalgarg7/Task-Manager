import { useContext } from "react";
import UserContext from '../context/UserContext';
import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from 'react-router-dom';

function AddNewTask() {
    const { task, setTask } = useContext(UserContext);

    const [show, setShow] = useState(false);
    // const [id, setId] = useState(task.length + 1);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [Priority, setPriority] = useState("");
    const navigate = useNavigate();
    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => setShow(true);

    // have to make changes data-structure of task is now changed.
    const handleClick = () => {

        if (name === "") {
            alert("Cannot Proceed!");
            setShow(true);
        }
        else {
            const id = task?.length + 1 || 1;
            let obj = {
                id: id,
                description: description,
                name: name,
                priority: Priority,
            }
            if(task?.length >= 0)
            {
                setTask([...task, obj]);
            }
            else
            {
                setTask([obj]);
            }
            navigate('/');
        }
    }

    // Ref

    // const nameRef =  useRef(null);
    // const descriptionRef = useRef(null);
    // const priorityRef = useRef(null);

    // const handleSubmit = (evt) => {
    //     evt.preventDefault()
    //     console.log(nameRef.current.value)
    //     console.log(descriptionRef.current.value)
    //     console.log(priorityRef.current);
    //     console.log(priorityRef);
    //     //setTask([...task, inputRef.current.value])
        
    // }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Task
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Task Here</Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    {/* <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Id</InputGroup.Text>
                        <Form.Control
                            placeholder="Enter the task ID"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onChange={(e) => { setId(e.target.value) }
                            }
                        />
                    </InputGroup> */}


                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                        <Form.Control
                            placeholder="Username"
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
                        <Dropdown className="d-inline mx-2" autoClose="outside">
                            <Dropdown.Toggle id="dropdown-autoclose-outside" >
                                Priority
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#"   onClick={(e) => setPriority(e.target.innerText)} >low</Dropdown.Item>
                                <Dropdown.Item href="#"   onClick={(e) => setPriority(e.target.innerText)} >medium</Dropdown.Item>
                                <Dropdown.Item href="#"   onClick={(e) => setPriority(e.target.innerText)} >high</Dropdown.Item>
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