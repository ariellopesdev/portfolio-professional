// TabsNavigation.jsx
export default function TabsNavigation({ tabs, current, goTo }) {
  return (
    <div className="tabs-nav">
      {tabs.map((label, i) => (
        <button
          key={i}
          onClick={() => goTo(i)}
          className={`tab-button ${current === i ? "active" : ""}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
