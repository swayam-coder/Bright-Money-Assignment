import { CREATE, DELETE, EDIT } from "./constants";
import toast from "react-hot-toast";

export function createBill(billDetails, otherArgs) {
  const { billInfo, navigate } = otherArgs;

  return function (dispatch) {
    const checkIfExists = billInfo.find((info) => info.id === billDetails.id);

    if (!checkIfExists) {
      dispatch({ type: CREATE, payload: billDetails });
      toast("Bill Added");
      return navigate({ to: "/", replace: true });
    } else {
      toast("Something wrong happened !!! Please try adding again");
    }
  };
}
export function deleteBill(billDetails) {
  return function (dispatch) {
    dispatch({ type: DELETE, payload: billDetails });
    toast("Bill Deleted");
  };
}

export function editBill(billDetails, otherArgs) {
  const { navigate } = otherArgs;

  return function (dispatch) {
    dispatch({ type: EDIT, payload: billDetails });
    toast("Bill Edited");
    return navigate({ to: "/", replace: true });
  };
}
