import React from 'react'
import { Container } from 'react-bootstrap'
import NavbarLogin from '../../components/NavbarLogin/NavbarLogin'
import ProfileContent from '../../components/ProfilesContent/ProfileContent'

export default function Profiles() {
    return (
        <>

            <NavbarLogin />
            <Container>
                <ProfileContent />
            </Container>s
        </>
    )
}
