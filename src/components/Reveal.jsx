import { useEffect, useRef, useState } from "react";

const Reveal = ({
  as: Tag = "div",
  className = "",
  delay = 0,
  threshold = 0.12,
  rootMargin = "0px 0px -48px 0px",
  triggerOnce = true,
  style,
  ...props
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(
    () => typeof window === "undefined" || typeof window.IntersectionObserver === "undefined"
  );

  useEffect(() => {
    if (!ref.current) return;
    if (typeof window.IntersectionObserver === "undefined") return;

    const observer = new window.IntersectionObserver(
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
      style={{ ...style, "--reveal-delay": `${delay}ms` }}
      {...props}
    />
  );
};

export default Reveal;
