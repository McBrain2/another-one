import "../styles/contactsList.css";
import ContactNav from "./contactNav";
import Contacts from "./contactsList";
import { useState, useEffect } from "react";

const ContactSection = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const handleSearch = (id) => {
    setSearch(id.target.value);
  };

  const url = "https://stoplight.io/mocks/chatdaddy/openapi/15107977/contacts";
  const token = "velit aliqua Excepteur Duis eiusmod";
  
  useEffect(() => {
    async function getData() {
      try {
        let response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Prefer: "code=200, dynamic=true",
            Authorization: `{   "access_token": ${token} }`,
          },
        });

        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }

        let data = await response.json();
        setUserData(data.contacts);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  const sectionStyle = {
    height: "95vh",
    marginTop: "15px",
    marginRight: "10px",
    backgroundColor: "rgb(238,239,241)",
  };

  return (
    <section style={sectionStyle}>
      <ContactNav
        contactCount={userData}
        handleSearch={handleSearch}
        searchState={[search, setSearch]}
      />

      <Contacts
        userDetails={[userData, setUserData]}
        loadingSet={loading}
        errorSet={error}
        searchState={search}
      />
    </section>
  );
};

export default ContactSection;
