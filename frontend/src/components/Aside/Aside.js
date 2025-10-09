//CSS
import "./Aside.css";

//Icon
import { FaMinus } from "react-icons/fa";

const Aside = () => {
  return (
    <aside>
      <h1>Ariel Lopes</h1>
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
    </aside>
  );
};

export default Aside;
