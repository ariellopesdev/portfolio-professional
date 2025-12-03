//CSS
import "./TabsNavigation.css";

//Hook
import useTabsNavigation from "../../hooks/useTabsNavigation";

export default function TabsNavigation({ tabs }) {
  const {
    index,
    anim,
    goTo,
    onTouchStart,
    onTouchEnd,
  } = useTabsNavigation(tabs.length);

  return (
    <div
      className="tabs-wrapper"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* ---------------- HEADER / TABS ---------------- */}
      <div className="tabs-header">
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={`tab-button ${i === index ? "active" : ""}`}
            onClick={() => goTo(i)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* ---------------- CONTENT ---------------- */}
      <div className={`tabs-content ${anim}`}>
        {tabs[index].content}
      </div>
    </div>
  );
}
