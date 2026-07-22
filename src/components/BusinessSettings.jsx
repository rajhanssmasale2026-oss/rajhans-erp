import { useEffect, useState } from "react";
import {
  getBusinessInfo,
  saveBusinessInfo,
} from "../services/settingsService";

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

  useEffect(() => {
    loadBusinessInfo();
  }, []);

  const loadBusinessInfo = async () => {

    const data = await getBusinessInfo();

    if (data) {

      setBusiness({
        businessName: data.business_name || "",
        ownerName: data.owner_name || "",
        mobile: data.mobile || "",
        email: data.email || "",
        address: data.address || "",
        gst: data.gst || "",
        fssai: data.fssai || "",
      });

    }

  };

  const handleChange = (e) => {

    setBusiness({
      ...business,
      [e.target.name]: e.target.value,
    });

  };

  const handleSave = async () => {

    const result = await saveBusinessInfo({

      business_name: business.businessName,

      owner_name: business.ownerName,

      mobile: business.mobile,

      email: business.email,

      address: business.address,

      gst: business.gst,

      fssai: business.fssai,

    });

    if (result.success) {

      alert("Business Information Saved Successfully");

      loadBusinessInfo();

    } else {

      alert("Save Failed");

    }

  };

  const handleClear = () => {

    setBusiness({

      businessName: "",

      ownerName: "",

      mobile: "",

      email: "",

      address: "",

      gst: "",

      fssai: "",

    });

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

      <div className="mt-6 flex gap-4">

        <button
          onClick={handleSave}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
        >
          💾 Save Business Information
        </button>

        <button
          onClick={handleClear}
          className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg"
        >
          🧹 Clear Form
        </button>

      </div>

    </div>

  );

}

export default BusinessSettings;