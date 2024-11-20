import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import {
  setData,
  updateData,
  removeData,
  onDataChange,
} from "../firebase/database";

import DeleteDialog from "./Dialog/DeleteDialog";
import AddDialog from "./Dialog/AddDialog";
import EditDialog from "./Dialog/EditDialog";
import ProductTable from "./ProductTable";

export default function Products() {
  const [data, setDataState] = useState([]);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [currentData, setCurrentData] = useState({
    category: "",
    name: "",
    price: "",
    description: "",
    desc: "",
    imageUrl: "",
  });

  useEffect(() => {
    const path = "products/";
    onDataChange(path, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const formattedData = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        formattedData.sort((a, b) => a.price - b.price);
        setDataState(formattedData);
      } else {
        setDataState([]);
      }
    });
  }, []);

  const handleAddClick = () => {
    setAddDialogOpen(true);
  };

  const handleAddConfirm = (values) => {
    const path = `products/`;
    setData(path, {
      category: values.category,
      name: values.name,
      price: values.price,
      description: values.description,
      desc: values.desc,
      imageUrl: values.imageUrl,
    })
      .then(() => setAddDialogOpen(false))
      .catch((error) => console.error("Error adding document: ", error));
  };

  const handleAddCancel = () => {
    setAddDialogOpen(false);
  };

  const handleEditClick = (row) => {
    setCurrentData(row);
    setEditDialogOpen(true);
  };

  const handleEditConfirm = (values) => {
    const path = `products/${currentData.id}`;
    updateData(path, {
      category: values.category,
      name: values.name,
      price: values.price,
      description: values.description,
      desc: values.desc,
      imageUrl: values.imageUrl,
    })
      .then(() => setEditDialogOpen(false))
      .catch((error) => console.error("Error updating document: ", error));
  };

  const handleEditCancel = () => {
    setEditDialogOpen(false);
  };

  const handleDeleteClick = (id) => {
    setCurrentData({ id });
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    const path = `products/${currentData.id}`;
    removeData(path)
      .then(() => setDeleteDialogOpen(false))
      .catch((error) => console.error("Error removing document: ", error));
  };

  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false);
  };

  return (
    <>
      <Button
        startIcon={<AddIcon />}
        variant="contained"
        onClick={handleAddClick}
      >
        Add Product
      </Button>
      <ProductTable
        data={data}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteClick}
      />
      <AddDialog
        open={addDialogOpen}
        onConfirm={handleAddConfirm}
        onCancel={handleAddCancel}
      />

      <EditDialog
        open={editDialogOpen}
        data={currentData}
        onConfirm={handleEditConfirm}
        onCancel={handleEditCancel}
      />

      <DeleteDialog
        open={deleteDialogOpen}
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      />
    </>
  );
}
