import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";

const General = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.counter);

  return (
    <>
      <div className="flex justify-center gap-5 items-center mx-auto">
        <button
          onClick={() => dispatch(decrement())}
          className="px-6 py-2 bg-red-500 text-black"
        >
          -
        </button>
        <span className="p-2">{value}</span>
        <button
          onClick={() => dispatch(increment())}
          className="px-6 py-2 bg-green-500 text-white"
        >
          +
        </button>
      </div>
    </>
  );
};

export default General;
