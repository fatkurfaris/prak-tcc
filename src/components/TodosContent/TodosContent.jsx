import styles from "./TodosContent.module.css"
import { useState } from 'react'
import { Button, Form, Input } from "react-bootstrap"

function Todos() {
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
        <div>
            <div className={styles.posisi}>
                <h1>Todo List app</h1>
                <div className={styles.newform}>
                    <Form className="form" method="post" onSubmit={handleSubmit}>
                        {/* <input type="text" name="todo" value={form.todo} onChange={handleChange} placeholder="Todo..." /> */}
                        <Form.Control
                            type="text"
                            name="todo"
                            onChange={handleChange}
                            value={form.todo}
                            placeholder="Todo..."
                        />
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
            <div className={styles.content}>
                {
                    todoList.map((e, i) => (
                        <div key={i} className={styles.card}>
                            <div className="action">
                                {/* <Input type="checkbox" checked={e.status ? true : false} onChange={() => handleCheck(i)} /> */}
                                <Form.Check
                                    type="checkbox"
                                    label="Check me out"
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
    );
}

export default Todos;
