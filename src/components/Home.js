import {Button} from 'react-bootstrap';
import Mahasiswa from './Mahasiswa';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import './templ';
import Templa from './templ';

function Home(){
    let i = 0;
    let history = useNavigate();
    let goto = useNavigate();
    function goCreate(){
        goto("/create")
    }

    const handleEdit = (id, name, hutang) => {
        localStorage.setItem('Name',name);
        localStorage.setItem('Hutang',hutang);
        localStorage.setItem('Id',id);
    }


    const numComm = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    const handleDelete = (id) => {
        var index = Mahasiswa.map(function(e){
            return e.id
        }).indexOf(id);

        Mahasiswa.splice(index,1);

        history('/');
    }
    return(
        <div class="homebg">
        <Templa/>
            <div style={{margin:"3rem 10rem"}}>
                <table class="table table-dark table-striped table-bordered lalign">
                    <thead>
                        <tr>
                            <th>
                                No 
                            </th>
                            <th>
                                Nama 
                            </th>
                            <th>
                                Hutang
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        {
                            Mahasiswa && Mahasiswa.length > 0
                            ?
                            Mahasiswa.map((item) => {
                                return(
                                    <tr>
                                        <td>
                                            {i=i+1}
                                        </td>
                                        <td>
                                            {item.Name}
                                        </td>
                                        <td>
                                            Rp.{numComm(item.Hutang)},00
                                        </td>
                                        <td>
                                            <Link to={'/edit'}>
                                            <Button variant="warning" onClick={() => handleEdit(item.id, item.Name, item.Hutang)}>UBAH</Button>
                                            </Link>
                                            &nbsp;
                                            <Button variant='danger' onClick={() => handleDelete(item.id)}>HAPUS</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No data available"
                        }
                    </tbody>

                </table>
                        <br/>
                            <Button onClick={() => goCreate()} variant="success" size="1g">BUAT BARU</Button>
            </div>
        </div>
    )
}

export default Home;