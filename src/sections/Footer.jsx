import { useEffect, useState } from "react";

const formatChennaiTime = (date) => new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
}).format(date);

const Footer = () => {
  const [now, setNow] = useState(() => new Date());
  const currentYear = new Intl.DateTimeFormat("en", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
  }).format(now);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        <p className="footer-name">©{currentYear}<br />Praveen Raj Sankar</p>

        <p className="footer-location"><i aria-hidden="true" /> Chennai, IN</p>
        <time className="footer-time" dateTime={now.toISOString()}>{formatChennaiTime(now)} IST</time>
      </div>
    </footer>
  );
};

export default Footer;
