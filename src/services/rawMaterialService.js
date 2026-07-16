import API_URL from "./api";

// GET Raw Materials
export async function getRawMaterials() {
  const res = await fetch(`${API_URL}/raw-materials`);
  return await res.json();
}

// ADD Raw Material
export async function addRawMaterial(material) {
  const res = await fetch(`${API_URL}/raw-materials`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(material),
  });

  return await res.json();
}