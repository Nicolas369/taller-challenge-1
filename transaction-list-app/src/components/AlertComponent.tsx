import React from "react";
import "../styles/AlertComponentStyles.css";

type AlertProps = {
  type?: "success" | "error" | "warning" | "info";
  message: string;
};

export const Alert: React.FC<AlertProps> = ({ type = "info", message }) => {
  return <div className={`alert alert-${type}`}>{message}</div>;
};
