import { useEffect, useState } from "react";
import { FaEdit, FaPlus, FaSearch, FaTrash, FaTimes } from "react-icons/fa";

import AdminLayout from "../../layouts/AdminLayout";
import DeleteModal from "../../gallery/DeleteModal";
import {
  createCampusTourImage,
  createFacultyProfile,
  deleteCampusTourImage,
  deleteFacultyProfile,
  getCampusTourImages,
  getFacultyProfiles,
  updateCampusTourImage,
  updateFacultyProfile,
} from "../../api/aboutApi";

const imageBaseUrl = "https://arun9361499299.pythonanywhere.com/uploads/";

const sectionCardClassName = "rounded-2xl bg-white p-6 shadow-lg";

const FacultyModal = ({ open, onClose, onSubmit, initialData }) => {
  const [form, setForm] = useState({
    name: "",
    role: "",
    qualification: "",
    description: "",
  });
  const [image, setImage] = useState(null);

  useEffect(() => {
    setForm({
      name: initialData?.name || "",
      role: initialData?.role || "",
      qualification: initialData?.qualification || "",
      description: initialData?.description || "",
    });
    setImage(null);
  }, [initialData]);

  if (!open) return null;

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("role", form.role);
    formData.append("qualification", form.qualification);
    formData.append("description", form.description);

    if (image) {
      formData.append("image", image);
    }

    onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b p-6">
          <h2 className="text-2xl font-bold text-[#16324F]">
            {initialData ? "Edit Faculty Profile" : "Add Faculty Profile"}
          </h2>

          <button onClick={onClose}>
            <FaTimes size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-5 p-6 md:grid-cols-2">
          <input
            type="text"
            placeholder="Faculty Name"
            value={form.name}
            onChange={(event) =>
              setForm((current) => ({ ...current, name: event.target.value }))
            }
            className="rounded-xl border p-3 outline-none focus:border-[#16324F]"
            required
          />

          <input
            type="text"
            placeholder="Role / Department"
            value={form.role}
            onChange={(event) =>
              setForm((current) => ({ ...current, role: event.target.value }))
            }
            className="rounded-xl border p-3 outline-none focus:border-[#16324F]"
            required
          />

          <input
            type="text"
            placeholder="Qualification"
            value={form.qualification}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                qualification: event.target.value,
              }))
            }
            className="md:col-span-2 rounded-xl border p-3 outline-none focus:border-[#16324F]"
            required
          />

          <textarea
            rows="4"
            placeholder="Faculty Details"
            value={form.description}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                description: event.target.value,
              }))
            }
            className="md:col-span-2 rounded-xl border p-3 outline-none focus:border-[#16324F]"
            required
          />

          <input
            type="file"
            accept="image/*"
            onChange={(event) => setImage(event.target.files[0] || null)}
            className="md:col-span-2 rounded-xl border p-3"
            required={!initialData}
          />

          <div className="md:col-span-2 flex justify-end gap-4">
            <button type="button" onClick={onClose} className="rounded-xl border px-5 py-3">
              Cancel
            </button>

            <button type="submit" className="rounded-xl bg-[#16324F] px-6 py-3 text-white">
              {initialData ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const CampusImageModal = ({ open, onClose, onSubmit, initialData }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    setTitle(initialData?.title || "");
    setImage(null);
  }, [initialData]);

  if (!open) return null;

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);

    if (image) {
      formData.append("image", image);
    }

    onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b p-6">
          <h2 className="text-2xl font-bold text-[#16324F]">
            {initialData ? "Edit Campus Image" : "Add Campus Image"}
          </h2>

          <button onClick={onClose}>
            <FaTimes size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 p-6">
          <input
            type="text"
            placeholder="Image Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="w-full rounded-xl border p-3 outline-none focus:border-[#16324F]"
            required
          />

          <input
            type="file"
            accept="image/*"
            onChange={(event) => setImage(event.target.files[0] || null)}
            className="w-full rounded-xl border p-3"
            required={!initialData}
          />

          <div className="flex justify-end gap-4">
            <button type="button" onClick={onClose} className="rounded-xl border px-5 py-3">
              Cancel
            </button>

            <button type="submit" className="rounded-xl bg-[#16324F] px-6 py-3 text-white">
              {initialData ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const AboutManagement = () => {
  const [facultyProfiles, setFacultyProfiles] = useState([]);
  const [campusImages, setCampusImages] = useState([]);
  const [facultySearch, setFacultySearch] = useState("");
  const [campusSearch, setCampusSearch] = useState("");
  const [facultyModalOpen, setFacultyModalOpen] = useState(false);
  const [campusModalOpen, setCampusModalOpen] = useState(false);
  const [editingFaculty, setEditingFaculty] = useState(null);
  const [editingCampusImage, setEditingCampusImage] = useState(null);
  const [deleteState, setDeleteState] = useState({
    open: false,
    type: "",
    item: null,
  });

  const loadAboutData = async () => {
    try {
      const [facultyResponse, campusResponse] = await Promise.all([
        getFacultyProfiles(),
        getCampusTourImages(),
      ]);

      setFacultyProfiles(facultyResponse.data);
      setCampusImages(campusResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadAboutData();
  }, []);

  const handleFacultySubmit = async (formData) => {
    try {
      if (editingFaculty) {
        await updateFacultyProfile(editingFaculty.id, formData);
      } else {
        await createFacultyProfile(formData);
      }

      setEditingFaculty(null);
      loadAboutData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCampusSubmit = async (formData) => {
    try {
      if (editingCampusImage) {
        await updateCampusTourImage(editingCampusImage.id, formData);
      } else {
        await createCampusTourImage(formData);
      }

      setEditingCampusImage(null);
      loadAboutData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    if (!deleteState.item) return;

    try {
      if (deleteState.type === "faculty") {
        await deleteFacultyProfile(deleteState.item.id);
      } else {
        await deleteCampusTourImage(deleteState.item.id);
      }

      setDeleteState({ open: false, type: "", item: null });
      loadAboutData();
    } catch (error) {
      console.error(error);
    }
  };

  const filteredFaculty = facultyProfiles.filter((profile) =>
    `${profile.name} ${profile.role} ${profile.qualification}`
      .toLowerCase()
      .includes(facultySearch.toLowerCase()),
  );

  const filteredCampusImages = campusImages.filter((image) =>
    image.title.toLowerCase().includes(campusSearch.toLowerCase()),
  );

  return (
    <AdminLayout>
      <h1 className="mb-6 text-3xl font-bold text-[#16324F]">About Page Management</h1>

      <div className="space-y-8">
        <section className={sectionCardClassName}>
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#16324F]">Faculty Profiles</h2>
              <p className="mt-1 text-gray-600">Add and update faculty cards shown on the public About page.</p>
            </div>

            <button
              onClick={() => {
                setEditingFaculty(null);
                setFacultyModalOpen(true);
              }}
              className="flex items-center justify-center gap-3 rounded-xl bg-[#16324F] px-6 py-3 text-white"
            >
              <FaPlus />
              Add Faculty
            </button>
          </div>

          <div className="relative mb-6 w-full md:w-96">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={facultySearch}
              onChange={(event) => setFacultySearch(event.target.value)}
              placeholder="Search faculty..."
              className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none focus:border-[#16324F]"
            />
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {filteredFaculty.length > 0 ? (
              filteredFaculty.map((profile) => (
                <div key={profile.id} className="rounded-2xl border border-slate-200 p-5">
                  <div className="flex gap-4">
                    <img
                      src={`${imageBaseUrl}${profile.image}`}
                      alt={profile.name}
                      className="h-24 w-24 rounded-2xl object-cover"
                    />

                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl font-bold text-[#16324F]">{profile.name}</h3>
                      <p className="mt-1 font-medium text-[#D4A017]">{profile.role}</p>
                      <p className="mt-1 text-sm text-gray-600">{profile.qualification}</p>
                    </div>
                  </div>

                  <p className="mt-4 line-clamp-4 text-gray-700">{profile.description}</p>

                  <div className="mt-5 flex justify-end gap-3">
                    <button
                      onClick={() => {
                        setEditingFaculty(profile);
                        setFacultyModalOpen(true);
                      }}
                      className="flex items-center gap-2 rounded-lg border px-4 py-2 text-[#16324F]"
                    >
                      <FaEdit />
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        setDeleteState({
                          open: true,
                          type: "faculty",
                          item: profile,
                        })
                      }
                      className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-white"
                    >
                      <FaTrash />
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="rounded-2xl border border-dashed border-slate-300 p-10 text-center text-gray-500 lg:col-span-2">
                No faculty profiles found.
              </p>
            )}
          </div>
        </section>

        <section className={sectionCardClassName}>
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#16324F]">Campus Tour Images</h2>
              <p className="mt-1 text-gray-600">Manage the image slider shown in the About page campus tour section.</p>
            </div>

            <button
              onClick={() => {
                setEditingCampusImage(null);
                setCampusModalOpen(true);
              }}
              className="flex items-center justify-center gap-3 rounded-xl bg-[#16324F] px-6 py-3 text-white"
            >
              <FaPlus />
              Add Image
            </button>
          </div>

          <div className="relative mb-6 w-full md:w-96">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={campusSearch}
              onChange={(event) => setCampusSearch(event.target.value)}
              placeholder="Search campus images..."
              className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none focus:border-[#16324F]"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {filteredCampusImages.length > 0 ? (
              filteredCampusImages.map((image) => (
                <div key={image.id} className="overflow-hidden rounded-2xl border border-slate-200">
                  <img
                    src={`${imageBaseUrl}${image.image}`}
                    alt={image.title}
                    className="h-52 w-full object-cover"
                  />

                  <div className="p-4">
                    <h3 className="font-semibold text-[#16324F]">{image.title}</h3>

                    <div className="mt-4 flex justify-end gap-3">
                      <button
                        onClick={() => {
                          setEditingCampusImage(image);
                          setCampusModalOpen(true);
                        }}
                        className="flex items-center gap-2 rounded-lg border px-4 py-2 text-[#16324F]"
                      >
                        <FaEdit />
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          setDeleteState({
                            open: true,
                            type: "campus",
                            item: image,
                          })
                        }
                        className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-white"
                      >
                        <FaTrash />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="rounded-2xl border border-dashed border-slate-300 p-10 text-center text-gray-500 sm:col-span-2 xl:col-span-4">
                No campus tour images found.
              </p>
            )}
          </div>
        </section>
      </div>

      <FacultyModal
        open={facultyModalOpen}
        onClose={() => {
          setFacultyModalOpen(false);
          setEditingFaculty(null);
        }}
        onSubmit={handleFacultySubmit}
        initialData={editingFaculty}
      />

      <CampusImageModal
        open={campusModalOpen}
        onClose={() => {
          setCampusModalOpen(false);
          setEditingCampusImage(null);
        }}
        onSubmit={handleCampusSubmit}
        initialData={editingCampusImage}
      />

      <DeleteModal
        open={deleteState.open}
        onClose={() => setDeleteState({ open: false, type: "", item: null })}
        onConfirm={handleDelete}
        title={deleteState.item?.name || deleteState.item?.title}
      />
    </AdminLayout>
  );
};

export default AboutManagement;
