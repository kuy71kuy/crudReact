import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import Mahasiswa from './Mahasiswa';
import {v4 as uuid} from "uuid";
import {Link, useNavigate} from 'react-router-dom'
import './templ';
import Templa from './templ';

function Add(){
    const[name, setName] = useState('');
    const[hutang, setHutang] = useState('');

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = name,
        b = hutang;

        Mahasiswa.push({id: uniqueId, Name : a, Hutang : b});

        history("/");
    }

    return (<div class="homebg">
        <Templa/>
        <Form className="d-grid gap-2" style={{margin:"3rem 10rem"}}>
            <Form.Group className="mb-3" controlId="forName">
                <Form.Control type="text" placeholder="Masukkan Nama" required onChange={(e) => setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="forHutang">
                <Form.Control type="text" placeholder="Masukkan Hutang" required onChange={(e) => setHutang(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button variant="success" onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
        </Form>
    </div>);
}

export default Add;