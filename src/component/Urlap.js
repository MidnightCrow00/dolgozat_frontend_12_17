import React, { useContext, useState } from 'react'
import { ApiContext } from '../contexts/ApiContext'
import { Button, Container, Form } from 'react-bootstrap'


export default function Urlap() {
    const {postAdat}=useContext(ApiContext)
    const[adat, setAdat]=useState({
        szakdoga_neve:'',
        githublink:'',
        oldallink:'',
        tagokneve:''
    })
    function valtozasKezeles(event){
        const sObj={...adat,[event.target.id]:event.target.value}
        setAdat(sObj)
    }
    function elkuld(event){
        event.preventDefault()
        console.log("Elküld")
        postAdat('api/szakdogak', adat)
    }

  return (
    <Container>
        <Form onSubmit={elkuld}>
            <Form.Group className="mb-3 text-start" controlId='szakdoga_neve'>
                <Form.Label>Szakdolgozat címe</Form.Label>
                <Form.Control type='text' value={adat.szakdoga_neve} onChange={valtozasKezeles}/>
            </Form.Group>

            <Form.Group className="mb-3 text-start" controlId='tagokneve'>
                <Form.Label>Készítők neve</Form.Label>
                <Form.Control type='text' value={adat.tagokneve} onChange={valtozasKezeles} />
            </Form.Group>
            <Form.Group className="mb-3 text-start" controlId='oldallink'>
                <Form.Label>Az oldal elérhetősége</Form.Label>
                <Form.Control type='text' value={adat.oldallink} onChange={valtozasKezeles} />
            <Form.Group className="mb-3 text-start" controlId='githublink'>
                <Form.Label>GitHub elérhetősége</Form.Label>
                <Form.Control type='text' value={adat.githublink} onChange={valtozasKezeles} />
            </Form.Group>
            </Form.Group>
            <div className='d-flex justidy-content-center'>
                <Button variant="outline-dark" type='submit' size='sm'>Új</Button>
            </div>
        </Form>
    </Container>
  )
}
