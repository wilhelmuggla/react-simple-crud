import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/nav";

import showMembers from "./components/showMembers";
import addMember from "./components/addMember";
import editMember from "./components/editMember";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import {MembersContextProvider } from "./context/membersContext";

function App() {
  return (
    <div>
      <BrowserRouter>
      <MembersContextProvider>
        <NavBar />
        <Switch>
          <Route exact path="/" component={showMembers} />
          <Route exact path="/lagg_till" component={addMember} />
          <Route exact path="/andra_medlem/:id" component={editMember} />
        </Switch>
        </MembersContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
