import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const Reveal = ({
  as: Tag = "div",
  className = "",
  threshold = 0.2,
  rootMargin = "0px 0px -10% 0px",
  triggerOnce = true,
  ...props
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) observer.disconnect();
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [rootMargin, threshold, triggerOnce]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
      {...props}
    />
  );
};

export default Reveal;

Reveal.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  threshold: PropTypes.number,
  rootMargin: PropTypes.string,
  triggerOnce: PropTypes.bool,
};
