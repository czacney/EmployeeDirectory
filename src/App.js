import React, { Component } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import EmployeeTable from "./components/EmployeeTable";


function App () {
  return (
    <>
    <Header />
    <Search />
    <br />
    <EmployeeTable />
    </>
  );
}

export default App;
