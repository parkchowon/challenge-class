import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRef, useState } from "react";
import Page from "../components/Page";

const ENDPOINT = "https://jsonplaceholder.typicode.com/todos";

function TodoPage() {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  const { isPending, mutate } = useMutation({
    mutationFn: () => axios.post(ENDPOINT, { value }),
    onSuccess: () => {
      alert("성공");
    },
    onError: () => {
      alert("실패");
    },
  });
  const handleClickBtn = async () => {
    try {
      mutate(inputRef.current.value);
    } catch {}
  };

  return (
    <Page>
      <input
        ref={inputRef}
        type="text"
        className="border"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={isPending}
      />
      <button
        disabled={isPending}
        className="bg-black text-white"
        onClick={handleClickBtn}
      >
        눌러주세요
      </button>
    </Page>
  );
}

export default TodoPage;
