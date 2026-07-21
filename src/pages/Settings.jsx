import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import BusinessSettings from "../components/BusinessSettings";
import UserAccountSettings from "../components/UserAccountSettings";
import AboutSettings from "../components/AboutSettings";

function Settings() {

  return (

    <div className="bg-gray-100 min-h-screen">

      <Header />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 p-8">

          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">

            <h1 className="text-4xl font-bold">
              ⚙️ Settings
            </h1>

            <p className="text-gray-500 mt-2">
              Rajhans ERP Business Settings
            </p>

          </div>

          <BusinessSettings />

          <UserAccountSettings />

          <AboutSettings />

        </main>

      </div>

    </div>

  );

}

export default Settings;