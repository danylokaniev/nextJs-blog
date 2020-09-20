import Router from "next/router";

export default function Posts() {
    return (
        <>
            <h1>Page not found</h1>
            <button onClick={() => Router.push('/')}>Go Home</button>
        </>
    );
};
