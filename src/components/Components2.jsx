import Components3 from "./Components3.jsx";
import { useSelector } from "react-redux";

export default function Components2() {
  const number = useSelector((state) => state.number);

  return (
    <div>
      <h2>value : {number}</h2>
      <Components3 />
    </div>
  );
}
