import React, { context, useContext } from "react";
import { MembersContext } from "../context/membersContext";
import {Link} from "react-router-dom";

export default () => {
  const { membersList} = useContext(MembersContext);

  return (
    <div className="container">
      <h3>Medlemmar</h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Namn</th>
            <th scope="col">Telefonnummer</th>
            <th scope="col">Mail</th>
            <th scope="col" className="text-right">Åtgärd</th>

          </tr>
        </thead>
        <tbody>
          {membersList.map((member, index) => (
            <tr>
              <td>{member.name}</td>
              <td>{member.phone}</td>
              <td>{member.email}</td>
              <td> <Link to={"andra_medlem/" + index}><button className="btn btn-warning float-right">Ändra</button></Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
