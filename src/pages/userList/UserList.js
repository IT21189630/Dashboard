import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function UserList() {
  const [data, setData] = useState(userRows);

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
      field: "username",
      headerName: "User",
      flex: 2,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email",
      headerName: "Email",
      flex: 2,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 2,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      headerAlign: "left",
      align: "left",
      type: "number",
      flex: 2,
      valueGetter: (params) => {
        const price = parseFloat(params.value.slice(1));
        return isNaN(price) ? 0 : price;
      },
      valueFormatter: ({ value }) => `$${value.toFixed(2)}`,
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
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
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
      <DataGrid
        className="customDataGrid"
        rows={data}
        columns={columns}
        pageSize={10}
        checkboxSelection
        getRowClassName={() => "grid-cell"}
      />
    </div>
  );
}