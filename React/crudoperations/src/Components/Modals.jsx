import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Modals({show,setShow,postData}) {
  const handleClose =()=>setShow(false);
  const [email,setEmail]=useState('');
  const [name,setName]=useState('');

  
  return (
    <>
     
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                     
            <Form>

              <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your name" onChange={(e)=>setName(e.target.value)} />
            </Form.Group>



            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>setEmail(e.target.value)}/>
              
            </Form.Group>

            
            
    
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e)=>{
            e.preventDefault();
            postData(email,name);
            
            
          }}>
            submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modals;