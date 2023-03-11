import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

function Modal() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 760,
    height: 600,
    bgcolor: "background.paper",
    boxShadow: 12,
  };

  const [modalOpen, setModalOpen] = React.useState(false);
  const handleModalOpen = () => {
    setModalOpen(true);
    handleClose();
  };
  const handleModalClose = () => setModalOpen(false);
  return <div>Modal</div>;
}

export default Modal;
