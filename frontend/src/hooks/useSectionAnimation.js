import { useEffect, useState } from "react";

const useSectionAnimation = (activeSection, index) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (activeSection === index) {
      setHasAnimated(true);
    }
  }, [activeSection, index]);

  return hasAnimated;
};

export default useSectionAnimation;