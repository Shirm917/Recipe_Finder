import { Link } from "react-router-dom";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SearchForm from "../components/SearchForm";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <AppBar sx={{ backgroundColor: "#3a4664" }} position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link className="link" to="/">
            Recipe Finder
          </Link>
          <SearchForm />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
