import React, { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Box, TextField } from "@radix-ui/themes/dist/cjs/index.js";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import PostItem from "../components/PostItem";

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
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Box width="700px">
          <TextField.Root mb="4" size="3" placeholder="Search For the Post">
            <TextField.Slot>
              <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
          </TextField.Root>
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
        </Box>
      </main>
      {/* <ul>
        {postList.map((post) => (
          <ol>
            <Link to={`/post/${post.id}`}>
              {post.id}. {post.title}
            </Link>
          </ol>
        ))}
      </ul> */}
    </>
  );
}

export default Main;
