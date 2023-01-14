import { filterOptions } from "../data";
import { Link } from "@tanstack/react-location";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function FilterandAdd({ setCurrBills }: { setCurrBills: any }) {
  const [currFilter, setCurrFilter] = React.useState("All");
  const allBills = useSelector((bills) => bills);

  useEffect(() => {
    if (currFilter === "All") {
      setCurrBills(allBills);
    } else {
      setCurrBills(() =>
        allBills.filter((bill) => bill.category === currFilter)
      );
    }
  }, [currFilter]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 0px"
      }}
    >
      <select
        className="filterSelect"
        name="Filter results"
        id="filter"
        value={currFilter}
        style={{ padding: "10px" }}
        onChange={(e) => setCurrFilter(e.target.value)}
      >
        {filterOptions.map((option) => (
          <option style={{ fontFamily: "Helvetica" }} value={`${option}`}>
            {option}
          </option>
        ))}
      </select>
      <Link to="addbill">
        <button className="addBtn">ADD BILL</button>
      </Link>
    </div>
  );
}
