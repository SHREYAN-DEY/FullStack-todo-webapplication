import { FaCalendarAlt } from "react-icons/fa";
import SearchBar from "./SearchBar";

function Navbar() {
  const today = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <nav className="w-full border border-black p-4">
      <div className="flex items-center justify-between gap-6">

        {/* Logo */}
        <div className="w-40 rounded-md border border-black bg-gray-200 py-2 text-center font-bold">
          LOGO
        </div>

        {/* Search */}
        <div className="flex-1">
          <SearchBar />
        </div>

        {/* Date */}
        <div className="flex items-center gap-3">
          <button className="rounded-md border border-black bg-gray-200 p-2">
            <FaCalendarAlt />
          </button>

          <div className="rounded-md border border-black bg-gray-200 px-5 py-2 font-semibold">
            {today}
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;