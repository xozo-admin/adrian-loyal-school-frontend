import { FaBars } from "react-icons/fa";

const Topbar = ({ setOpen }) => {
    return (
        <header className="sticky top-0 z-20 flex items-center px-4 py-3 lg:hidden">
            {/* Left */}

            <div className="flex items-center gap-4">

                <button
                    onClick={() => setOpen(true)}
                    className="rounded-lg p-2 text-[#16324F] hover:bg-white/80 lg:hidden"
                >
                    <FaBars size={20} />
                </button>

            </div>
        </header>
    );
};

export default Topbar;
