import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import {Box} from '@mui/material'

export default function ProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id",
      headerName: "ID",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "product",
      headerName: "Product",
      flex: 2,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock",
      headerName: "Stock",
      flex: 2,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 2,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 2,
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      filterable: false,
      flex: 2,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <button
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            >Delete</button>
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <Box height="90vh">
      <DataGrid
        className="customDataGrid"
        rows={data}
        columns={columns}
        pageSize={10}
        checkboxSelection
        getRowClassName={() => "grid-cell"}
      />
      </Box>
    </div>
  );
}