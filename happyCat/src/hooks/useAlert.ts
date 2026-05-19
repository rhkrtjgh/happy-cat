//공통 얼럿을 사용하기 위한 커스텀 훅
import { useState } from "react";

export type AlertVariant = "default" | "support";

const useAlert = () => {
  const [alert, setAlert] = useState<{
    open: boolean;
    message: string;
    variant: AlertVariant;
  }>({
    open: false,
    message: "",
    variant: "default",
  });

  const showAlert = (message: string, variant: AlertVariant = "default") => {
    setAlert({
      open: true,
      message,
      variant,
    });
  };

  const closeAlert = () => {
    setAlert({
      open: false,
      message: "",
      variant: "default",
    });
  };

  return {
    alert,
    showAlert,
    closeAlert
  };
};

export default useAlert;