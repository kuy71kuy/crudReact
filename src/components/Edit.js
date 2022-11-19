import React, {useState, useEffect} from 'react';
import {Button, Form} from 'react-bootstrap';
import Mahasiswa from './Mahasiswa';
import {v4 as uuid} from "uuid";
import {Link, useNavigate} from 'react-router-dom'
import './templ';
import Templa from './templ';

function Edit(){
    const [name, setName] = useState("");
    const [hutang, setHutang] = useState("");
    const [id, setId] = useState("");

    let history = useNavigate();

    var index = Mahasiswa.map(function(e){
        return e.id
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();

        let a = Mahasiswa[index];
        a.Name = name;
        a.Hutang = hutang;


        history("/");
    }

    useEffect(() => {
        setName(localStorage.getItem('Name'))
        setHutang(localStorage.getItem('Hutang'))
        setId(localStorage.getItem('Id'))
    },[])

    return ( 
        <div class="homebg">
        <Templa/>
            <Form className="d-grid gap-2" style={{margin:"3rem 10rem"}}>
            <Form.Group className="mb-3" controlId="forName">
                <Form.Control type="text" placeholder="Masukkan Nama" value={name} required onChange={(e) => setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="forHutang">
                <Form.Control type="text" placeholder="Masukkan Hutang" value={hutang} required onChange={(e) => setHutang(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
        </Form>
        </div>
        )
    

}

export default Edit;