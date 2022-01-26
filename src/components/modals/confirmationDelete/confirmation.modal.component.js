import { Box } from "@material-ui/core";
import React, { useState } from "react";

import { Button, Stack } from "../style.js";

const style = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: 12,
  boxShadow: 24,
  p: 4,
};

const ConfirmationModal = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={style}>
      <h3>Deseja confirmar e excluir {props.title}?</h3>

      <Stack direction="row">
        <Button variant="outlined" color="error" onClick={props.close}>
          Cancelar
        </Button>
        <Button variant="contained" color="success" onClick={props.close}>
          Confirmar
        </Button>
      </Stack>
    </Box>
  );
};

export default ConfirmationModal;
