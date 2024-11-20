import { useState } from "react";
import { Button, CircularProgress, Typography } from "@mui/material";
import { uploadFile } from "../firebase/storage";

const UploadFile = ({ onFileUpload }) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploading(true);
      setError("");
      try {
        const url = await uploadFile(file);
        onFileUpload(url);
      } catch (error) {
        setError("Error uploading image");
        console.error("Error uploading image: ", error);
      } finally {
        setUploading(false);
      }
    } else {
      setError("File upload is required");
    }
  };

  return (
    <div>
      <input
        accept="image/*"
        id="contained-button-file"
        type="file"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
      <label htmlFor="contained-button-file">
        <Button
          size="medium"
          variant="contained"
          component="span"
          disabled={uploading}
        >
          {uploading ? <CircularProgress size={34} /> : "Upload Image"}
        </Button>
      </label>
      {error && <Typography color={"red"}>{error}</Typography>}
    </div>
  );
};

export default UploadFile;
