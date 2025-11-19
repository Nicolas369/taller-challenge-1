import React from "react";
import "../styles/AlertComponentStyles.css";

type AlertProps = {
  type?: "success" | "error" | "warning" | "info";
  message: string;
};

export const Alert: React.FC<AlertProps> = ({ type = "info", message }) => {
  return <div className={`alert alert-${type}`}>{message}</div>;
};

/**
 * 
    <Alert type="success" message="Payment completed successfully!" />
    <Alert type="error" message="Something went wrong." />
    <Alert type="warning" message="Please check your information." />
    <Alert type="info" message="New updates are available." />

 */