import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const AdminLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar open={open} setOpen={setOpen} />

      {/* Main Content */}
      <div className="transition-all duration-300 lg:ml-72">
        <Topbar setOpen={setOpen} />

        <main className="p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;