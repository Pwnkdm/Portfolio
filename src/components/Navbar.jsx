import React from "react";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <nav className="fixed-top" id="mainNav">
      <div className="container">
        <div className="left">
          <div style={{ width: "13%", height: "100%" }}>
            <a className="nav-link js-scroll active" href="#home">
              Home
            </a>
          </div>
        </div>
        <div className="flex">
          <div>
            <a className="nav-link js-scroll" href="#about">
              About
            </a>
          </div>

          <div>
            <a className="nav-link js-scroll" href="#skills">
              Skills
            </a>
          </div>

          <div>
            <a className="nav-link js-scroll" href="#projects">
              Projects
            </a>
          </div>

          <div>
            <a className="nav-link js-scroll" href="#contact">
              Contact
            </a>
          </div>
          <div>
            <a
              className="nav-link js-scroll"
              href="#"
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior

                // Open the file in a new tab
                window.open("/Pawan_kadam.pdf", "_blank");

                // Create a temporary link to trigger the download
                const link = document.createElement("a");
                link.href = "/Pawan_kadam.pdf";
                link.download = "Pawan_kadam.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
