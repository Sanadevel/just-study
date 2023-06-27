import { useSelector } from "react-redux";

export default function Components3() {
  const number = useSelector((state) => state.number);
  return (
    <div>
      <h2>value : {number}</h2>
    </div>
  );
}
