import { useState } from "react";

function UserAccountSettings() {

  const [account, setAccount] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {

    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });

  };

  const handleSave = () => {

    alert("User Account Settings Saved");

  };

  return (

    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">

      <h2 className="text-2xl font-bold mb-6">
        👤 User Account
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={account.username}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="password"
          name="password"
          placeholder="Change Password"
          value={account.password}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

      </div>

      <button
        onClick={handleSave}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
      >
        Save User Account
      </button>

    </div>

  );

}

export default UserAccountSettings;