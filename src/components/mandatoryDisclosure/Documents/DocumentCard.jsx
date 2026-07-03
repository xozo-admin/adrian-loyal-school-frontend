import { FaEye } from "react-icons/fa";

const DocumentCard = ({ document }) => {
  return (
    <article className="flex min-h-[170px] flex-col items-center justify-between border-2 border-[#17375D] bg-white px-4 py-6 text-center">
      <h3 className="flex-1 flex items-center justify-center text-center text-xl font-medium leading-snug text-[#17375D]">
        {document.title}
      </h3>

      <div className="mt-6">
        <a
          href={document.file}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-w-[110px] items-center justify-center gap-2 rounded-sm border border-[#17375D] bg-white px-5 py-2 text-base font-medium text-[#17375D] transition hover:bg-[#17375D] hover:text-white"
        >
          <FaEye className="text-sm" />
          View
        </a>
      </div>
    </article>
  );
};

export default DocumentCard;
