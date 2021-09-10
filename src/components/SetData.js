import React, {useState} from 'react'
import { Button, Form, Label, Input, FormGroup, Col, Row } from 'reactstrap';
import { useHistory } from 'react-router';

const SetData = () => {

    let history = useHistory();

    const [user, setUser] = useState({
      email:'',
      password: '',
      address: '',
      website: ''
    })
  
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
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {'Content-type': 'application/json'}
        }

        fetch('http://localhost:3000/users', requestOptions)
        .then((resp)=> console.log(resp))

        ClearHandler();
        history.push("/")
    }

    return (
       
        <Form onSubmit={SubmitHandler} className="mt-5">
            <h2>Registration Form</h2>
            <FormGroup className="pb-4">
                <Row>
                    <Col sm={4}>
                        <Label for="exampleEmail">Email</Label>
                    </Col>
                    <Col sm={8}>
                        <Input type="email" name="email" id="exampleEmail" value={user.email} onChange={HandleChange} placeholder="Enter Email" />
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
                <Col sm={6}>
                    <Button type="submit" color="primary" outline>Submit</Button>
                </Col>

                <Col sm={6}>
                    <Button type="reset" color="success" onClick={ClearHandler} outline>Clear</Button>
                </Col>
            </Row>
        </Form>
        
    )
}

export default SetData
