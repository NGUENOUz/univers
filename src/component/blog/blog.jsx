import { FacebookProvider, useFacebook } from "react-facebook-sdk";
import React from "react";
import { useState,useEffect } from "react";


function Blog() {
    // const [accessToken, setAccessToken] = useState(""); // Store the access token here
    // const [posts, setPosts] = useState([]); // Stocker les publications récupérées
    // useEffect(() => {
    //   // Fetch the access token from a secure environment
    //   fetch("https://drive.google.com/file/d/18m6REGNu-93wE3X6Qldd2vHwiQNpKfag/view?usp=drive_link")
    //     .then((response) => response.json())
    //     .then((data) => setAccessToken(data.accessToken));
    // }, []);
  
    // const { getPosts } = useFacebook();
  
    // useEffect(() => {
    //   if (accessToken) {
    //     getPosts({
    //       pageId: 100737782337413,
    //       accessToken,
    //     }).then((posts) => setPosts(posts));
    //   }
    // }, [accessToken]);
  
    return (
      <div>
        <div className="blog">
          <h1>Mes derniers posts</h1>
          <img src="logo129.png" alt="logo du site " />
          {/* <div>
            {posts.map((post) => (
              <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <img src={post.image} alt={post.title} />
                <a href={post.link}>Lire la suite</a>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    );
  }
  
  export default Blog;
  