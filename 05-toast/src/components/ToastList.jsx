import { useContext } from "react";
import { ToastContext } from "../contexts/ToastContext";
import ToastItem from "./ToastItem";

function ToastList() {
  const { toasts } = useContext(ToastContext);

  return (
    <ul className="fixed bottom-6 right-6 grid grid-cols-1 gap-y-3">
      {toasts.map((toast) => {
        return (
          <li key={toast.id}>
            <ToastItem toast={toast} />
          </li>
        );
      })}
    </ul>
  );
}

export default ToastList;
