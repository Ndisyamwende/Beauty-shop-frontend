import React, { useState, useEffect } from "react";

const Messages = () => {
  const [contacts, setContacts] = useState([]);
  const [viewContact, setViewContact] = useState(null);
  const [replyMessage, setReplyMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token not found");
      return;
    }

    console.log("Using token:", token);

    fetch("http://127.0.0.1:5555/contact", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log("Response status:", response.status);
        console.log("Response headers:", response.headers);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setContacts(data); // Assuming the API returns an array of contacts
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleView = (contact) => {
    setViewContact(contact);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://127.0.0.1:5555/contact/${id}`, {
        method: "DELETE",
      });
      const updatedContacts = contacts.filter((contact) => contact.id !== id);
      setContacts(updatedContacts);
      setViewContact(null);
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  const handleReplyChange = (event) => {
    setReplyMessage(event.target.value);
  };

  const handleReply = async (id) => {
    try {
      await fetch(`http://127.0.0.1:5555/contact/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: replyMessage, replied: true }),
      });

      const updatedContacts = contacts.map((contact) =>
        contact.id === id ? { ...contact, replied: true } : contact
      );
      setContacts(updatedContacts);
      setReplyMessage("");
      setViewContact(null);
    } catch (error) {
      console.error("Error replying to contact:", error);
    }
  };

  const handleCloseModal = () => {
    setViewContact(null);
  };

  return (
    <div className="bg-light-mode min-h-screen p-4">
      <h1 className="text-Heading font-bold text-2xl text-center py-3">
        Customer Messages
      </h1>
      <div className="md:hidden">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="dark:bg-variant1-dark p-2 shadow-md text-center mb-4"
          >
            <div className="text-[18px] font-body bg-white dark:bg-variant1-dark text-secondary p-2 capitalize">
              {contact.name}
            </div>
            <div className="text-[14px] font-body bg-white dark:bg-variant1-dark text-Heading dark:text-primary-light p-2 capitalize">
              {contact.email}
            </div>
            <div className="text-[14px] font-body bg-white dark:bg-variant1-dark text-Heading dark:text-primary-light p-2">
              {contact.message}
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => handleView(contact)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:block">
        <table className="w-full mx-auto text-left text-Heading">
          <thead className="text-[18px] font-body bg-secondary text-black">
            <tr className="border-[6px] border-dark-mode bg-dark-mode">
              <th className="p-[10px]">Name</th>
              <th className="p-[10px]">Email</th>
              <th className="p-[10px]">Message</th>
              <th className="p-[10px]">Actions</th>
            </tr>
          </thead>
          <tbody className="text-[16px] font-normal text-Heading">
            {contacts.map((contact) => (
              <tr key={contact.id} className="border-[6px]">
                <td className="p-[10px] capitalize">{contact.name}</td>
                <td className="p-[10px] capitalize">{contact.email}</td>
                <td className="p-[10px]">{contact.message}</td>
                <td className="p-[10px]">
                  <button
                    onClick={() => handleView(contact)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    View
                  </button>
                  {!contact.replied ? (
                    <div className="flex">
                      <textarea
                        className="border rounded-l px-2 py-1"
                        value={replyMessage}
                        onChange={handleReplyChange}
                        placeholder="Reply message"
                      ></textarea>
                      <button
                        onClick={() => handleReply(contact.id)}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r"
                      >
                        Reply
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleDelete(contact.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {viewContact && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-bold mb-4">Contact Details</h2>
            <p>
              <strong>Name:</strong> {viewContact.name}
            </p>
            <p>
              <strong>Email:</strong> {viewContact.email}
            </p>
            <p>
              <strong>Message:</strong> {viewContact.message}
            </p>
            <p>
              <strong>Replied:</strong> {viewContact.replied ? "Yes" : "No"}
            </p>
            <div className="mt-4 flex justify-end">
              {!viewContact.replied ? (
                <div className="flex">
                  <textarea
                    className="border rounded-l px-2 py-1"
                    value={replyMessage}
                    onChange={handleReplyChange}
                    placeholder="Reply message"
                  ></textarea>
                  <button
                    onClick={() => handleReply(viewContact.id)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r"
                  >
                    Reply
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleCloseModal}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                  Exit
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;
