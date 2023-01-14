import { useTable } from "react-table";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FilterandAdd from "./FilterandAdd";
import "../styles.css";
import { deleteBill } from "../redux/actions";
import { useDispatch } from "react-redux";
import { Link } from "@tanstack/react-location";
import { columnInfo } from "../data";

export default function App() {
  const billInfo = useSelector((bills) => bills);

  const [currBills, setCurrBills] = useState(billInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    setCurrBills(billInfo);
  }, [billInfo]);

  const data = React.useMemo(() => currBills, [currBills]);

  const columns = React.useMemo(
    () => [
      ...columnInfo,
      {
        Header: "Action",
        accessor: "action",
        Cell: ({ cell, row }) => (
          <div>
            <Link to={`editbill/${row.values.id}`}>
              <button value={row.values.name}>Edit</button>
            </Link>
            <button
              value={row.values.name}
              onClick={() => dispatch(deleteBill({ id: row.values.id }))}
            >
              Delete
            </button>
          </div>
        )
      }
    ],
    []
  );

  const {
    getTableProps,

    getTableBodyProps,

    headerGroups,

    rows,

    prepareRow
  } = useTable({ columns, data });

  return (
    <>
      <div style={{ padding: "10px" }}>
        <FilterandAdd setCurrBills={setCurrBills} />
        <table {...getTableProps()} style={{ width: "100%" }}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    style={{
                      background: "aliceblue",
                      color: "black",
                      fontWeight: "bold"
                    }}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);

              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        style={{
                          padding: "10px",

                          border: "solid 1px gray",

                          background: "papayawhip"
                        }}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
