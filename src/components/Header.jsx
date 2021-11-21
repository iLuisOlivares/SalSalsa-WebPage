import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import NavSection from "./NavSection";
import "../assets/styles/components/Header.css";
/* 
  Componente del header
*/

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  margin: 0,
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#212529",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <header className="header">
      <nav
        className="navbar navbar-dark bg-dark navbar-expand-lg  py-1"
        id="mainNav"
      >
        <NavSection modalControl={handleOpen} isLittle={false} />

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style }}>
            <NavSection isLittle={true} closeModal={setOpen} />
          </Box>
        </Modal>
      </nav>
    </header>
  );
};

export default Header;
