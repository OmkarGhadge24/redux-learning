import { useState } from "react";
import { setQuery } from "../store/features/searchSlice";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
    setText('')
  };

  return (
    <div >
      <form
        onSubmit={(e)=>{
            handleSubmit(e)
        }}
        className="bg-zinc-900 flex gap-5 py-5 px-20"
      >
        <input
        required
          type="text"
          placeholder="Search here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-6 py-5 text-2xl text-white bg-transparent border-2 border-slate-400 rounded-xl outline-none placeholder:text-slate-300 focus:border-white transition"
        />

        <button
          type="submit"
          className="px-8 py-5 text-xl text-white border-2 border-slate-400 rounded-xl hover:bg-slate-800 transition"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;