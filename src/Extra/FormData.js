import React, {useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label, Input, FormGroup } from 'reactstrap';

const FormData = () => {
    const [modal, setModal] = useState(false);
    const [user, setUser] = useState({
      email:'',
      password: '',
      address: '',
      website: ''
    })
  
    const HandleChange = event => {
        setUser({...user, [event.target.name] : event.target.value})
    }

    const SubmitHandler = event =>{

        console.log('submit data');

        event.preventDefault();

        const userData ={
            email: user.email,
            password: user.password,
            address: user.address,
            website: user.website
        }

        const requestOptions = {
            method: 'POST',
            header: {'Content-type': 'application/json'}
        }

        fetch('https://jsonplaceholder.typicode.com/users', requestOptions)
        .then((resp)=> resp.json())
        .then(result => console.log("Result Data" + result));
        // this.setState({ user: result })

        console.log(userData);
    }

     console.log(user);

     const toggle = () => setModal(!modal);

    return (
        <div>
            <Button outline color="primary" onClick={toggle}>Add Users</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add User Details</ModalHeader>
                <ModalBody>
                    <Form onSubmit={SubmitHandler}>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" value={user.email} onChange={HandleChange} placeholder="Enter Email" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" value={user.password} onChange={HandleChange} placeholder="Enter Password" />
                        </FormGroup>
                        <FormGroup>
                                <Label for="exampleAddress">Address</Label>
                                <Input type="text" name="address" id="exampleAddress" value={user.address} onChange={HandleChange} placeholder="Enter Address" />
                        </FormGroup>
                        <FormGroup>
                                <Label for="exampleWebsite">Website</Label>
                                <Input type="text" name="website" id="exampleWebsite" value={user.website} onChange={HandleChange} placeholder="Enter Website" />
                        </FormGroup>
                    </Form>
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" type="submit">Submit</Button>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>            
        </div>
    )
}

export default FormData
