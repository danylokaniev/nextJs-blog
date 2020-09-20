import Link from 'next/link';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { GetServerSideProps } from 'next';
import { Post } from '../interfaces/post';
import MainLayout from '../components/MainLayout';
import PostCard from '../components/Post';

interface Posts {
    posts: Post[]
}

const PostList = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;

`;

const Button = styled.button`
margin: 2rem;
background: #87befd;
border: none;
width: 100px;
height: 50px;

&:hover {
background: #ccc;
}

`;

export default function Home({ posts: serverPosts }: Posts) {
  const [posts, setPosts] = useState(serverPosts);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const data = await axios.get('https://simple-blog-api.crew.red/posts');
      setPosts(data.data);
    }

    if (!serverPosts) {
      load();
    }
  }, []);

  if (!posts) {
    return (<h1>Loading...</h1>);
  }

  return (
    <MainLayout title="Posts">
      <h1> Latest Posts</h1>
      <PostList>
        {posts.reverse().slice(0, 5).map((post) => (
          <PostCard {...post} />))}
      </PostList>
      <Button onClick={() => router.push('/posts')}>View all posts</Button>
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (!req) {
    return { props: { posts: null } };
  }

  const res = await axios.get('https://simple-blog-api.crew.red/posts');
  return { props: { posts: res.data } };
};
