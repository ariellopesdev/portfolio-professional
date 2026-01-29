import "./StarsBackground.css";

export default function StarsBackground() {
  return (
    <div
      id="stars-bg"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/textures/others/stars.jpg)`,
      }}
    />
  );
}
