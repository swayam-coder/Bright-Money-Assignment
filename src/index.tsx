import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "./redux/store";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Chart from "./components/Chart";

import { ReactLocation, Router, Outlet } from "@tanstack/react-location";
import { createBill, editBill } from "./redux/actions";

const location = new ReactLocation();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <Provider store={store}>
    <Router
      location={location}
      routes={[
        { path: "/", element: <App /> },
        {
          path: "addbill",
          element: <Form type="add" handler={createBill} />
        },
        {
          path: "editbill",
          children: [
            {
              path: ":id",
              element: <Form type="edit" handler={editBill} />,
              loader: ({ params: { id } }) => {
                return {
                  id
                };
              }
            }
          ]
        },
        {
          path: "billingchart",
          element: <Chart />
        }
      ]}
    >
      <Navbar />
      <Toaster />
      <Outlet />
    </Router>
  </Provider>
);
