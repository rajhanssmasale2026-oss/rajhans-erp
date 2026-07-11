import { jsPDF } from "jspdf";

export function drawHeader(doc) {

  // ===========================
  // TOP ORANGE BAR
  // ===========================

  doc.setFillColor(255,140,0);
  doc.rect(0,0,210,38,"F");



  // ===========================
  // LOGO
  // ===========================

  /*
      Logo नंतर add करायचा.

      public/logo/logo.png

      आपण generateInvoicePDF.js मधून
      image pass करू.
  */



  // ===========================
  // COMPANY NAME
  // ===========================

  doc.setTextColor(255,255,255);

  doc.setFontSize(22);

  doc.setFont("helvetica","bold");

  doc.text(
    "RAJHANS MASALE",
    105,
    16,
    {
      align:"center"
    }
  );


  doc.setFontSize(11);

  doc.text(
    "Premium Quality Spices",
    105,
    26,
    {
      align:"center"
    }
  );



  // ===========================
  // RESET COLOR
  // ===========================

  doc.setTextColor(0,0,0);



  // ===========================
  // SHOP DETAILS
  // ===========================

  doc.setDrawColor(0,128,0);

  doc.setLineWidth(0.5);

  doc.roundedRect(
    10,
    45,
    190,
    28,
    2,
    2
  );



  doc.setFontSize(11);

  doc.setFont("helvetica","bold");

  doc.text(
    "Address :",
    15,
    54
  );

  doc.setFont("helvetica","normal");

  doc.text(
    "____________________________",
    38,
    54
  );



  doc.setFont("helvetica","bold");

  doc.text(
    "For Orders :",
    15,
    62
  );

  doc.setFont("helvetica","normal");

  doc.text(
    "____________________________",
    42,
    62
  );



  doc.setFont("helvetica","bold");

  doc.text(
    "GST No :",
    15,
    70
  );

  doc.setFont("helvetica","normal");

  doc.text(
    "____________________________",
    34,
    70
  );



  // ===========================
  // GREEN LINE
  // ===========================

  doc.setDrawColor(0,150,0);

  doc.setLineWidth(1);

  doc.line(
    10,
    80,
    200,
    80
  );

}