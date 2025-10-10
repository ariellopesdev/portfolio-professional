//CSS
import "./Aside.css";

//Icon
import { FaMinus } from "react-icons/fa";
import { HiChevronDoubleDown } from "react-icons/hi";

const Aside = () => {
  return (
    <aside>
      <h1>Logo</h1>
      <div id="aside-block">
        <ul>
          <li>
            <FaMinus />
          </li>
          <li>
            <FaMinus />
          </li>
          <li>
            <FaMinus />
          </li>
          <li>
            <FaMinus />
          </li>
        </ul>
      </div>
      <div id="block-scroll">
        <HiChevronDoubleDown id="scroll-icon"/>
      </div>
    </aside>
  );
};

export default Aside;
