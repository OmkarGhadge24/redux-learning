import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../slice/simpleSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="bg-gray-700 px-6 py-4 flex flex-col gap-4 items-center rounded-xl">
        <h3 className="text-5xl font-bold">{count}</h3>

        <div className="flex gap-4">
          <button
            onClick={() => dispatch(increment())}
            className="px-4 py-2 bg-green-300 hover:bg-green-400 text-black rounded"
          >
            Increment
          </button>

          <button
            onClick={() => dispatch(decrement())}
            className="px-4 py-2 bg-red-300 hover:bg-red-400 text-black rounded"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
