import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import Modal from '../../components/Modal';
import MainLayout from '../../components/MainLayout';

const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 25px 50px;
width: 50%;
border: 5px dashed #87befd;
border-radius: 50px;
margin: 50px auto;

input {
font-size: 2.5rem;
height: 70px;
}

textarea {
font-size: 2rem;
height: 180px;
}

h1 {
font-family: 'Montserrat', sans-serif;
text-transform: uppercase;
text-align: center;
color: #87befd;
margin: 2rem;
 }

label {
font-size: 2rem;

`;

const Button = styled.button`
margin-top: 2rem;
width: 100px;
`;

const Alert = styled.div`
position: absolute;
top: 55px;
left: 150px;
width: 80%;

 .hidden {    
    opacity: 0;
    visibility: hidden;
}

 .active {
    opacity: 1;
    visibility: visible;
 }
`;

const createPost = async ({ title, body }) => {
  try {
    await axios.post('https://simple-blog-api.crew.red/post', {
      id: Date.now(),
      title,
      body,
    });
  } catch (error) {
    return false;
  }

  return true;
};
export default function Posts() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [postWasAdded, setPostWasAdded] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || !body) {
      setShowModal(true);
    } else if (createPost({ title, body })) {
      setPostWasAdded(true);
      setTitle('');
      setBody('');
      setTimeout(() => setPostWasAdded(false), 1500);
    }
  };
  // @ts-ignore
  return (
    <MainLayout title="New Post">
      <Alert className={postWasAdded ? 'alert alert-success active' : 'alert alert-success hidden'}>
        The post was added
      </Alert>
      <Form onSubmit={handleSubmit}>
        <h1>Let's create a new post</h1>
        <div className="form-group">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="title"
            placeholder="Enter the post title here"
            maxLength={100}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body: </label>
          <textarea
            style={{ resize: 'none' }}
            className="form-control"
            id="body"
            placeholder="Describe your post here"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <Button
          type="submit"
          className="btn btn-primary"
        >
          CREATE
        </Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </Form>

    </MainLayout>
  );
}
