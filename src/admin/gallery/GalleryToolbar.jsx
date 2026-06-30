import { FaPlus, FaSearch } from "react-icons/fa";

const GalleryToolbar = ({ search, setSearch, onAdd }) => {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

      <div className="relative w-full sm:w-80">

        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search images..."
          className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none focus:border-[#16324F]"
        />

      </div>

      <button
        onClick={onAdd}
        className="flex items-center justify-center gap-3 rounded-xl bg-[#16324F] px-6 py-3 text-white transition hover:bg-[#1d4368]"
      >
        <FaPlus />

        Add Image

      </button>

    </div>
  );
};

export default GalleryToolbar;