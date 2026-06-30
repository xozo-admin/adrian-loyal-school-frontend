import { useEffect, useState } from "react";
import { FaEdit, FaPlus, FaSearch, FaTimes, FaTrash } from "react-icons/fa";

import AdminLayout from "../../layouts/AdminLayout";
import DeleteModal from "../../gallery/DeleteModal";
import {
  createHomeAchievement,
  createHomeUpdate,
  deleteHomeAchievement,
  deleteHomeUpdate,
  getHomeAchievements,
  getHomeUpdates,
  updateHomeAchievement,
  updateHomeUpdate,
} from "../../api/homeContentApi";

const fileBaseUrl = "https://arun9361499299.pythonanywhere.com/uploads/";

const SectionModal = ({
  open,
  onClose,
  onSubmit,
  initialData,
  title,
  fields,
  requireImage = true,
}) => {
  const [formValues, setFormValues] = useState({});
  const [file, setFile] = useState(null);

  useEffect(() => {
    const nextValues = {};
    fields.forEach((field) => {
      nextValues[field.name] = initialData?.[field.name] || "";
    });
    setFormValues(nextValues);
    setFile(null);
  }, [fields, initialData]);

  if (!open) return null;

  const handleChange = (name, value) => {
    setFormValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    fields.forEach((field) => {
      formData.append(field.name, formValues[field.name] || "");
    });

    if (file) {
      formData.append("image", file);
    }

    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b p-6">
          <h2 className="text-2xl font-bold text-[#16324F]">
            {initialData ? `Edit ${title}` : `Add ${title}`}
          </h2>

          <button onClick={onClose}>
            <FaTimes size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 p-6">
          {fields.map((field) =>
            field.type === "textarea" ? (
              <textarea
                key={field.name}
                value={formValues[field.name] || ""}
                onChange={(event) => handleChange(field.name, event.target.value)}
                placeholder={field.label}
                rows={5}
                className="w-full rounded-xl border p-3 outline-none focus:border-[#16324F]"
              />
            ) : (
              <input
                key={field.name}
                type="text"
                value={formValues[field.name] || ""}
                onChange={(event) => handleChange(field.name, event.target.value)}
                placeholder={field.label}
                className="w-full rounded-xl border p-3 outline-none focus:border-[#16324F]"
                required={field.required}
              />
            ),
          )}

          <input
            type="file"
            accept="image/*"
            onChange={(event) => setFile(event.target.files[0] || null)}
            className="w-full rounded-xl border p-3"
            required={requireImage && !initialData}
          />

          <p className="text-sm text-slate-500">
            Supported formats: JPG, JPEG, PNG, WEBP
          </p>

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

const ManagementSection = ({
  heading,
  description,
  items,
  search,
  setSearch,
  onAdd,
  onEdit,
  onDelete,
  columns,
  renderCells,
}) => (
  <section className="rounded-2xl bg-white p-6 shadow-lg">
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h2 className="text-2xl font-bold text-[#16324F]">{heading}</h2>
        <p className="mt-1 text-gray-600">{description}</p>
      </div>

      <button
        onClick={onAdd}
        className="flex items-center justify-center gap-3 rounded-xl bg-[#16324F] px-6 py-3 text-white"
      >
        <FaPlus />
        Add {heading}
      </button>
    </div>

    <div className="relative mb-6 w-full md:w-96">
      <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder={`Search ${heading.toLowerCase()}...`}
        className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none focus:border-[#16324F]"
      />
    </div>

    <div className="overflow-hidden rounded-2xl border border-slate-200">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-[#16324F] text-white">
            <tr>
              {columns.map((column) => (
                <th key={column.key} className={`px-6 py-4 ${column.align || "text-left"}`}>
                  {column.label}
                </th>
              ))}
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {items.length > 0 ? (
              items.map((item) => (
                <tr key={item.id} className="border-t border-slate-200">
                  {renderCells(item)}
                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => onEdit(item)}
                        className="flex items-center gap-2 rounded-lg border px-4 py-2 text-[#16324F]"
                      >
                        <FaEdit />
                        Edit
                      </button>
                      <button
                        onClick={() => onDelete(item)}
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
                <td colSpan={columns.length + 1} className="py-10 text-center text-gray-500">
                  No items found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

const HomeManagement = () => {
  const [updates, setUpdates] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [updateSearch, setUpdateSearch] = useState("");
  const [achievementSearch, setAchievementSearch] = useState("");
  const [modalType, setModalType] = useState(null);
  const [editingItem, setEditingItem] = useState(null);
  const [deleteState, setDeleteState] = useState({ open: false, type: null, item: null });

  const getErrorMessage = (error, fallback) =>
    error?.response?.data?.message || error?.message || fallback;

  const loadContent = async () => {
    try {
      const [updatesResponse, achievementsResponse] = await Promise.all([
        getHomeUpdates(),
        getHomeAchievements(),
      ]);

      setUpdates(updatesResponse.data);
      setAchievements(achievementsResponse.data);
    } catch (error) {
      console.error(error);
      setMessage({
        type: "error",
        text: getErrorMessage(error, "Failed to load home content."),
      });
    }
  };

  useEffect(() => {
    loadContent();
  }, []);

  const closeModal = () => {
    setModalType(null);
    setEditingItem(null);
  };

  const handleUpdateSubmit = async (formData) => {
    try {
      if (editingItem) {
        await updateHomeUpdate(editingItem.id, formData);
        setMessage({ type: "success", text: "Latest update updated successfully." });
      } else {
        await createHomeUpdate(formData);
        setMessage({ type: "success", text: "Latest update uploaded successfully." });
      }

      closeModal();
      loadContent();
    } catch (error) {
      console.error(error);
      setMessage({
        type: "error",
        text: getErrorMessage(
          error,
          "Failed to upload latest update. Please check the image and try again.",
        ),
      });
    }
  };

  const handleAchievementSubmit = async (formData) => {
    try {
      if (editingItem) {
        await updateHomeAchievement(editingItem.id, formData);
        setMessage({ type: "success", text: "Achievement updated successfully." });
      } else {
        await createHomeAchievement(formData);
        setMessage({ type: "success", text: "Achievement uploaded successfully." });
      }

      closeModal();
      loadContent();
    } catch (error) {
      console.error(error);
      setMessage({
        type: "error",
        text: getErrorMessage(
          error,
          "Failed to upload achievement. Please check the image and try again.",
        ),
      });
    }
  };

  const handleDelete = async () => {
    try {
      if (deleteState.type === "updates") {
        await deleteHomeUpdate(deleteState.item.id);
        setMessage({ type: "success", text: "Latest update deleted successfully." });
      } else if (deleteState.type === "achievements") {
        await deleteHomeAchievement(deleteState.item.id);
        setMessage({ type: "success", text: "Achievement deleted successfully." });
      }

      setDeleteState({ open: false, type: null, item: null });
      loadContent();
    } catch (error) {
      console.error(error);
      setMessage({
        type: "error",
        text: getErrorMessage(error, "Failed to delete item."),
      });
    }
  };

  const filteredUpdates = updates.filter((item) =>
    item.title.toLowerCase().includes(updateSearch.toLowerCase()),
  );

  const filteredAchievements = achievements.filter((item) =>
    `${item.title || ""} ${item.description || ""}`
      .toLowerCase()
      .includes(achievementSearch.toLowerCase()),
  );

  return (
    <AdminLayout>
      <h1 className="mb-6 text-3xl font-bold text-[#16324F]">Home Content Management</h1>

      {message.text ? (
        <div
          className={`mb-6 rounded-2xl border px-5 py-4 text-sm md:text-base ${
            message.type === "error"
              ? "border-red-200 bg-red-50 text-red-700"
              : "border-emerald-200 bg-emerald-50 text-emerald-700"
          }`}
        >
          {message.text}
        </div>
      ) : null}

      <div className="space-y-8">
        <ManagementSection
          heading="Latest Updates"
          description="Upload and manage the cards shown in the Latest Updates section on the home page."
          items={filteredUpdates}
          search={updateSearch}
          setSearch={setUpdateSearch}
          onAdd={() => {
            setEditingItem(null);
            setModalType("updates");
          }}
          onEdit={(item) => {
            setEditingItem(item);
            setModalType("updates");
          }}
          onDelete={(item) => setDeleteState({ open: true, type: "updates", item })}
          columns={[
            { key: "title", label: "Title" },
            { key: "image", label: "Image" },
          ]}
          renderCells={(item) => (
            <>
              <td className="px-6 py-4 font-medium text-[#16324F]">{item.title}</td>
              <td className="px-6 py-4">
                <img
                  src={`${fileBaseUrl}${item.image}`}
                  alt={item.title}
                  className="h-16 w-24 rounded-lg object-cover"
                />
              </td>
            </>
          )}
        />

        <ManagementSection
          heading="Achievements & Accolades"
          description="Upload and manage the achievements gallery shown on the home page without changing its current UI."
          items={filteredAchievements}
          search={achievementSearch}
          setSearch={setAchievementSearch}
          onAdd={() => {
            setEditingItem(null);
            setModalType("achievements");
          }}
          onEdit={(item) => {
            setEditingItem(item);
            setModalType("achievements");
          }}
          onDelete={(item) => setDeleteState({ open: true, type: "achievements", item })}
          columns={[
            { key: "title", label: "Title / Note" },
            { key: "image", label: "Image" },
          ]}
          renderCells={(item) => (
            <>
              <td className="px-6 py-4 text-[#16324F]">
                <div className="font-medium">{item.title || "—"}</div>
                {item.description ? (
                  <p className="mt-1 max-w-xl text-sm text-slate-500">{item.description}</p>
                ) : null}
              </td>
              <td className="px-6 py-4">
                <img
                  src={`${fileBaseUrl}${item.image}`}
                  alt={item.title || "Achievement"}
                  className="h-16 w-24 rounded-lg object-cover"
                />
              </td>
            </>
          )}
        />
      </div>

      <SectionModal
        open={modalType === "updates"}
        onClose={closeModal}
        onSubmit={handleUpdateSubmit}
        initialData={editingItem}
        title="Latest Update"
        fields={[{ name: "title", label: "Update Title", required: true }]}
      />

      <SectionModal
        open={modalType === "achievements"}
        onClose={closeModal}
        onSubmit={handleAchievementSubmit}
        initialData={editingItem}
        title="Achievement"
        fields={[
          {
            name: "title",
            label: "Achievement Title (Optional)",
            required: false,
          },
          {
            name: "description",
            label: "Achievement Description (Optional)",
            required: false,
            type: "textarea",
          },
        ]}
      />

      <DeleteModal
        open={deleteState.open}
        onClose={() => setDeleteState({ open: false, type: null, item: null })}
        onConfirm={handleDelete}
        title={deleteState.item?.title || "this item"}
      />
    </AdminLayout>
  );
};

export default HomeManagement;
