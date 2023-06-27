import Components2 from "./Components2.jsx";
import { useSelector } from "react-redux";

export default function Components1(props) {
  const number = useSelector((state) => state.number);

  return (
    <div>
      <h2>value : {number}</h2>
      <Components2 />
    </div>
  );
}
