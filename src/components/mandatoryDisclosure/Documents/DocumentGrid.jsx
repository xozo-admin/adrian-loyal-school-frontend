import { useEffect, useState } from "react";
import axios from "axios";

import DocumentCard from "./DocumentCard";

const API = "https://arun9361499299.pythonanywhere.com/api/mandatory-documents";
const fileBaseUrl = "https://arun9361499299.pythonanywhere.com/uploads/";

const DocumentGrid = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const loadDocuments = async () => {
      try {
        const response = await axios.get(API);
        setDocuments(
          response.data.map((document) => ({
            ...document,
            file: `${fileBaseUrl}${document.file}`,
          })),
        );
      } catch (error) {
        console.error("Failed to load mandatory documents:", error);
      }
    };

    loadDocuments();
  }, []);

  return (
    <section className="bg-white pb-20 md:pb-28">
      <div className="mx-auto w-[90%] max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {documents.length > 0 ? (
            documents.map((document) => (
              <DocumentCard key={document.id} document={document} />
            ))
          ) : (
            <div className="border-[3px] border-dashed border-[#17375D] px-6 py-12 text-center text-lg text-slate-500 md:col-span-2 xl:col-span-4">
              No documents uploaded yet.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DocumentGrid;
