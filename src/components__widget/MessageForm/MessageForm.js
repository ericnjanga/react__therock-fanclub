import React from 'react';
import './MessageForm.css';
//...
import { Form, FormGroup, Label, Input } from 'reactstrap';

const MessageForm = (props) => {
  const { handleSubmit, handleChange, title, content } = props; 
  return(
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="exampleEmail">Title</Label>
        <Input type="text" name="title" id="title" placeholder="Enter a title" onChange={handleChange} value={title} />
      </FormGroup> 
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="content" id="content" placeholder="Enter your message" onChange={handleChange} value={content} />
      </FormGroup>   
    </Form>
  );
}

export default MessageForm;