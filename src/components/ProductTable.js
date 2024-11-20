import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { DeleteForever, Edit } from "@mui/icons-material";
import { Colors } from "../styles/theme";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: Colors.primary,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ProductTable = ({ data, onEditClick, onDeleteClick }) => {
  return (
    <>
      <TableContainer component={Paper} sx={{ marginTop: 1 }}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Назва</StyledTableCell>
              <StyledTableCell align="right">Категорія</StyledTableCell>
              <StyledTableCell align="right">Ціна, грн</StyledTableCell>
              <StyledTableCell align="right">Опис</StyledTableCell>
              <StyledTableCell align="right">Фото</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, p) => (
              <StyledTableRow key={p}>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.desc}</TableCell>
                <TableCell align="right">
                  <img
                    src={row.imageUrl}
                    alt="Uploaded file"
                    style={{ maxWidth: 55 }}
                  />
                </TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => onEditClick(row)}>
                    <Edit sx={{ color: Colors.warning }} />
                  </IconButton>
                  <IconButton onClick={() => onDeleteClick(row.id)}>
                    <DeleteForever sx={{ color: "red" }} />
                  </IconButton>
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default ProductTable;
