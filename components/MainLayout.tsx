import styled from 'styled-components';
import Head from 'next/head';
import React from 'react';
import NavBar from './NavBar';
import CreateButton from './CreateButton';

const Main = styled.main`
overflow-y: hidden;
`;

interface MainLayoutProps {
    children: React.ReactNode,
    title: string
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title = 'MyBlog' }: MainLayoutProps) => (
  <>
    <Head>
      <title>
        {title}
        {' '}
        | Blog
      </title>
      <meta charSet="UTF-8" />
      <meta name="description" content="Blog with posts and comments" />
      <meta name="keywords" content="HTML, CSS, JavaScript, Blog, Post" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <NavBar />
    <Main>
      {children}
      <CreateButton />
    </Main>
  </>
);

export default MainLayout;
