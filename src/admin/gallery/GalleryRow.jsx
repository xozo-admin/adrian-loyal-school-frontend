import { FaEdit, FaTrash } from "react-icons/fa";

const GalleryRow = ({ image, onEdit, onDelete }) => {
  return (
    <tr className="border-b hover:bg-gray-50">

      <td className="px-6 py-4">
        <img
          src={`https://arun9361499299.pythonanywhere.com/uploads/${image.image}`}
          alt={image.title}
          className="h-20 w-28 rounded-lg object-cover"
        />
      </td>

      <td className="px-6 py-4 font-medium">
        {image.title}
      </td>

      <td className="px-6 py-4">
        <div className="flex justify-center gap-3">

          <button
            onClick={() => onDelete(image)}
            className="rounded-lg bg-red-500 p-3 text-white hover:bg-red-600"
          >
            <FaTrash />
          </button>

        </div>
      </td>

    </tr>
  );
};

export default GalleryRow;
