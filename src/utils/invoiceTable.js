import autoTable from "jspdf-autotable";

export function drawTable(doc, sale) {

  const productNames = {

    "हळद पावडर": "Haldi Powder",

    "लाल तिखट": "Lal Mirchi Powder",

    "धणे पावडर": "Dhana Powder",

    "जिरे पावडर": "Jeera Powder",

    "गरम मसाला": "Garam Masala",

    "काळा मसाला": "Kala Masala",

  };


  const rows = sale.products.map((item, index) => [

    index + 1,

    productNames[item.product] || item.product,

    item.quantity,

    "Rs. " + item.price,

    "Rs. " + item.total,

  ]);


  autoTable(doc, {

    startY: 115,

    head: [[

      "Sr",

      "Product",

      "Qty",

      "Rate",

      "Amount",

    ]],

    body: rows,

    theme: "grid",

    headStyles: {

      fillColor: [220, 53, 69],

      textColor: 255,

      fontStyle: "bold",

      halign: "center",

      fontSize: 11,

    },

    bodyStyles: {

      fontSize: 10,

      textColor: 40,

      lineColor: [180, 180, 180],

      lineWidth: 0.2,

    },

    alternateRowStyles: {

      fillColor: [248, 249, 250],

    },

    styles: {

      cellPadding: 3,

      valign: "middle",

    },

    columnStyles: {

      0: {

        halign: "center",

        cellWidth: 15,

      },

      1: {

        cellWidth: 80,

      },

      2: {

        halign: "center",

        cellWidth: 20,

      },

      3: {

        halign: "right",

        cellWidth: 35,

      },

      4: {

        halign: "right",

        cellWidth: 40,

      },

    },

  });


  const y = doc.lastAutoTable.finalY + 10;


  doc.setFillColor(255, 193, 7);

  doc.roundedRect(

    120,

    y,

    75,

    12,

    2,

    2,

    "F"

  );


  doc.setFontSize(13);

  doc.setFont(

    "helvetica",

    "bold"

  );


  doc.text(

    "Grand Total",

    125,

    y + 8

  );


  doc.text(

    "Rs. " + sale.totalAmount,

    190,

    y + 8,

    {

      align: "right",

    }

  );

}