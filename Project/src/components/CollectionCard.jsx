import { MdDelete } from "react-icons/md";

const CollectionCard = ({ item, onDelete }) => {
  const removeFromCollection = () => {
    const oldData = JSON.parse(localStorage.getItem("collection")) || [];
    const newData = oldData.filter((col) => col.id !== item.id);
    localStorage.setItem("collection", JSON.stringify(newData));
    onDelete(item.id);
  };

  return (
    <div className="group relative w-full max-w-xs rounded-2xl overflow-hidden shadow-lg cursor-pointer">
      <div className="relative h-60">
        {item.type === "photo" && (
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />
        )}
        {item.type === "video" && (
          <video
            src={item.src}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 w-full p-4 flex items-end justify-between">
          <h2 className="text-white text-sm font-semibold line-clamp-2 pr-2">
            {item.title || "Untitled"}
          </h2>
          <button
            onClick={(e) => {
              e.preventDefault();
              removeFromCollection();
            }}
            className="bg-red-500 text-white p-2 rounded-full shadow-md hover:scale-110 transition hover:bg-red-600"
          >
            <MdDelete size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
