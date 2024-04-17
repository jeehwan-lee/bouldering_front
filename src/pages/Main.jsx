import React, { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  Popover,
  ScrollArea,
  TextField,
} from "@radix-ui/themes/dist/cjs/index.js";
import {
  DotsHorizontalIcon,
  DotsVerticalIcon,
  MagnifyingGlassIcon,
  Pencil1Icon,
} from "@radix-ui/react-icons";
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
      <main className="flex min-h-screen flex-col items-center justify-between p-5">
        <Box width="700px">
          <Flex justify="between" mb="4">
            <Button>
              <Pencil1Icon />
              글쓰기
            </Button>
            <Flex gap="2" align="center">
              <Button>로그인</Button>
              <DotsVerticalIcon />
            </Flex>
          </Flex>
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
    </>
  );
}

export default Main;
