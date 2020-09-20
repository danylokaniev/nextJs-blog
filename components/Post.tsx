import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { use } from 'ast-types';

const Card = styled.div`
border: 2px solid #BDC3C7 ;
padding: 15px;
margin: 2rem;
width: 500px;
border-radius: 20px;
// background: black;

&:hover {
background-color: #ccc;
}
`;

export default function Post({ title, body, id }) {
  const router = useRouter();
  return (
    <Card className="card" onClick={() => router.push(`/posts/${id}`)}>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <hr />
        <p className="card-text">{body}</p>
      </div>
    </Card>
  );
}
