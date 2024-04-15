import React, { useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Editor from "../components/Editor";

function WritePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

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
      <input id="title" type="text" onChange={handleTitleChange} />
      <Editor readOnly={false} content={content} setContent={setContent} />
    </div>
  );
}

export default WritePost;
