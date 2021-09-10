import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';


const GetData = () => {

    const [uData, setUData] = useState([])

    const loadData = () =>{

        fetch('http://localhost:3000/users')
            .then((resp)=> resp.json())
            .then(result => setUData(result))
    }

    useEffect(() => {
        loadData();
    },[])

    const deleteUser =async id =>{

        await fetch(`http://localhost:3000/users/${id}`, { method: 'DELETE'})
    
        loadData()
    }

return (
        <div id="getdata">
            <h2>All User Data</h2>
            <Table striped>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Website</th>
                    <th colSpan={2}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {console.log(uData)}
                {   uData.length > 0 ?
                    uData.map((res)=>(
                    <tr key={res.id}>
                        <th scope="row">{res.id}</th>
                        <td>{res.email}</td>
                        <td>{res.address}</td>
                        <td>{res.website}</td>
                        <td><Link className="btn btn-primary" to={`/editdata/${res.id}`}>Edit Data</Link></td>
                        <td><button className="btn btn-danger" onClick={() => deleteUser(res.id)}>Delete Data</button></td>
                    </tr>
                )): 'Data not found'}      
                </tbody>
            </Table>
        </div>
    )
}

export default GetData
