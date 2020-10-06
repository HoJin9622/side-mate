import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const alertOption = {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};


export const Alert = () => {
  const error = useSelector((state) => state.errors);
  const message = useSelector((state) => state.messages);

  useEffect(() => {
    if (error.msg.msg) toast.error(error.msg.msg, alertOption);
  }, [error]);

  useEffect(() => {
    if (message.register) toast.success(`${message.register}`, alertOption);
    if (message.notValidForm)
      toast.error(`${message.notValidForm}`, alertOption);
    if (message.login) toast.success(`${message.login}`, alertOption);
    if (message.logout) toast.success(`${message.logout}`, alertOption);
  }, [message]);

  return (
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};
