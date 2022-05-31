import Axios from 'axios';
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import styles from './ProfileContent.module.css'

export default function DeleteContent(props) {
    // console.log("ini pros delete", props);
    let history = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = (id) => {

        console.log("delete", id);
        const URL = `http://localhost:8000/users/` + id + ``
        Axios.delete(URL
        )
            .then(res => {
                history("/Login");
            })
            .catch(error => {
                // this.setError()
                console.log("ini errpo", error)
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
                Hapus
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation Delete Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure wanna delete this account</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="primary" onClick={() => handleDelete(props.data)}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
