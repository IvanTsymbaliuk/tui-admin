import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
  MenuItem,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import UploadFile from "../UploadFile";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Назва обов'язково"),
  category: Yup.string().required("Виберіть категорію"),
  price: Yup.number().required("Ціна обов'язково"),
  desc: Yup.string().required("Додайте короткий опис"),
});

export default function EditDialog({ open, data, onConfirm, onCancel }) {
  const [imageUrl, setImageUrl] = useState("");
  const initialValues = {
    category: data.category || "",
    name: data.name || "",
    price: data.price || "",
    description: data.description || "",
    desc: data.desc || "",
    imageUrl: data.imageUrl || "",
  };
  useEffect(() => {
    if (data) {
      setImageUrl(data.imageUrl);
    }
  }, [data]);
  const handleSubmit = (values) => {
    onConfirm({ ...values, imageUrl });
  };

  return (
    <Dialog open={open} onClose={onCancel} fullWidth maxWidth="lg">
      <DialogTitle>{"Add Product"}</DialogTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ dirty, isValid, setFieldValue, errors, touched }) => (
          <Form>
            <DialogContent>
              <Grid container spacing={1}>
                <Grid item container direction="column" spacing={1} xs={9}>
                  <Grid item container spacing={1}>
                    <Grid item conteiner xs={4}>
                      <Field
                        as={TextField}
                        name="name"
                        label="Назва"
                        required
                        fullWidth
                      />
                      <ErrorMessage name="name">
                        {(message) => (
                          <Typography color={"red"}>{message}</Typography>
                        )}
                      </ErrorMessage>
                    </Grid>
                    <Grid item xs={3}>
                      <Field
                        as={TextField}
                        name="price"
                        label="Ціна, грн"
                        required
                        fullWidth
                      />
                      <ErrorMessage name="price">
                        {(message) => (
                          <Typography color={"red"}>{message}</Typography>
                        )}
                      </ErrorMessage>
                    </Grid>
                    <Grid item xs={3}>
                      <Field
                        as={TextField}
                        select
                        name="category"
                        label="Категорія"
                        required
                        fullWidth
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="Хвойні">Хвойні</MenuItem>
                        <MenuItem value="Цитрусові">Цитрусові</MenuItem>
                      </Field>
                      <ErrorMessage name="category">
                        {(message) => (
                          <Typography color={"red"}>{message}</Typography>
                        )}
                      </ErrorMessage>
                    </Grid>
                    <Grid item xs={2}>
                      <UploadFile
                        onFileUpload={(url) => {
                          setImageUrl(url);
                          setFieldValue("imageUrl", url);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        as={TextField}
                        name="desc"
                        label="Короткий Опис"
                        required
                        fullWidth
                      />
                      <ErrorMessage name="desc">
                        {(message) => (
                          <Typography color={"red"}>{message}</Typography>
                        )}
                      </ErrorMessage>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Field
                      as={TextField}
                      name="description"
                      label="Опис"
                      fullWidth
                      multiline
                      rows={8}
                    />
                  </Grid>
                </Grid>

                <Grid item xs={3}>
                  {imageUrl && (
                    <Box sx={{}}>
                      <img
                        src={imageUrl}
                        alt="Uploaded file"
                        style={{ maxWidth: "100%", maxHeight: "auto" }}
                      />
                    </Box>
                  )}
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button
                disabled={!dirty || !isValid}
                type="submit"
                variant="contained"
                color="primary"
              >
                Save
              </Button>
              <Button onClick={onCancel} color="error" autoFocus>
                Cancel
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
}
