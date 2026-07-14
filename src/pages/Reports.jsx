import { useState } from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import ReportMenu from "../components/ReportMenu";
import ReportSummary from "../components/ReportSummary";
import ReportFilter from "../components/ReportFilter";

import SalesReport from "../components/SalesReport";
import PurchaseReport from "../components/PurchaseReport";
import ExpenseReport from "../components/ExpenseReport";
import ProfitLossReport from "../components/ProfitLossReport";

function Reports() {

  const [activeReport, setActiveReport] =
    useState("sales");

  return (

    <div className="bg-gray-100 min-h-screen">

      <Header />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 p-8">

          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">

            <h1 className="text-4xl font-bold">
              📊 Reports
            </h1>

            <p className="text-gray-500 mt-2">
              Rajhans ERP Business Reports
            </p>

          </div>

          <ReportMenu
            activeReport={activeReport}
            setActiveReport={setActiveReport}
          />

          <ReportFilter />

          <ReportSummary />

          {activeReport === "sales" && (
            <SalesReport />
          )}

          {activeReport === "purchase" && (
            <PurchaseReport />
          )}

          {activeReport === "expense" && (
            <ExpenseReport />
          )}

          {activeReport === "profit" && (
            <ProfitLossReport />
          )}

        </main>

      </div>

    </div>

  );

}

export default Reports;