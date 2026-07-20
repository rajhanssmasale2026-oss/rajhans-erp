import jsPDF from "jspdf";

import { drawHeader } from "./invoiceHeader";
import { drawTable } from "./invoiceTable";
import { drawFooter } from "./invoiceFooter";

export function generateInvoicePDF(sale) {

  const doc = new jsPDF("p", "mm", "a4");

  // =========================
  // Header
  // =========================

  drawHeader(doc);

  // =========================
  // Invoice Details
  // =========================

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);

  doc.text(
    "Invoice No :",
    14,
    90
  );

  doc.setFont("helvetica", "normal");

  doc.text(
    sale.invoice,
    42,
    90
  );



  doc.setFont("helvetica", "bold");

  doc.text(
    "Date :",
    140,
    90
  );

  doc.setFont("helvetica", "normal");

  doc.text(
    sale.date,
    154,
    90
  );



  doc.setFont("helvetica", "bold");

  doc.text(
    "Customer :",
    14,
    98
  );

  doc.setFont("helvetica", "normal");

  doc.text(
    sale.customer,
    40,
    98
  );



  doc.setFont("helvetica", "bold");

  doc.text(
    "Mobile :",
    14,
    106
  );

  doc.setFont("helvetica", "normal");

  doc.text(
    sale.mobile || "",
    35,
    106
  );



  // =========================
  // Product Table
  // =========================

  console.log(
  "PDF SALE JSON =",
  JSON.stringify(sale, null, 2)
);
  drawTable(doc, sale);



  // =========================
  // Footer
  // =========================

  drawFooter(doc);



  // =========================
  // Save PDF
  // =========================

  doc.save(`${sale.invoice}.pdf`);

}