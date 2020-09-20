import Router, { useRouter } from 'next/router';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GetServerSideProps } from 'next';
import MainLayout from '../../components/MainLayout';
import { Post } from '../../interfaces/post';
import PostCard from '../../components/Post';

interface PostPage {
    post: Post
}

const Comments = styled.div`
margin: 2rem;
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

const Comment = styled.div`
.blockquote {
  background: #f9f9f9;
  border-left: 10px solid #ccc;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  quotes: "\\201C""\\201D""\\2018""\\2019";
}
.blockquote:before {
  color: #ccc;
  content: open-quote;
  font-size: 4em;
  line-height: 0.1em;
  margin-right: 0.25em;
  vertical-align: -0.4em;
}
.blockquote p {
  display: inline;
}
`;

export default function Posts({ post: serverPost }: PostPage) {
  const [post, setPost] = useState(serverPost);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const data = await axios.get(`https://simple-blog-api.crew.red/posts/${router.query.postId}?_embed=comments`);
      setPost(data.data);
    }

    if (!serverPost) {
      load();
    }
  }, []);

  if (!post) {
    return (<h1>Loading...</h1>);
  }
  console.log(post);
  return (
    <MainLayout title="Posts">
      <PostCard id={post.id} body={post.body} title={post.title} />
      <Comments>

        {!!post.comments.length
                && post.comments.map((comment) => (
                  <>
                    <Comment>
                      <p className="blockquote">{comment.body}</p>
                    </Comment>
                  </>
                ))}
      </Comments>
      <Button onClick={() => Router.push('/posts')}>Back to posts</Button>

    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
  if (!req) {
    return { props: { post: null } };
  }
  let data;
  try {
    data = await axios.get(`https://simple-blog-api.crew.red/posts/${query.postId}?_embed=comments`);
  } catch (error) {
    return { props: { post: null } };
  }

  return { props: { post: data.data } };
};
