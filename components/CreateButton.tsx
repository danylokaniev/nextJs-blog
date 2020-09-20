import styled from 'styled-components';
import { useRouter } from 'next/router';

const Button = styled.button`
background-color: rgba(0,0,0,0);
border: none;
position: fixed;
bottom: 75px;
right: 75px;

.btn{
    display: inline-block;
    text-decoration: none;
    background: #87befd;
    color: #FFF;
    width: 80px;
    height: 80px;
    line-height: 70px;
    border-radius: 50%;
    text-align: center;
    overflow: hidden;
    box-shadow: 0px 0px 0px 5px #87befd;
    border: dashed 1px #FFF;
    transition: .4s;
}

.btn:hover{
    background: #668ad8;
     box-shadow: 0px 0px 0px 5px #668ad8;
}
`;
export default function NavBar() {
  const router = useRouter();
  return (
    <Button onClick={() => {
      router.push('/posts/new');
    }}
    >
      <a className="btn">POST</a>
    </Button>
  );
}
