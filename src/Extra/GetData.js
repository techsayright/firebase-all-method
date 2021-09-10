import React, {useState, useEffect} from 'react'
import { Table } from 'reactstrap';

const GetData = () => {

    const [uData, setUData] = useState([])

    useEffect(() => {
        loadData();
    },[])

    const loadData = async () =>{

        fetch('https://user-details-ec70f-default-rtdb.firebaseio.com/users.json')
            .then((resp)=> resp.json())
            .then(result => {
                const allUserData = [];
                for (const key in result) {
                allUserData.push({
                    id: key,
                    email: result[key].email,
                    address: result[key].address,
                    website: result[key].website
                })
            }
            setUData(allUserData)
        })
        }
                

return (
        <div id="getdata">
            <Table striped>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Website</th>
                </tr>
                </thead>
                <tbody>
                {   uData ?
                    uData.map((res, index)=>(
                    <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{res.email}</td>
                        <td>{res.address}</td>
                        <td>{res.website}</td>
                    </tr>
                )): 'Data not found'}      
                </tbody>
            </Table>
        </div>
    )
}

export default GetData
