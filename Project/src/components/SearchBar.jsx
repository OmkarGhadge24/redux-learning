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
    <div className="w-full">
      <form
        onSubmit={(e)=>{
            handleSubmit(e)
        }}
        className="flex w-full flex-col px-20 gap-4 sm:flex-row"
      >
        <input
        required
          type="text"
          placeholder="Search here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-5 py-3 text-lg text-white bg-slate-950/80 border border-slate-700 rounded-xl outline-none placeholder:text-slate-400 focus:border-cyan-400 transition"
        />

        <button
          type="submit"
          className="rounded-xl bg-cyan-500 px-6 py-3 text-lg font-semibold text-slate-950 hover:bg-cyan-400 transition"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;