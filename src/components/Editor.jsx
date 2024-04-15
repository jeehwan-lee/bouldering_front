import React, { useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Editor({ readOnly, content, setContent }) {
  const quillRef = useRef(null);

  const imageHandler = async () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.addEventListener("change", async () => {
      const file = input.files?.[0];
      console.log(file);
    });
  };
  const editModules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
          ["blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ color: [] }, { background: [] }],
          [{ align: [] }, "image"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    };
  }, []);

  const readOnlyModules = useMemo(() => {
    return {
      toolbar: false,
    };
  }, []);

  return (
    <div>
      <ReactQuill
        ref={quillRef}
        readOnly={readOnly}
        style={{ width: "600px", height: "600px" }}
        modules={readOnly ? readOnlyModules : editModules}
        value={content}
        onChange={(content, delta, source, editor) =>
          setContent(editor.getHTML())
        }
      />
    </div>
  );
}

export default Editor;
