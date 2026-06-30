import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const GalleryModal = ({ open,
  onClose,
  onSubmit,
  initialData,
}) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
    } else {
      setTitle("");
    }

    setImage(null);
  }, [initialData]);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", title);
    if (image) {
      formData.append("image", image);
    }

    onSubmit(formData);

    setTitle("");
    setImage(null);

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

      <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b p-6">

          <h2 className="text-2xl font-bold text-[#16324F]">
            {initialData ? "Edit Gallery Image" : "Add Gallery Image"}
          </h2>

          <button onClick={onClose}>
            <FaTimes size={20} />
          </button>

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-6 p-6"
        >

          <div>

            <label className="mb-2 block font-medium">
              Title
            </label>

            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-xl border p-3 outline-none focus:border-[#16324F]"
            />

          </div>

          <div>

            <label className="mb-2 block font-medium">
              Image
            </label>

            <input
              type="file"
              accept="image/*"
              required={!initialData}
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full rounded-xl border p-3"
            />

          </div>

          <div className="flex justify-end gap-4">

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border px-5 py-3"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-[#16324F] px-6 py-3 text-white hover:bg-[#1f466e]"
            >
              {initialData ? "Update" : "Upload"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default GalleryModal;