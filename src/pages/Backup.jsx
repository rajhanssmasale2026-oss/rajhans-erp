import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import BackupExport from "../components/BackupExport";
import BackupImport from "../components/BackupImport";

function Backup() {

  return (

    <div className="bg-gray-100 min-h-screen">

      <Header />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 p-8">

          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">

            <h1 className="text-4xl font-bold">
              💾 Backup & Restore
            </h1>

            <p className="text-gray-500 mt-2">
              Backup and Restore Rajhans ERP Data
            </p>

          </div>

          <BackupExport />

          <BackupImport />

        </main>

      </div>

    </div>

  );

}

export default Backup;