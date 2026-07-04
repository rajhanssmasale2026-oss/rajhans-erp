function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white shadow-lg">
      <div className="flex justify-between items-center px-8 py-5">

        <div>
          <h1 className="text-3xl font-bold">
            🚀 Rajhans ERP
          </h1>

          <p className="text-blue-100">
            Rajhans Masale Business Management System
          </p>
        </div>

        <div className="text-right">
          <p className="font-semibold">
            Welcome, Hemant 👋
          </p>

          <p className="text-sm text-blue-100">
            ERP Version 1.0
          </p>
        </div>

      </div>
    </header>
  );
}

export default Header;