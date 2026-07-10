import React from "react";

function CustomerSearch({ search, setSearch }) {
  return (
    <div className="mb-5">
      <input
        type="text"
        placeholder="Search Customer..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border rounded p-3"
      />
    </div>
  );
}

export default CustomerSearch;