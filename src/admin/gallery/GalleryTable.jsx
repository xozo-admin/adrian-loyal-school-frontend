import GalleryRow from "./GalleryRow";

const GalleryTable = ({ images, onEdit, onDelete }) => {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
      <div className="overflow-x-auto">
        <table className="min-w-full">

          <thead className="bg-[#16324F] text-white">
            <tr>
              <th className="px-6 py-4 text-left">Image</th>
              <th className="px-6 py-4 text-left">Title</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {images.length > 0 ? (
              images.map((image) => (
                <GalleryRow
                  key={image.id}
                  image={image}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="py-10 text-center text-gray-500"
                >
                  No gallery images found.
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default GalleryTable;