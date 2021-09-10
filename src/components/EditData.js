import React, {useState, useEffect, useCallback} from 'react'
import { Button, Form, Label, Input, FormGroup, Col, Row } from 'reactstrap';
import { useHistory, useParams } from 'react-router';


const EditData = () => {
    let history = useHistory();
    const {id} = useParams();
    console.log(id);
    
    const [user, setUser] = useState({
      email:'',
      password: '',
      address: '',
      website: ''
    })

    
    const loadData = useCallback(() =>{
        fetch(`http://localhost:3000/users/${id}`)
            .then((resp)=> resp.json())
            .then(result => setUser(result))
    },[id])

    useEffect(() => {
        loadData();
    },[loadData])
     
    const HandleChange = event => {
        setUser({...user, [event.target.name] : event.target.value})
    }

    const ClearHandler = () =>{
        setUser({
            email:'',
            password: '',
            address: '',
            website: ''
        })
    }

    const SubmitHandler = event =>{

        event.preventDefault();

        const userData ={
            email: user.email,
            password: user.password,
            address: user.address,
            website: user.website
        }

        const requestOptions = {
            method: 'PUT',
            body: JSON.stringify(userData),
            headers: {'Content-type': 'application/json'}
        }

        fetch(`http://localhost:3000/users/${id}`, requestOptions)
        .then((resp)=> console.log(resp))

        ClearHandler();
        loadData()
        history.push("/")
    }

    return (
       
        <Form onSubmit={SubmitHandler} className="mt-5">
            <h2>Edit User Data</h2>
            <FormGroup className="pb-4">
                <Row>
                    <Col sm={4}>
                        <Label for="exampleEmail">Email</Label>
                    </Col>
                    <Col sm={8}>
                        <Input type="email" name="email" id="exampleEmail" disabled value={user.email} onChange={HandleChange} placeholder="Enter Email" />
                    </Col>
                </Row>
            </FormGroup>
            
            <FormGroup className="pb-4">
                <Row>
                    <Col sm={4}>
                        <Label for="examplePassword">Password</Label>
                    </Col>
                    <Col sm={8}>
                        <Input type="password" name="password" id="examplePassword" value={user.password} onChange={HandleChange} placeholder="Enter Password" />
                    </Col>
                </Row>
            </FormGroup>
            
            <FormGroup className="pb-4">
                <Row>
                    <Col sm={4}>
                        <Label for="exampleAddress">Address</Label>
                    </Col>
                    <Col sm={8}>
                        <Input type="text" name="address" id="exampleAddress" value={user.address} onChange={HandleChange} placeholder="Enter Address" />
                    </Col> 
                </Row>
            </FormGroup>
            
            <FormGroup className="pb-4">
                <Row>
                    <Col sm={4}>
                        <Label for="exampleWebsite">Website</Label>
                    </Col>
                    <Col sm={8}>
                        <Input type="text" name="website" id="exampleWebsite" value={user.website} onChange={HandleChange} placeholder="Enter Website" />
                    </Col>
                </Row>
            </FormGroup>

            <Row>
                <Col>
                    <Button type="submit" color="warning">Submit</Button>
                </Col>

                
            </Row>
        </Form>
        
    )
}

export default EditData
