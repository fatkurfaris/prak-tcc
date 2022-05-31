import React from 'react'
import GetAllUser from '../../hooks/GetAllUser'
import styles from './HomeLoginContent.module.css'
import { useState } from 'react'
import { Button, Form, Input } from "react-bootstrap"

export default function HomeLoginContent(props) {
    const Get_allUser = GetAllUser(props)
    const data2 = Get_allUser?.data
    console.log("ini get", data2);

    const user = localStorage.getItem("username")
    const pass = localStorage.getItem("password")

    // data?.filter(index => index.username)
    const [todoList, setTodoList] = useState([])
    const [form, setForm] = useState({
        todo: '',
        status: false
    })

    const resetInput = () => {
        setForm({
            todo: '',
            status: false
        })
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            todo: e.target.value,
            status: false
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form.index);
        if (form.index || form.index === 0) {
            const newTodo = todoList.map((e, i) => {
                if (i === form.index) {
                    return form
                } else {
                    return e
                }
            })
            setTodoList(newTodo)
        } else {
            setTodoList([
                ...todoList,
                form
            ])
        }
        resetInput()
    }


    const handleCheck = (index) => {
        const newTodo = todoList.map((e, i) => {
            if (i === index) {
                return {
                    todo: e.todo,
                    status: true
                }
            } else {
                return e
            }
        })
        setTodoList(newTodo)
    }

    const handleDelete = (index) => {
        // console.log("ini new todo atas",newTodo);
        const newTodo = todoList.filter((e, i) => {
            if (i !== index) {
                return e

            }
        })
        setTodoList(newTodo)
        console.log("ini new todo bawah", newTodo);
    }

    const handleEdit = (index) => {
        const detailTodo = {
            index,
            ...todoList[index]
        }
        setForm(detailTodo)
    }


    return (
        <>
            {
                data2?.find(index => index.username == user && index.password == pass) ?
                    <>
                        {/* <div>
                            <h3 className={styles.title}>Selamat Datang {user} di Aplikasi TodoList</h3>
                        </div> */}
                        <div className={styles.posisi}>
                            <div >
                                <h1 className={styles.title}>Selamat Datang {user} di Aplikasi TodoList</h1>
                                <div className={styles.newform}>
                                    <Form className="form" method="post" onSubmit={handleSubmit}>
                                        {/* <input type="text" name="todo" value={form.todo} onChange={handleChange} placeholder="Todo..." /> */}
                                        <div className={styles.Todos}>
                                            <Form.Control
                                                type="text"
                                                name="todo"
                                                onChange={handleChange}
                                                value={form.todo}
                                                placeholder="Todo..."
                                                className={styles.forminput}
                                            />
                                            <Button variant="primary" type="submit">
                                                Submit
                                            </Button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                            <div className={styles.content}>
                                {
                                    todoList.map((e, i) => (
                                        <div key={i} className={styles.card}>
                                            <div className={styles.text1}>
                                                {/* <Input type="checkbox" checked={e.status ? true : false} onChange={() => handleCheck(i)} /> */}
                                                <Form.Check
                                                    type="checkbox"
                                                    checked={e.status ? true : false}
                                                    onChange={() => handleCheck(i)}

                                                />
                                            </div>
                                            <div className={styles.text}>
                                                {e.todo}
                                            </div>
                                            <div className="button-action">
                                                <Button className={styles.btnEdit} onClick={() => handleEdit(i)}>Edit</Button>
                                                <Button className={styles.btnDelete} onClick={() => handleDelete(i)}>Delete</Button>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>











                    </>
                    :
                    <>
                        <div >
                            <h3 className={styles.title}>Mohon Maaf Anda Belum Login </h3>
                        </div>
                    </>

            }

            {/* {
                data2?.filter(index => index.username == user && index.password == pass).map((item, index2) => {
                    // return (
                    //     <>
                    //         <div key={index2}>
                    //             {item.username} <br />
                    //             {item.id}<br />
                    //             {item.email}<br />
                    //         </div>
                    //     </>
                    // )
                    if (item.username == user && item.password == pass) {
                        return (
                            <>
                                <div key={index2}>
                                    {item.username} <br />
                                    {item.id}<br />
                                    {item.email}<br />
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
            } */}
        </>
    )
}
