import { useEffect, useState } from "react";
import { FaSearch, FaTrash } from "react-icons/fa";

import AdminLayout from "../../layouts/AdminLayout";
import DeleteModal from "../../gallery/DeleteModal";
import { deleteContactMessage, getContactMessages } from "../../api/contactApi";

const ContactManagement = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });
  const [deleteState, setDeleteState] = useState({ open: false, item: null });

  const loadItems = async () => {
    try {
      const response = await getContactMessages();
      setItems(response.data);
    } catch (error) {
      setMessage({
        type: "error",
        text: error?.response?.data?.message || "Failed to load contact messages.",
      });
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  const handleDelete = async () => {
    try {
      await deleteContactMessage(deleteState.item.id);
      setDeleteState({ open: false, item: null });
      setMessage({ type: "success", text: "Contact message deleted successfully." });
      loadItems();
    } catch (error) {
      setMessage({
        type: "error",
        text: error?.response?.data?.message || "Failed to delete contact message.",
      });
    }
  };

  const filteredItems = items.filter((item) =>
    `${item.fullName} ${item.email} ${item.subject} ${item.message}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
    <AdminLayout>
      <h1 className="mb-6 text-3xl font-bold text-[#16324F]">Contact Messages</h1>

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
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#16324F]">Contact Form Messages</h2>
          <p className="mt-1 text-gray-600">All submitted contact messages are stored here in table format.</p>
        </div>

        <div className="relative mb-6 w-full md:w-96">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search messages..."
            className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none focus:border-[#16324F]"
          />
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-[#16324F] text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Name</th>
                  <th className="px-6 py-4 text-left">Email</th>
                  <th className="px-6 py-4 text-left">Subject</th>
                  <th className="px-6 py-4 text-left">Message</th>
                  <th className="px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <tr key={item.id} className="border-t border-slate-200 align-top">
                      <td className="px-6 py-4 font-medium text-[#16324F]">{item.fullName}</td>
                      <td className="px-6 py-4 text-slate-600">{item.email}</td>
                      <td className="px-6 py-4 text-slate-600">{item.subject}</td>
                      <td className="px-6 py-4 text-slate-600">{item.message}</td>
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
                    <td colSpan="5" className="py-10 text-center text-gray-500">
                      No contact messages found.
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
        title={deleteState.item?.subject || "this contact message"}
      />
    </AdminLayout>
  );
};

export default ContactManagement;
