import React, { useEffect, useRef, useState } from "react";

const InView = ({children}) => {
  const [inView, setInView] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    if(!componentRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, { rootMargin: "50px"});

    observer.observe(componentRef.current);

    return () => {
      observer.disconnect();
    }
  }, [children]);

  return (
    <div ref={componentRef} className="in-view-wrapper">
      { inView && children }
    </div>
  );
}

export default InView;
