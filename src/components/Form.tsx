import { selectOptions } from "../data";
import { useDispatch } from "react-redux";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useMatch } from "@tanstack/react-location";
import { getHandlerArgs, inputValidator } from "../util";
import toast from "react-hot-toast";

export default function Form({
  type,
  handler
}: {
  type: string;
  handler: any;
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const billInfo = useSelector((bills) => bills);
  const {
    data: { id }
  } = useMatch();

  const values = billInfo.find((bill) => bill.id === id);

  const defaultValues = values ?? {
    description: "",
    amount: "",
    category: selectOptions[0]
  };

  const [formData, setFormData] = React.useState(defaultValues);

  const handlerargs = getHandlerArgs(
    type,
    {
      id:
        type === "edit"
          ? id
          : Math.floor(1000 + Math.random() * 9000).toString(),
      date: new Date().toLocaleDateString("en-GB").toString(),
      ...formData
    },
    { navigate, billInfo }
  );

  const handleInsert = () => {
    const { error } = inputValidator(formData);

    if (error) {
      toast(error);
    } else {
      dispatch(handler.apply(this, handlerargs));
    }
  };

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <div
      style={{
        backgroundColor: "aliceblue",
        textAlign: "center",
        margin: "50px",
        padding: "50px",
        borderRadius: "20px"
      }}
    >
      <h3>{type === "edit" ? "Edit" : "Add"} Bill Details</h3>
      <br />
      <div className="addBillForm">
        <input
          onChange={handleChange}
          value={formData.description}
          name="description"
          type="text"
          placeholder="Description"
        />
        <input
          onChange={handleChange}
          value={formData.amount}
          name="amount"
          type="text"
          placeholder="Amount"
        />
        <select
          className="filterSelect"
          name="category"
          value={formData.category}
          onChange={handleChange}
          id="category"
        >
          {selectOptions.map((option) => (
            <option style={{ fontFamily: "Helvetica" }} value={`${option}`}>
              {option}
            </option>
          ))}
        </select>
        <button className="addBill" onClick={handleInsert}>
          {type === "edit" ? "EDIT" : "ADD"} BILL
        </button>
        <button
          className="addBill"
          onClick={() => navigate({ to: "/", replace: false })}
        >
          CANCEL
        </button>
      </div>
    </div>
  );
}
