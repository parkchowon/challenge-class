import clsx from "clsx";
import { useContext, useEffect, useState } from "react";
import { ToastContext } from "../contexts/ToastContext";

function ToastItem({ toast }) {
  const [visible, setVisible] = useState(false);
  const { setToasts } = useContext(ToastContext);

  useEffect(() => {
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, toast.time);

    setTimeout(() => {
      setToasts((prevToast) => {
        return prevToast.filter((pre) => pre.id !== toast.id);
      });
    }, toast.time + 500);
  }, []);

  return (
    <div
      className={clsx(
        "shadow-lg bg-white p-6 border rounded-lg w-[320px] transition flex items-center duration-500 text-sm",
        visible ? "translate-x-0" : "translate-x-[340px]"
      )}
    >
      <div className="grow flex flex-col">
        <h6 className="font-semibold">{toast.title}</h6>
        <p>{toast.context}</p>
      </div>
    </div>
  );
}

export default ToastItem;
