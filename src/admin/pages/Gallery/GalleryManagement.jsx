import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";

import GalleryToolbar from "../../gallery/GalleryToolbar";
import GalleryTable from "../../gallery/GalleryTable";
import GalleryModal from "../../gallery/GalleryModal";
import DeleteModal from "../../gallery/DeleteModal";
import { deleteGallery } from "../../api/galleryApi";


import {
    getGallery,
    uploadGallery,
    updateGallery,
} from "../../api/galleryApi";

const GalleryManagement = () => {
    const [images, setImages] = useState([]);
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);
    const [editingImage, setEditingImage] = useState(null);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleEdit = async (formData) => {
        try {
            await updateGallery(editingImage.id, formData);

            loadGallery();

            setEditingImage(null);
            setOpen(false);

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadGallery();
    }, []);

    const loadGallery = async () => {
        try {
            const response = await getGallery();
            setImages(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleUpload = async (formData) => {
        try {
            await uploadGallery(formData);

            loadGallery();

            setOpen(false);
        } catch (error) {
            console.error(error);
        }
    };

    const filteredImages = images.filter((image) =>
        image.title.toLowerCase().includes(search.toLowerCase())
    );

    const handleDelete = async () => {
        try {

            await deleteGallery(selectedImage.id);

            loadGallery();

            setDeleteOpen(false);

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <AdminLayout>
            <h1 className="mb-6 text-3xl font-bold text-[#16324F]">
                Gallery Management
            </h1>

            <GalleryToolbar
                search={search}
                setSearch={setSearch}
                onAdd={() => setOpen(true)}
            />

            <GalleryTable
                images={filteredImages}
                onEdit={(image) => {
                    setEditingImage(image);
                    setOpen(true);
                }}
                onDelete={(image) => {
                    setSelectedImage(image);
                    setDeleteOpen(true);
                }}
            />

            <DeleteModal
                open={deleteOpen}
                onClose={() => setDeleteOpen(false)}
                onConfirm={handleDelete}
                title={selectedImage?.title}
            />
        </AdminLayout>
    );
};

export default GalleryManagement;