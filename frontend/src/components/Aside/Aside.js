//CSS
import "./Aside.css";

//Icon
import { FaMinus } from "react-icons/fa";

const Aside = () => {
  return (
    <aside>
      <h1>Ariel Lopes</h1>
      <ul>
        <li><FaMinus /></li>
        <li><FaMinus /></li>
        <li><FaMinus /></li>
        <li><FaMinus /></li>
      </ul>
      <p>SCROLLDOWN <span>-</span></p>
    </aside>
  );
};

export default Aside;
