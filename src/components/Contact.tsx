/* eslint-disable react/react-in-jsx-scope */
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { toastConfig } from "react-simple-toasts";

toastConfig({ theme: "dark" });
function Contact(props: any) {
  const [editFlag, setEditFlag] = useState<boolean>(false);
  const { getContacts } = props;
  const navigate = useNavigate();

  const [first_name, setFirstName] = useState<string>(props.first_name);
  const [last_name, setLastName] = useState<string>(props.last_name);
  const [job, setJob] = useState<string>(props.job);
  const [description, setDescription] = useState<string>(props.description);

  const deleteContact = (id: number) => {
    axios.delete(`http://localhost:3000/api/contacts/${id}`).then((res) => {
      if (res.data.statusCode === 200) {
        getContacts();
      }
      toast(res.data.message);
    });
  };
  const UpdateContact = () => {
    const contact = {
      first_name: first_name,
      last_name: last_name,
      job: job,
      description: description,
    };
    axios
      .patch(`http://localhost:3000/api/contacts/${props.id}`, {
        info: contact,
      })
      .then((res) => {
        console.log(res);
        if (res.data.statusCode === 201) {
          setEditFlag(false);
          navigate("/");
        }
        toast(res.data.message);
      });
  };

  return (
    <>
      <div className="contact">
        <div className="user-grp">
          <div className="user">
            <div className="avatar">
              <img
                src={
                  "https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png"
                }
                alt="avatar"
              />
            </div>
            {editFlag ? (
              <div>
                <input
                  className="edit-input"
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={first_name}
                />
                <input
                  className="edit-input"
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  value={last_name}
                />
              </div>
            ) : (
              <div className="name">
                {props.first_name + " " + props.last_name}
              </div>
            )}
          </div>
          <div className="btn-grp">
            {editFlag ? (
              <button onClick={UpdateContact}>Save</button>
            ) : (
              <button onClick={() => setEditFlag(!editFlag)}>Edit</button>
            )}
            <button onClick={() => deleteContact(props.id)}>Delete</button>
          </div>
        </div>
        <div className="job-description">
          <div className="contact-job">
            Job :{" "}
            {editFlag ? (
              <input
                className="edit-input"
                type="text"
                value={job}
                onChange={(e) => setJob(e.target.value)}
              />
            ) : (
              props.job
            )}
          </div>
          <div className="contact-description">
            Description :{" "}
            {editFlag ? (
              <input
                className="edit-input"
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            ) : (
              props.description
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
