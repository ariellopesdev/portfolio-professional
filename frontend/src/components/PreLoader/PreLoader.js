//CSS
import "./PreLoader.css";

//Hooks
import { useEffect, useState } from "react";

const Preloader = ({ready}) => {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (!ready) return; 

    setFade(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timeout);
  }, [ready]);

  if (!loading) return null;

  return (
    <div className={`preloader ${fade ? "preloader__fadeOut" : ""}`}>
      <div className="preloader__solar--minimal">

        <div className="solar--minimal--sun"></div>

        <div className="solar--minimal--orbit orbit-mercury">
          <div className="minimal__orbit--planet mercury"></div>
        </div>

        <div className="solar--minimal--orbit orbit-venus">
          <div className="minimal__orbit--planet venus"></div>
        </div>

        <div className="solar--minimal--orbit orbit-earth">
          <div className="minimal__orbit--planet earth"></div>
        </div>

      </div>

      <div className="preloader__loading--text">
        loading...
      </div>
    </div>
  );
};

export default Preloader;