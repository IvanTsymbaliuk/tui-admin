import React from "react";
import { Dialog, DialogActions, DialogTitle, Button } from "@mui/material";

const DeleteDialog = ({ open, onConfirm, onCancel }) => (
  <Dialog open={open} onClose={onCancel}>
    <DialogTitle>Are you sure you want to delete this item?</DialogTitle>
    <DialogActions>
      <Button onClick={onCancel} color="primary">
        Cancel
      </Button>
      <Button onClick={onConfirm} sx={{ color: "red" }}>
        Delete
      </Button>
    </DialogActions>
  </Dialog>
);
export default DeleteDialog;
