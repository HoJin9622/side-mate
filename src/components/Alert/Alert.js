import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Alert = () => {
  const error = useSelector((state) => state.errors);
  const message = useSelector((state) => state.messages);

  useEffect(() => {
    const alertOption = {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    };
    if (error.msg.name)
      toast.error(`❌ Name : ${error.msg.name.join()}`, alertOption);
    if (error.msg.email)
      toast.error(`❌ Email : ${error.msg.email.join()}`, alertOption);
    if (error.msg.message)
      toast.error(`❌ Message : ${error.msg.message.join()}`, alertOption);
  }, [error]);

  useEffect(() => {
    const alertOption = {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    };
    if (message.register) toast.success(`${message.register}`, alertOption);
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
