import { Link } from "react-router-dom";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SearchForm from "../components/SearchForm";

const Navbar = () => {
  return (
    <AppBar
      sx={{
        backgroundColor: "#3a4664",
        height: "15%",
        display: "flex",
        justifyContent: "center",
      }}
      position="static"
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link className="link" to="/">
          Recipe Finder
        </Link>
        <SearchForm />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
