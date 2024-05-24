import React, { useState, useEffect } from 'react';

const Messages = () => {
  const [contacts, setContacts] = useState([]);
  const [viewContact, setViewContact] = useState(null);
  const [replyMessage, setReplyMessage] = useState('');

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('http://your-flask-api-url.com/contacts');
        if (response.ok) {
          const data = await response.json();
          setContacts(data.contacts);
        } else {
          console.error('Failed to fetch contacts:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };
    fetchContacts();
  }, []);

  const handleView = (contact) => {
    setViewContact(contact);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://your-flask-api-url.com/contacts/${id}`, {
        method: 'DELETE',
      });
      const updatedContacts = contacts.filter((contact) => contact.id !== id);
      setContacts(updatedContacts);
      setViewContact(null);
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  const handleReplyChange = (event) => {
    setReplyMessage(event.target.value);
  };

  const handleReply = async (id) => {
    try {
      await fetch(`http://your-flask-api-url.com/contacts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: replyMessage, replied: true }),
      });

      const updatedContacts = contacts.map((contact) =>
        contact.id === id ? { ...contact, replied: true } : contact
      );
      setContacts(updatedContacts);
      setReplyMessage('');
      setViewContact(null);
    } catch (error) {
      console.error('Error replying to contact:', error);
    }
  };

  const handleCloseModal = () => {
    setViewContact(null);
  };

  return (
    <div className="container mx-auto px-4 py-8 text-black bg-light-mode min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Contact Messages</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td className="px-6 py-4 whitespace-nowrap text-left">
                  {contact.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-left">
                  {contact.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button
                    onClick={() => handleView(contact)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    View
                  </button>
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
              <button
                onClick={() => handleDelete(viewContact.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Delete
              </button>
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
