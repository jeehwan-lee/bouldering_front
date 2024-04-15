import React, { useEffect, useMemo, useRef, useState } from "react";
import "react-quill/dist/quill.snow.css";
import Editor from "../components/Editor";
import axios from "axios";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const fetchPost = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/post/detail/${id}`
      );

      setTitle(response.data.title);
      setContent(response.data.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h2>제목</h2>
      <input id="title" type="text" value={title} />
      <Editor readOnly={true} content={content} setContent={setContent} />
    </div>
  );
}

export default Detail;
