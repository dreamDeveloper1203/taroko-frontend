/* eslint-disable react/react-in-jsx-scope */
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { toastConfig } from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css"; // choose your theme

toastConfig({ theme: "dark" });
function Add() {
  const [first_name, setFirstName] = useState<string>("");
  const [last_name, setLastName] = useState<string>("");
  const [job, setJob] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const navigate = useNavigate();

  const AddContact = () => {
    const contact = {
      first_name: first_name,
      last_name: last_name,
      job: job,
      description: description,
    };
    axios
      .post("http://localhost:3000/api/contacts", { contact: contact })
      .then((res) => {
        if (res.data.statusCode === 201) {
          navigate("/");
        }

        toast(res.data.message);
      });
  };
  return (
    <div className="add">
      <div className="wrapper">
        <div className="login-box">
          <h3 className="info-text">Add Contact</h3>
          <div className="form-container">
            <div className="input-addon">
              <input
                className="form-element input-field"
                placeholder="First Name"
                type="text"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div className="input-addon">
              <input
                className="form-element input-field"
                placeholder="Last Name"
                type="text"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
            <div className="input-addon">
              <input
                className="form-element input-field"
                placeholder="Job"
                type="text"
                onChange={(e) => {
                  setJob(e.target.value);
                }}
              />
            </div>
            <div className="input-addon">
              <input
                className="form-element input-field"
                placeholder="Job"
                type="Description"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <input
              className="form-element is-submit"
              type="button"
              onClick={AddContact}
              value="Create Contact"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Add;
