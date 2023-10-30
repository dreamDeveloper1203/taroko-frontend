/* eslint-disable react/react-in-jsx-scope */
import axios from "axios";
import { useEffect, useState } from "react";
import Contact from "../components/Contact";

function Contacts() {
  const [userData, setUserDate] = useState<any>([]);
  const [indexNumber, setIndex] = useState<number>(0);
  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    axios.get("http://localhost:3000/api/contacts").then((res) => {
      setUserDate(res.data.data);
    });
  };

  const sortUserData = () => {
    let i: number = indexNumber;
    i++;
    if (i % 2 !== 0) {
      setUserDate(
        [...userData].sort((a, b) => a.first_name.localeCompare(b.first_name))
      );
    } else {
      setUserDate(
        [...userData].sort((b, a) => a.first_name.localeCompare(b.first_name))
      );
    }
    setIndex(i);
  };
  return (
    <>
      <div className="title">
        <div className="contact-title">Contacts</div>
        <img
          onClick={sortUserData}
          src={
            "https://t4.ftcdn.net/jpg/05/32/62/25/240_F_532622565_keFZOJVqGXohv6hZD6VBSfFMtJag7vFM.jpg"
          }
          alt="Sort Image"
        />
      </div>
      <div className="contacts-grp">
        {userData &&
          userData.map((item: any, index: number) => {
            return (
              <Contact
                key={index}
                id={item.id}
                first_name={item.first_name}
                last_name={item.last_name}
                job={item.job}
                description={item.description}
                getContacts={getContacts}
              />
            );
          })}
      </div>
    </>
  );
}
export default Contacts;
