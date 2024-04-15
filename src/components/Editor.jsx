import React, { useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import AWS from "aws-sdk";

function Editor({ readOnly, content, setContent }) {
  const quillRef = useRef(null);

  const imageHandler = async () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.addEventListener("change", async () => {
      const file = input.files?.[0];

      try {
        const name = Date.now();

        AWS.config.update({
          region: process.env.REACT_APP_AWS_REGION,
          accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
        });

        const upload = new AWS.S3.ManagedUpload({
          params: {
            ACL: "public-read",
            Bucket: process.env.REACT_APP_AWS_NAME,
            Key: `upload/${name}`,
            Body: file,
          },
        });

        const IMAGE_URL = await upload.promise().then((res) => res.Location);
        const editor = quillRef.current.getEditor();
        const range = editor.getSelection();

        editor.insertEmbed(range.index, "image", IMAGE_URL);
      } catch (error) {
        console.log(error);
      }
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
