const pool = require("../db");

// Get Business Information
exports.getBusinessInfo = async () => {

  const result = await pool.query(
    `
    SELECT *
    FROM business_settings
    ORDER BY id DESC
    LIMIT 1
    `
  );

  return result.rows[0];

};

// Save / Update Business Information
exports.saveBusinessInfo = async (data) => {

  const check = await pool.query(
    `
    SELECT id
    FROM business_settings
    LIMIT 1
    `
  );

  if (check.rows.length === 0) {

    const result = await pool.query(
      `
      INSERT INTO business_settings
      (
        owner_name,
        business_name,
        mobile,
        email,
        address,
        gst,
        fssai
      )
      VALUES
      ($1,$2,$3,$4,$5,$6,$7)
      RETURNING *
      `,
      [
        data.owner_name,
        data.business_name,
        data.mobile,
        data.email,
        data.address,
        data.gst,
        data.fssai,
      ]
    );

    return result.rows[0];

  }

  const result = await pool.query(
    `
    UPDATE business_settings
    SET
      owner_name=$1,
      business_name=$2,
      mobile=$3,
      email=$4,
      address=$5,
      gst=$6,
      fssai=$7
    WHERE id=(SELECT id FROM business_settings LIMIT 1)
    RETURNING *
    `,
    [
      data.owner_name,
      data.business_name,
      data.mobile,
      data.email,
      data.address,
      data.gst,
      data.fssai,
    ]
  );

  return result.rows[0];

};