import { useContext } from "react";
import { v4 } from "uuid";
import { ToastContext } from "../contexts/ToastContext";

function Controler() {
  const {
    title,
    context,
    time,
    handleTitle,
    handleContext,
    handleTime,
    toasts,
    setToasts,
  } = useContext(ToastContext);

  const handleSubmit = () => {
    if (title === "" || context === "") {
      alert("제목과 내용을 모두 입력해 주세요.");
    } else {
      setToasts([
        ...toasts,
        {
          id: v4(),
          title,
          context,
          time,
        },
      ]);
    }
  };
  return (
    <div className="grid grid-cols-1 gap-y-6">
      <p className="text-2xl font-semibold text-center">토스트 컨트롤러</p>
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-1.5 items-start">
          <label className="text-sm font-medium">제목 (필수)</label>
          <input
            className="border px-4 py-2.5 rounded-md w-80"
            defaultValue={title}
            onChange={(e) => handleTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-y-1.5 items-start">
          <label className="text-sm font-medium">내용 (필수)</label>
          <input
            className="border px-4 py-2.5 rounded-md w-80"
            defaultValue={context}
            onChange={(e) => handleContext(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-y-1.5 items-start">
          <label className="text-sm font-medium">노출 시간(ms) (선택)</label>
          <input
            className="border px-4 py-2.5 rounded-md w-80"
            defaultValue={time}
            onChange={(e) => handleTime(e.target.value)}
          />
        </div>

        <button
          onClick={() => handleSubmit()}
          className="bg-black text-white py-3 text-[15px] rounded-md font-medium hover:bg-black/80 transition active:bg-black/70"
        >
          토스트 띄우기
        </button>
      </div>
    </div>
  );
}

export default Controler;
