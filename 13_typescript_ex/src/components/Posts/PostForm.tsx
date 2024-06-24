import { DefaultError, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";

const endpoint = "https://jsonplaceholder.typicode.com/posts";

function PostForm() {
  const titleDOMRef = useRef<HTMLInputElement>(null);
  const bodyDOMRef = useRef<HTMLTextAreaElement>(null);

  const { mutateAsync: createPost } = useMutation<
    unknown,
    DefaultError,
    { title: string; body: string }
  >({
    mutationFn: (data) => axios.post(endpoint, data),
  });

  const handleClick = async () => {
    const title = titleDOMRef.current?.value;
    const body = bodyDOMRef.current?.value;

    if (!title || !body) return alert("빈칸입니다.");
    const data = {
      title: title,
      body: body,
    };
    await createPost(data);
  };
  return (
    <div className="flex flex-col p-4">
      <input
        ref={titleDOMRef}
        className="border border-black"
        placeholder="제목"
      />
      <textarea
        ref={bodyDOMRef}
        className="border border-black"
        placeholder="내용"
      />
      <button onClick={handleClick}>생성</button>
    </div>
  );
}

export default PostForm;
