import { useState } from "react";

function BusinessSettings() {

  const [business, setBusiness] = useState({
    businessName: "",
    ownerName: "",
    mobile: "",
    email: "",
    address: "",
    gst: "",
    fssai: "",
  });

  const handleChange = (e) => {

    setBusiness({
      ...business,
      [e.target.name]: e.target.value,
    });

  };

  const handleSave = () => {

    alert(
      "Business Settings Saved Successfully"
    );

  };

  return (

    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">

      <h2 className="text-2xl font-bold mb-6">
        🏢 Business Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <input
          type="text"
          name="businessName"
          placeholder="Business Name"
          value={business.businessName}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="text"
          name="ownerName"
          placeholder="Owner Name"
          value={business.ownerName}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={business.mobile}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={business.email}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <textarea
          name="address"
          placeholder="Business Address"
          value={business.address}
          onChange={handleChange}
          className="border rounded-lg p-3 md:col-span-2"
          rows="3"
        />

        <input
          type="text"
          name="gst"
          placeholder="GST Number (Optional)"
          value={business.gst}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="text"
          name="fssai"
          placeholder="FSSAI Number"
          value={business.fssai}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

      </div>

      <button
        onClick={handleSave}
        className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
      >
        Save Business Information
      </button>

    </div>

  );

}

export default BusinessSettings;