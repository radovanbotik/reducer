import React from "react";
import { useEffect } from "react";

export default function Modal(props) {
  const { content, closeModal } = props;
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  }, [content]);
  return (
    <div style={{ color: "red", border: "2px solid red", padding: "10px" }}>
      <p>{content}</p>
    </div>
  );
}
