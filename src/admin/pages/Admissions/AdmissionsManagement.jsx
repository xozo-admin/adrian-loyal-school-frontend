import { useEffect, useState } from "react";
import { FaSearch, FaTrash } from "react-icons/fa";

import AdminLayout from "../../layouts/AdminLayout";
import DeleteModal from "../../gallery/DeleteModal";
import { deleteAdmission, getAdmissions } from "../../api/admissionApi";

const AdmissionsManagement = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });
  const [deleteState, setDeleteState] = useState({ open: false, item: null });

  const loadItems = async () => {
    try {
      const response = await getAdmissions();
      setItems(response.data);
    } catch (error) {
      setMessage({
        type: "error",
        text: error?.response?.data?.message || "Failed to load admission enquiries.",
      });
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  const handleDelete = async () => {
    try {
      await deleteAdmission(deleteState.item.id);
      setDeleteState({ open: false, item: null });
      setMessage({ type: "success", text: "Admission enquiry deleted successfully." });
      loadItems();
    } catch (error) {
      setMessage({
        type: "error",
        text: error?.response?.data?.message || "Failed to delete admission enquiry.",
      });
    }
  };

  const filteredItems = items.filter((item) =>
    `${item.childName} ${item.admissionClass} ${item.fatherName} ${item.motherName} ${item.city}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
    <AdminLayout>
      <h1 className="mb-6 text-3xl font-bold text-[#16324F]">Admissions Enquiries</h1>

      {message.text ? (
        <div
          className={`mb-6 rounded-2xl border px-5 py-4 ${
            message.type === "error"
              ? "border-red-200 bg-red-50 text-red-700"
              : "border-emerald-200 bg-emerald-50 text-emerald-700"
          }`}
        >
          {message.text}
        </div>
      ) : null}

      <section className="rounded-2xl bg-white p-6 shadow-lg">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#16324F]">Admission Form Messages</h2>
            <p className="mt-1 text-gray-600">All submitted admission enquiries are stored here in table format.</p>
          </div>
        </div>

        <div className="relative mb-6 w-full md:w-96">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search admissions..."
            className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none focus:border-[#16324F]"
          />
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-[#16324F] text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Child</th>
                  <th className="px-6 py-4 text-left">Class</th>
                  <th className="px-6 py-4 text-left">Father</th>
                  <th className="px-6 py-4 text-left">Mother</th>
                  <th className="px-6 py-4 text-left">Location</th>
                  <th className="px-6 py-4 text-left">Expectations</th>
                  <th className="px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <tr key={item.id} className="border-t border-slate-200 align-top">
                      <td className="px-6 py-4 text-[#16324F]">
                        <div className="font-medium">{item.childName}</div>
                        <p className="mt-1 text-sm text-slate-500">
                          {item.gender} • Age {item.age} • DOB {item.dateOfBirth}
                        </p>
                        {item.previousSchool ? (
                          <p className="mt-1 text-sm text-slate-500">Prev: {item.previousSchool}</p>
                        ) : null}
                      </td>
                      <td className="px-6 py-4 text-slate-600">{item.admissionClass}</td>
                      <td className="px-6 py-4 text-slate-600">
                        <div>{item.fatherName}</div>
                        <div className="text-sm">{item.fatherPhone}</div>
                        <div className="text-sm">{item.fatherOccupation}</div>
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        <div>{item.motherName}</div>
                        <div className="text-sm">{item.motherPhone}</div>
                        <div className="text-sm">{item.motherOccupation}</div>
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        <div>{item.city}, {item.state}</div>
                        <div className="mt-1 text-sm">{item.address}</div>
                      </td>
                      <td className="px-6 py-4 text-slate-600">{item.expectations || "—"}</td>
                      <td className="px-6 py-4">
                        <div className="flex justify-center">
                          <button
                            onClick={() => setDeleteState({ open: true, item })}
                            className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-white"
                          >
                            <FaTrash />
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="py-10 text-center text-gray-500">
                      No admission enquiries found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <DeleteModal
        open={deleteState.open}
        onClose={() => setDeleteState({ open: false, item: null })}
        onConfirm={handleDelete}
        title={deleteState.item?.childName || "this admission enquiry"}
      />
    </AdminLayout>
  );
};

export default AdmissionsManagement;
