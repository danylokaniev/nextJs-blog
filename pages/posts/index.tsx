import Router, { useRouter } from 'next/router';
import axios from 'axios';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import { Post } from '../../interfaces/post';
import MainLayout from '../../components/MainLayout';
import PostCard from '../../components/Post';

interface ServerPosts {
    posts: Post[]
}

const PostList = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;

`;

export default function Posts({ posts: serverPosts }: ServerPosts) {
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
    return (
      <h1>Loading...</h1>
    );
  }

  return (
    <MainLayout title="Posts">
      <PostList>
        {posts.reverse().map((post) => (
          <PostCard {...post} />))}
      </PostList>
      <button onClick={() => router.push('/')}>Go HOme</button>
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
