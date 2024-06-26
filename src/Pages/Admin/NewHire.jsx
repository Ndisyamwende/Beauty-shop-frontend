
import { useState, useContext } from "react";
import { ThemeContext } from "../../Components/User/ThemeContext";


export const NewHire = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    department: "Administrative",
    role: "employee",
    password: "",
    image: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((formData) => ({ ...formData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      const response = await fetch("https://beautyshop-backend-1.onrender.com/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data);

      setFormData({
        username: "",
        email: "",
        department: "Administrative",
        role: "employee",
        password: "",
        image: "",
      });

      setError(null); // Clear error message on successful submission
    } catch (error) {
      console.error("There has been a problem with your fetch operation:", error);
      setError(error.message);
    }
  };

  return (
    // <div className="flex justify-center items-center bg-light-mode min-h-screen border border-solid-dark-mode">
    <div className={`min-h-screen p-4 ${darkTheme ? 'bg-dark-mode' : 'bg-light-mode'} flex justify-center items-center`}>
      <div className="max-w-md">
        <div className="flex items-center justify-center mb-5">
          <h1 className="text-xl font-bold text-Heading dark:text-primary-light">Hiring</h1>
        </div>
        <form onSubmit={handleSubmit} className="bg-light-mode shadow-md rounded p-5 w-[350px]">
          <h3 className="text-lg text-center font-bold mb-2 text-Heading dark:text-secondary">Add new hire</h3>
          <div className="flex flex-col space-y-4">
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Employee's Name"
              value={formData.username}
              onChange={handleChange}
              className="bg-light-mode shadow-md py-2 rounded-xl border border-solid border-dark-mode"
              required
            />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-light-mode shadow-md py-2 rounded-xl border border-solid border-dark-mode"
              required
            />
            <select
              id="department"
              className="bg-light-mode shadow-md py-2 rounded-xl border border-solid border-dark-mode"
              value={formData.department}
              onChange={handleChange}
              required
            >
              <option value="Administrative">Administrative</option>
              <option value="Product manager">Product manager</option>
              <option value="Sales">Sales</option>
              <option value="Operations">Logistics</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
            </select>
            <select
              id="role"
              className="bg-light-mode shadow-md py-2 rounded-xl border border-solid border-dark-mode"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="employee">Employee</option>
              <option value="admin">Admin</option>
            </select>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="bg-light-mode shadow-md py-2 rounded-xl border border-solid border-dark-mode"
              required
            />
            <button
              type="submit"
              className="bg-dark-mode text-black p-1 rounded-xl font-bold md:w-auto"
            >
              Add
            </button>
            {error && <div style={{ color: 'red' }}>{error}</div>}
          </div>
        </form>
      </div>
    </div>
  );
};
