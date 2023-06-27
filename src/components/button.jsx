import { useDispatch } from "react-redux";

export default function Button({ count, setCount }) {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch({ type: "PLUS" });
      }}>
      +
    </button>
  );
}
