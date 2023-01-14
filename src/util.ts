import { monthList } from "./data";

export function getHandlerArgs(type: string, payload: any, other: any) {
  switch (type) {
    case "edit":
      const { billInfo, ...currother } = other;
      return [payload, currother];
    case "add":
      return [payload, other];
    default:
      return [payload];
  }
}

export function inputValidator(data: any) {
  if (!data.description || !data.amount) {
    return { error: "Fields cant be empty" };
  }

  if (isNaN(data.amount)) {
    return { error: "Amount should be a number" };
  }

  return { error: null };
}

export function getMonthlyBillAmount(data) {
  return monthList.map((month) => {
    return data
      .filter((d) => d.date.split("/")[1] === month.numeric)
      .reduce((prev, curr) => prev + parseInt(curr.amount), 0);
  });
}
