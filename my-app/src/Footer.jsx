import React from "react";

function Footer() {
  const yearNow = new Date().getFullYear();
  const footerText = "Copyright ⓒ " + yearNow;

  return (
    <div>
      <footer>
        <p>{footerText}</p>
      </footer>
    </div>
  );
}

export default Footer;
