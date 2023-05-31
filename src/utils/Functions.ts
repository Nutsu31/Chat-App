import { HandleCheckType } from "../types/Types";

export const handleCheck: HandleCheckType = (data, setErr, setData) => {
    if (data.status === "ok") {
        setErr((prev) => ({ ...prev, user: "" }));
        setData(data);
      }
  };