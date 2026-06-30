import { useEffect, useState } from "react";
import { FaEdit, FaPlus, FaSearch, FaTimes, FaTrash } from "react-icons/fa";

import {
  createMandatoryDocument,
  deleteMandatoryDocument,
  getMandatoryDocuments,
  updateMandatoryDocument,
} from "../../api/mandatoryApi";
import DeleteModal from "../../gallery/DeleteModal";
import AdminLayout from "../../layouts/AdminLayout";

const fileBaseUrl = "https://arun9361499299.pythonanywhere.com/uploads/";

const DocumentModal = ({ open, onClose, onSubmit, initialData }) => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    setTitle(initialData?.title || "");
    setFile(null);
  }, [initialData]);

  if (!open) return null;

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    if (file) {
      formData.append("file", file);
    }

    onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b p-6">
          <h2 className="text-2xl font-bold text-[#16324F]">
            {initialData ? "Edit Document" : "Add Document"}
          </h2>

          <button onClick={onClose}>
            <FaTimes size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 p-6">
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Document Title"
            className="w-full rounded-xl border p-3 outline-none focus:border-[#16324F]"
            required
          />

          <input
            type="file"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            onChange={(event) => setFile(event.target.files[0] || null)}
            className="w-full rounded-xl border p-3"
            required={!initialData}
          />

          <div className="flex justify-end gap-4">
            <button type="button" onClick={onClose} className="rounded-xl border px-5 py-3">
              Cancel
            </button>
            <button type="submit" className="rounded-xl bg-[#16324F] px-6 py-3 text-white">
              {initialData ? "Update" : "Upload"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const MandatoryManagement = () => {
  const [documents, setDocuments] = useState([]);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingDocument, setEditingDocument] = useState(null);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);

  const loadDocuments = async () => {
    try {
      const response = await getMandatoryDocuments();
      setDocuments(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadDocuments();
  }, []);

  const handleSubmit = async (formData) => {
    try {
      if (editingDocument) {
        await updateMandatoryDocument(editingDocument.id, formData);
      } else {
        await createMandatoryDocument(formData);
      }

      setEditingDocument(null);
      loadDocuments();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteMandatoryDocument(selectedDocument.id);
      setDeleteOpen(false);
      setSelectedDocument(null);
      loadDocuments();
    } catch (error) {
      console.error(error);
    }
  };

  const filteredDocuments = documents.filter((document) =>
    document.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <AdminLayout>
      <h1 className="mb-6 text-3xl font-bold text-[#16324F]">Mandatory Disclosure Management</h1>

      <section className="rounded-2xl bg-white p-6 shadow-lg">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#16324F]">Documents</h2>
            <p className="mt-1 text-gray-600">Upload and manage the documents shown on the Mandatory Disclosure page.</p>
          </div>

          <button
            onClick={() => {
              setEditingDocument(null);
              setModalOpen(true);
            }}
            className="flex items-center justify-center gap-3 rounded-xl bg-[#16324F] px-6 py-3 text-white"
          >
            <FaPlus />
            Add Document
          </button>
        </div>

        <div className="relative mb-6 w-full md:w-96">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search documents..."
            className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none focus:border-[#16324F]"
          />
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-[#16324F] text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Title</th>
                  <th className="px-6 py-4 text-left">File</th>
                  <th className="px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredDocuments.length > 0 ? (
                  filteredDocuments.map((document) => (
                    <tr key={document.id} className="border-t border-slate-200">
                      <td className="px-6 py-4 font-medium text-[#16324F]">{document.title}</td>
                      <td className="px-6 py-4 text-slate-600">
                        <a
                          href={`${fileBaseUrl}${document.file}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#17375D] hover:underline"
                        >
                          View file
                        </a>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-center gap-3">
                          <button
                            onClick={() => {
                              setEditingDocument(document);
                              setModalOpen(true);
                            }}
                            className="flex items-center gap-2 rounded-lg border px-4 py-2 text-[#16324F]"
                          >
                            <FaEdit />
                            Edit
                          </button>
                          <button
                            onClick={() => {
                              setSelectedDocument(document);
                              setDeleteOpen(true);
                            }}
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
                    <td colSpan="3" className="py-10 text-center text-gray-500">
                      No documents found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <DocumentModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditingDocument(null);
        }}
        onSubmit={handleSubmit}
        initialData={editingDocument}
      />

      <DeleteModal
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onConfirm={handleDelete}
        title={selectedDocument?.title}
      />
    </AdminLayout>
  );
};

export default MandatoryManagement;
