export const selectOptions = [
  "Utility",
  "Shopping",
  "Food & Dining",
  "Education",
  "Personal Care",
  "Travel"
];

export const filterOptions = ["All", ...selectOptions];

export const columnInfo = [
  {
    Header: "Bill id",

    accessor: "id"
  },

  {
    Header: "Description",

    accessor: "description"
  },
  {
    Header: "Category",

    accessor: "category"
  },
  {
    Header: "Amount",

    accessor: "amount"
  },
  {
    Header: "Date",

    accessor: "date"
  }
];

export const monthList = [
  { name: "January", numeric: "01" },
  { name: "February", numeric: "02" },
  { name: "March", numeric: "03" },
  { name: "April", numeric: "04" },
  { name: "May", numeric: "05" },
  { name: "June", numeric: "06" },
  { name: "July", numeric: "07" },
  { name: "August", numeric: "08" },
  { name: "September", numeric: "09" },
  { name: "October", numeric: "10" },
  { name: "November", numeric: "11" },
  { name: "December", numeric: "12" }
];
