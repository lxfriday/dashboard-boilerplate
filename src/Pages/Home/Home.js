import React from "react";
import { increment, decrement } from "../../store/app";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const disdpatch = useDispatch();
  const appState = useSelector((state) => state.app);
  return (
    <div>
      Home num: {appState.value}
      <p>
        <button onClick={() => disdpatch(increment())}>inc+</button>
        <button onClick={() => disdpatch(decrement())}>dec+</button>
      </p>
    </div>
  );
}
