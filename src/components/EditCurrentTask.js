import { useContext } from "react";
import UserContext from '../context/UserContext';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';

function EditCurrentTask({ currentId }) {

    currentId = Number(currentId);
    const { task, setTask } = useContext(UserContext);
    let prevName = "", prevDescription = "", prevPriority = "";

    const setValues = (e) => {
        prevName = e.name;
        prevDescription = e.description;
        prevPriority = e.priority;
    }


    console.log(prevName, prevDescription, prevPriority);

    task.map((e) => {
        e.id === currentId ? setValues(e) : e.id = e.id;
    })


    const [show, setShow] = useState(false);
    const [id, setId] = useState(currentId);
    const [name, setName] = useState(prevName);
    const [description, setDescription] = useState(prevDescription);
    const [Priority, setPriority] = useState(prevPriority);
    const navigate = useNavigate();

    console.log(id, name, description, Priority);
    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => setShow(true);


    const handleClick = () => {

        if (name === "") {
            alert("Cannot Proceed!");
            setShow(true);
        }
        else {
            console.log(task);
            task.map((e) =>
                e.id === currentId ? e.description = description : e.description = e.description
            )
            task.map((e) =>
                e.id === currentId ? e.name = name : e.name = e.name
            )
            task.map((e) =>
                e.id === currentId ? e.priority = Priority : e.name = e.name
            )
            setTask([...task]);
            navigate('/');
        }
    }


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Edit Task
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Task Here</Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Id</InputGroup.Text>
                        <Form.Control
                            placeholder="Enter the task ID"
                            aria-label="Username"
                            value={currentId}
                            aria-describedby="basic-addon1"

                        />
                    </InputGroup>


                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                        <Form.Control
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            value={name}
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
                            value={description}
                            onChange={(e) => { setDescription(e.target.value) }
                            }
                        />
                    </InputGroup>




                    <InputGroup className="mb-3">



                        <Dropdown className="d-inline mx-2" autoClose="outside">
                            <Dropdown.Toggle id="dropdown-autoclose-outside" >
                                Priority
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#" onClick={(e) => setPriority(e.target.innerText)}>low</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={(e) => setPriority(e.target.innerText)}>medium</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={(e) => setPriority(e.target.innerText)}>high</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </InputGroup>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClick}>
                        Save Changes
                    </Button>
                </Modal.Footer>

            </Modal>
        </>
    )
}

export default EditCurrentTask;