import { useState } from "react";
import Controler from "./components/Controler";
import ToastList from "./components/ToastList";
import { ToastContext } from "./contexts/ToastContext";
import useToast from "./hooks/useToast";

function App() {
  const [title, handleTitle] = useToast("Scheduled: Catch up");
  const [context, handleContext] = useToast(
    "Friday, February 10, 2023 at 5:57 PM"
  );
  const [time, handleTime] = useToast(2000);

  const [toasts, setToasts] = useState([]);

  return (
    <ToastContext.Provider
      value={{
        title,
        context,
        time,
        handleTitle,
        handleContext,
        handleTime,
        toasts,
        setToasts,
      }}
    >
      <main className="h-screen grid place-items-center">
        <Controler />
      </main>
      {toasts == [] ? false : <ToastList />}
    </ToastContext.Provider>
  );
}

export default App;
