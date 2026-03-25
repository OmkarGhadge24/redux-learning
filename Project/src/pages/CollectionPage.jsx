import { useEffect, useState } from "react"
import CollectionCard from "../components/CollectionCard"

const CollectionPage = () => {
  const [collection, setCollection] = useState([])

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("collection")) || []
      setCollection(Array.isArray(stored) ? stored : [])
    } catch {
      setCollection([])
    }
  }, [])

  const handleDelete = (id) => {
    setCollection(collection.filter((item) => item.id !== id));
  };

  return (
    <div>
      {collection.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/40 p-8 text-center text-slate-400">
          No items saved yet. Go to the homepage and press save.
        </div>
      ) : (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {collection.map((item, i) => (
            <CollectionCard
              key={`${item.id ?? i}-${item.title ?? i}`}
              item={item}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default CollectionPage