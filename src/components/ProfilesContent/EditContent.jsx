import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import styles from './ProfileContent.module.css'

export default function EditContent(props) {
    const [state, setState] = useState(null)
    const id = props.data
    // console.log("ini props", id);
    const dataUser = state?.data
    const URL = `http://localhost:8000/users/` + id + ``
    // console.log("ini atas", dataUser);

    useEffect(() => {
        const getData = async () => {
            Axios.get(URL)
                .then(res => {
                    // console.log(res);
                    setState(res)
                    // setProfile(res.data.data);
                }).catch(error => {
                    // this.setError()
                    console.log(error)
                    if (error.response) {
                        console.log("--------------------------------------------------")
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        console.log(error.response.data);
                        console.log(error.response.status);
                        if (error.response.status === 401) {
                            history("/Login");
                            swal({
                                title: "Error",
                                text: "Mohon Login Terlebih Dahulu",
                                icon: "error",
                            });
                        }
                        console.log(error.response.headers);
                    } else if (error.request) {
                        console.log("*************************")

                        // The request was made but no response was received
                        // error.request is an instance of XMLHttpRequest in the browser and an instance of
                        // http.ClientRequest in node.js
                        console.log(error.request);
                    } else {
                        console.log("++++++++++++++++++++++++")
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                })
        }
        getData();
    },
        []);

    let history = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState({
        username: "",
        password: "",
        email: "",
        phone: "",
        address: "",

    })

    const handleChange = (event) => {
        // event.preventDefault()
        setData({ ...data, [event.target.name]: event.target.value });
        console.log(event.target.value);
    }



    const handleEdit = (index) => {
        const URLPut = `http://localhost:8000/users/` + index + ``
        Axios.put(URLPut,
            {
                username: data.username,
                email: data.email,
                password: data.password,
                phone: data.phone,
                address: data.address
            }
        )
            .then(res => {
                history("/Login");
                console.log("berhasil");
            })
            .catch(error => {
                // this.setError()
                console.log(error)
                if (error.response) {
                    console.log("--------------------------------------------------")
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    if (error.response.status === 401) {
                        history("/Login");
                        swal({
                            title: "Error",
                            text: "Mohon Login Terlebih Dahulu",
                            icon: "error",
                        });
                    }
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log("*************************")

                    // The request was made but no response was received
                    // error.request is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    console.log("++++++++++++++++++++++++")
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            })
    }

    return (
        <>
            <Button onClick={handleShow} className={styles.buttonHapus}>
                Edit
            </Button>

            <Form>
                <Modal
                    // show={show == item.ID} 
                    show={show}
                    onHide={handleClose} animation={false}

                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    {/* {console.log(item)} */}
                    <Modal.Header closeButton>
                        <Modal.Title>Update Update Profiles</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <br />
                        <h6>Username:
                            <Form.Control
                                type="Text"
                                placeholder="Enter email"
                                onChange={handleChange}
                                name="username"
                                value={data.username}
                            />
                        </h6>
                        <h6>Password:
                            <Form.Control
                                type="Text"
                                placeholder="Enter Password"
                                onChange={handleChange}
                                name="password"
                                value={data.password}
                            />
                        </h6>
                        <h6>Email:
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                onChange={handleChange}
                                name="email"
                                value={data.email}
                            />
                        </h6>
                        <h6>Phone:
                            <Form.Control
                                type="number"
                                placeholder="Enter Phone"
                                onChange={handleChange}
                                name="phone"
                                value={data.phone}
                            />
                        </h6>
                        <h6>Address:
                            <Form.Control
                                type="text"
                                placeholder="Enter Address"
                                onChange={handleChange}
                                name="address"
                                value={data.address}
                            />
                        </h6>
                        <br />
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary"
                            onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary"
                            onClick={() => handleEdit(dataUser.id)}
                        >
                            Update
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Form>
        </>
    )
}
