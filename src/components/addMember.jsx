import React, { useState, useContext } from "react";
import { MembersContext } from "../context/membersContext";
import { useHistory } from "react-router-dom";

export default () => {
  const { addMember } = useContext(MembersContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();

    if (name === "" || phone === "" || email === "") {
      setError(true);
    } else {
      const newMember = {
        name: name,
        email: email,
        phone: phone,
      };
      addMember(newMember);
      history.push("/");
    }
  };

  //changes the state onChange
  const changeName = (e) => {
    setName(e.target.value);
  };

  const changePhone = (e) => {
    setPhone(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        {error === true ? (
          <div class="alert alert-danger" role="alert">
            Vänligen fyll i alla fält{" "}
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
              onClick={() => setError(false)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        ) : (
          ""
        )}
        <h3>Lägg till medlem</h3>
        <div className="form-group">
          <label>Namn</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder=""
            value={name}
            onChange={changeName}
          />
          <small id="emailHelp" class="form-text text-muted">
            Medlemmens namn
          </small>
        </div>
        <div className="form-group">
          <label>Telefonnummer</label>
          <input
            type="tel"
            className="form-control"
            id="exampleInputEmail1"
            value={phone}
            onChange={changePhone}
            aria-describedby="emailHelp"
            placeholder=""
          />
          <small id="emailHelp" class="form-text text-muted">
            Medlemmens telefonnummer
          </small>
        </div>
        <div className="form-group">
          <label>E-postadress</label>
          <input
            type="email"
            value={email}
            onChange={changeEmail}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder=""
          />
          <small id="emailHelp" class="form-text text-muted">
            Medlemmens epostadress
          </small>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary float-right">
            Lägg till
          </button>
        </div>
      </form>
    </div>
  );
};
