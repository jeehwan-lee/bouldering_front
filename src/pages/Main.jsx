import React, { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Main() {
  const [postList, setPostList] = useState([]);

  const fetchPostList = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/post/list`);

      setPostList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPostList();
  }, []);

  return (
    <ul>
      {postList.map((post) => (
        <ol>
          <Link to={`/post/detail/${post.id}`}>
            {post.id}. {post.title}
          </Link>
        </ol>
      ))}
    </ul>
  );
}

export default Main;
