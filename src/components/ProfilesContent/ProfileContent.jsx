import React, { useState } from 'react'
import styles from "./ProfileContent.module.css"
import GetAllUser from '../../hooks/GetAllUser'
import * as FaIcons from "react-icons/fa";
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Axios } from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import DeleteContent from './DeleteContent';
import EditContent from './EditContent';

export default function ProfileContent(props) {
    const Get_allUser = GetAllUser(props)
    const data2 = Get_allUser?.data
    // console.log("ini get", data2);

    const user = localStorage.getItem("username")
    const pass = localStorage.getItem("password")

    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);





    return (
        <>
            {
                data2?.find(index => index.username == user && index.password == pass) ?
                    <>
                        <div>
                            <h1 className={styles.title}>Profiles</h1>
                        </div>

                    </>
                    :
                    <>
                        <div >
                            <h1 className={styles.title}>Mohon Maaf Anda Belum Login </h1>
                        </div>
                    </>

            }

            {
                data2?.filter(index => index.username == user && index.password == pass).map((item, index2) => {
                    if (item.username == user && item.password == pass) {
                        return (
                            <>
                                <div key={index2} >
                                    <Container className={styles.space}>
                                        <Row>
                                            <Col sm={3}>
                                                <FaIcons.FaUser size={300} className={styles.iconProfile} />
                                                <Row>
                                                    <Col>
                                                        <div className={styles.buttonC}>
                                                            <EditContent data={item.id} />
                                                            <DeleteContent data={item.id} />
                                                            {/* <Button className={styles.buttonHapus}>
                                                                Hapus
                                                                <DeleteContent />
                                                            </Button> */}
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col sm={9} >
                                                <div className={styles.space2}>
                                                    {/* Lorem Ipsum is simply dummy text of the printing and typesetting
                                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                                    ever since the 1500s, when an unknown printer took a galley of type
                                                    and scrambled it to make a type specimen book. It has survived not
                                                    only five centuries, but also the leap into electronic typesetting,
                                                    remaining essentially unchanged. It was popularised in the 1960s
                                                    with the release of Letraset sheets containing Lorem Ipsum passages,
                                                    and more recently with desktop publishing software like Aldus PageMaker
                                                    including versions of Lorem Ipsum. */}
                                                    <div className={styles.space3}>
                                                        <h2>
                                                            Username
                                                        </h2>
                                                        <Form.Control
                                                            type="Text"
                                                            id="inputUsername"
                                                            aria-describedby="passwordHelpBlock"
                                                            value={item.username}
                                                            disabled
                                                        />
                                                    </div>
                                                    <div className={styles.space3}>
                                                        <h2>
                                                            Password
                                                        </h2>
                                                        <Form.Control
                                                            type="password"
                                                            id="inputPassword"
                                                            aria-describedby="passwordHelpBlock"
                                                            value={item.password}
                                                            disabled
                                                        />
                                                    </div>
                                                    <div className={styles.space3}>
                                                        <h2>
                                                            Email
                                                        </h2>
                                                        <Form.Control
                                                            type="email"
                                                            id="inputEmail"
                                                            aria-describedby="passwordHelpBlock"
                                                            value={item.email}
                                                            disabled
                                                        />
                                                    </div>
                                                    <div className={styles.space3}>
                                                        <h2>
                                                            Phone
                                                        </h2>
                                                        <Form.Control
                                                            type="Number"
                                                            id="inputNumber"
                                                            aria-describedby="passwordHelpBlock"
                                                            value={item.phone}
                                                            disabled
                                                        />
                                                    </div>
                                                    <div className={styles.space3}>
                                                        <h2>
                                                            Address
                                                        </h2>
                                                        <Form.Control
                                                            type="Text"
                                                            id="inputAddress"

                                                            value={item.address}
                                                            disabled
                                                        />
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>

                                </div>
                            </>
                        )
                    } else {
                        return (
                            <>
                                <div>
                                    salah
                                </div>
                            </>
                        )
                    }
                })
            }
        </>
    )
}
