//공통 얼럿을 사용하기 위한 커스텀 훅
import { useState } from "react";

const useAlert = () => {
  const [alert, setAlert] = useState({
    open: false,
    message: "",
  });

  const showAlert = (message: string) => {
    setAlert({
      open: true,
      message,
    });
  };

  const closeAlert = () => {
    setAlert({
      open: false,
      message: "",
    });
  };

  return {
    alert,
    showAlert,
    closeAlert,
  };
};

export default useAlert;