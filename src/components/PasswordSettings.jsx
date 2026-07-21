import { useState } from "react";
import { changePassword } from "../services/userService";

function PasswordSettings() {

  const [ownerPassword, setOwnerPassword] =
    useState("");

  const [salesPassword, setSalesPassword] =
    useState("");

  const [
    productionPassword,
    setProductionPassword,
  ] = useState("");

  const savePassword = async (
    username,
    password
  ) => {

    if (!password) {

      alert("Enter New Password");
      return;

    }

    const result =
      await changePassword(
        username,
        password
      );

    if (result.success) {

      alert(
        username +
        " Password Updated Successfully"
      );

    } else {

      alert("Password Update Failed");

    }

  };

  return (

    <div className="bg-white shadow rounded-lg p-6 mt-6">

      <h2 className="text-2xl font-bold mb-6">
        🔐 Password Management
      </h2>

      {/* Owner */}

      <div className="mb-8">

        <h3 className="font-bold mb-2">
          Owner (adminrjm)
        </h3>

        <input
          type="password"
          placeholder="New Password"
          className="border p-2 rounded w-full mb-3"
          value={ownerPassword}
          onChange={(e) =>
            setOwnerPassword(e.target.value)
          }
        />

        <button
          onClick={() =>
            savePassword(
              "adminrjm",
              ownerPassword
            )
          }
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save
        </button>

      </div>

      {/* Sales */}

      <div className="mb-8">

        <h3 className="font-bold mb-2">
          Sales (salesrjm)
        </h3>

        <input
          type="password"
          placeholder="New Password"
          className="border p-2 rounded w-full mb-3"
          value={salesPassword}
          onChange={(e) =>
            setSalesPassword(e.target.value)
          }
        />

        <button
          onClick={() =>
            savePassword(
              "salesrjm",
              salesPassword
            )
          }
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Save
        </button>

      </div>

      {/* Production */}

      <div>

        <h3 className="font-bold mb-2">
          Production (productionrjm)
        </h3>

        <input
          type="password"
          placeholder="New Password"
          className="border p-2 rounded w-full mb-3"
          value={productionPassword}
          onChange={(e) =>
            setProductionPassword(e.target.value)
          }
        />

        <button
          onClick={() =>
            savePassword(
              "productionrjm",
              productionPassword
            )
          }
          className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
        >
          Save
        </button>

      </div>

    </div>

  );

}

export default PasswordSettings;