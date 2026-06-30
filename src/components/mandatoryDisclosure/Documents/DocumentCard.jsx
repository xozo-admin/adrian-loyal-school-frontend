import { FaEye } from "react-icons/fa";

const DocumentCard = ({ document }) => {
  return (
    <article className="flex min-h-[210px] flex-col justify-between border-[3px] border-[#17375D] bg-white px-5 py-10 text-center">
      <h3 className="text-2xl font-medium leading-snug text-[#17375D]">
        {document.title}
      </h3>

      <div className="mt-10">
        <a
          href={document.file}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-w-[140px] items-center justify-center gap-2 rounded-sm border border-[#17375D] bg-white px-8 py-3 text-lg font-medium text-[#17375D] transition hover:bg-[#17375D] hover:text-white"
        >
          <FaEye className="text-base" />
          View
        </a>
      </div>
    </article>
  );
};

export default DocumentCard;
