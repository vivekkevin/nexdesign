import React, { useState } from "react";
import "./Portfolio.css";
import img1 from "../assets/55930.png";
import img2 from "../assets/work.png";
import nexg11 from "../assets/nex_G1-1.png";
import nexg12 from "../assets/nex_G1-2.png";
import nexg13 from "../assets/nex_G1-3.png";
import nexg14 from "../assets/nex_G1-4.png";
import nexg15 from "../assets/nex_G1-5.png";
import nexg16 from "../assets/nex_G1-6.png";
import nexg17 from "../assets/nex_G1-7.png";
import nexg18 from "../assets/nex_G1-8.png";
import nexg19 from "../assets/nex_G1-9.png";
import nexg110 from "../assets/nex_G1-10.png";
import nexg111 from "../assets/nex_G1-11.png";
import nexg112 from "../assets/nex_G1-12.png";
import nexg21 from "../assets/nex_G2-1.png";
import nexg22 from "../assets/nex_G2-2.png";
import nexg23 from "../assets/nex_G2-3.png";
import nexg24 from "../assets/nex_G2-4.png";
import nexg25 from "../assets/nex_G2-5.png";
import nexg26 from "../assets/nex_G2-6.png";
import nexg27 from "../assets/nex_G2-7.png";
import nexg28 from "../assets/nex_G2-8.png";
import nexg29 from "../assets/nex_G2-9.png";
import nexg210 from "../assets/nex_G2-10.png";
import nexg211 from "../assets/nex_G2-11.png";
import nexg212 from "../assets/nex_G2-12.png";

const Portfolio = () => {
  const [currentCategory, setCurrentCategory] = useState("Nex UI | UX");
  const [currentPage, setCurrentPage] = useState(1); // Additional state to handle page toggling within Nex Graphics

  const categories = {
    "Nex Graphics": {
      pages: [
        [
          { title: "Project 1", img: nexg11, color: "#111" },
          { title: "Project 2", img: nexg12, color: "#111" },
          { title: "Project 3", img: nexg13, color: "#111" },
          { title: "Project 4", img: nexg14, color: "#111" },
          { title: "Project 5", img: nexg15, color: "#111" },
          { title: "Project 6", img: nexg16, color: "#111" },
          { title: "Project 7", img: nexg17, color: "#111" },
          { title: "Project 8", img: nexg18, color: "#111" },
          { title: "Project 9", img: nexg19, color: "#111" },
          { title: "Project 10", img: nexg110, color: "#111" },
          { title: "Project 11", img: nexg111, color: "#111" },
          { title: "Project 12", img: nexg112, color: "#111" },
          // More projects...
        ],
        [
          { title: "Project 1", img: nexg21, color: "#111" },
          { title: "Project 2", img: nexg22, color: "#111" },
          { title: "Project 3", img: nexg23, color: "#111" },
          { title: "Project 4", img: nexg24, color: "#111" },
          { title: "Project 5", img: nexg25, color: "#111" },
          { title: "Project 6", img: nexg26, color: "#111" },
          { title: "Project 7", img: nexg27, color: "#111" },
          { title: "Project 8", img: nexg28, color: "#111" },
          { title: "Project 9", img: nexg29, color: "#111" },
          { title: "Project 10", img: nexg210, color: "#111" },
          { title: "Project 11", img: nexg211, color: "#111" },
          { title: "Project 12", img: nexg212, color: "#111" },
        ]
      ]
    },
    "Nex UI | UX": [
      { title: "UI/UX Project 1", img: img2, color: "#900C3F" },
      // More projects...
    ],
    "Nex Video Design": [
      { title: "Video Design 1", img: img1, color: "#FFC300" },
      // More projects...
    ],
    "Nex 3D Animation": [
      { title: "3D Animation 1", img: img2, color: "#FF5733" },
      // More projects...
    ]
  };

  const renderGrid = (projects) => {
    return (
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-card" style={{ backgroundColor: project.color }}>
            <img src={project.img} alt={project.title} className="portfolio-img" />
          </div>
        ))}
      </div>
    );
  };

  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
    setCurrentPage(1); // Reset to the first page when switching categories
  };

  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <div className="header-content">
          <h1 className="portfolio-heading">
            Check Out <h2><span>Our Work</span></h2>
          </h1>
        </div>
        <div className="portfolio-links">
          {Object.keys(categories).map(key => (
            <span
              key={key}
              className={`link ${currentCategory === key && currentPage === 1 ? 'active' : ''}`}
              onClick={() => handleCategoryClick(key)}
            >
              {key}
            </span>
          ))}
        </div>
      </div>

      {currentCategory === "Nex Graphics" ?
        (currentPage === 1 ? renderGrid(categories[currentCategory].pages[0]) : renderGrid(categories[currentCategory].pages[1]))
        : renderGrid(categories[currentCategory])
      }
      {currentCategory === "Nex Graphics" && (
        <div className="toggle-container">
          <div className={`rect-toggle1 ${currentPage === 1 ? "active" : ""}`} onClick={() => setCurrentPage(1)}></div>
          <div className={`rect-toggle2 ${currentPage === 2 ? "active" : ""}`} onClick={() => setCurrentPage(2)}></div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
