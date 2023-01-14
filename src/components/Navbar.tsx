import { Link } from "@tanstack/react-location";

export default function Navbar() {
  return (
    <nav
      id="topnav"
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "aliceblue",
        padding: "20px"
      }}
    >
      <h3 style={{ margin: 0, alignSelf: "center" }}>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <b>Aditya's Car Wash</b>
        </Link>
      </h3>

      <Link to="billingchart">
        <button className="addBtn">View Monthly billing</button>
      </Link>
    </nav>
  );
}
