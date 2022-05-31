import React from 'react'
import { Container } from 'react-bootstrap'
import HomeLoginContent from '../../components/HomeLogin/HomeLoginContent'
import NavbarLogin from '../../components/NavbarLogin/NavbarLogin'
import Todos from '../../components/TodosContent/TodosContent'

export default function HomeLogin() {
    return (
        <>
            <NavbarLogin />
            <HomeLoginContent />
        </>
    )
}
