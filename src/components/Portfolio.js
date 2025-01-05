import React, { useState } from "react";
import "./Portfolio.css";

// Import all images
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
import nexu11 from "../assets/Nexu11.png";
import nexu12 from "../assets/Nexu12.png";
import nexu13 from "../assets/Nexu13.png";
import nexu14 from "../assets/Nexu14.png";
import nexu15 from "../assets/Nexu15.png";
import nexu16 from "../assets/Nexu16.png";
import nexu17 from "../assets/Nexu17.png";
import nexu18 from "../assets/Nexu18.png";
import nexu19 from "../assets/Nexu19.png";
import nexu110 from "../assets/Nexu110.png";
import nexu111 from "../assets/Nexu111.png";
import nexu112 from "../assets/Nexu112.png";

const Portfolio = () => {
  const [currentCategory, setCurrentCategory] = useState("Nex Graphics");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = {
    "Nex Graphics": {
      pages: [
        [nexg11, nexg12, nexg13, nexg14, nexg15, nexg16, nexg17, nexg18, nexg19, nexg110, nexg111, nexg112],
        [nexg21, nexg22, nexg23, nexg24, nexg25, nexg26, nexg27, nexg28, nexg29, nexg210, nexg211, nexg212]
      ]
    },
    "Nex UI | UX": {
      pages: [
        [nexu11, nexu17, nexu13, nexu110, nexg15, nexg16, nexg17, nexg18, nexg19, nexg110, nexu12, nexg112],
        [nexg21, nexg22, nexg23, nexg24, nexg25, nexg26, nexg27, nexg28, nexg29, nexg210, nexg211, nexg212]
      ]
    },
    "Nex Video Design": {
      pages: [
        [img1],
        [img2]
      ]
    },
    "Nex 3D Animation": {
      pages: [
        [img1],
        [img2]
      ]
    }
  };

  const projects = categories[currentCategory].pages[currentPage - 1];

  const renderGrid = () => {
    return (
      <div className="portfolio-grid">
        {projects.map((img, index) => (
          <div key={index} className="portfolio-card">
            <img src={img} alt={`Project ${index + 1}`} className="portfolio-img" />
          </div>
        ))}
      </div>
    );
  };

  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="portfolio-container">
      {/* Header Section */}
      <div className="portfolio-header">
        <div className="header-content">
          <h1 className="portfolio-heading">
            Check Out <h2><span>Our Work</span></h2>
          </h1>
        </div>

        {/* Category Selection */}
        <div className="portfolio-links">
          {Object.keys(categories).map((key) => (
            <span
              key={key}
              className={`link ${currentCategory === key ? "active" : ""}`}
              onClick={() => handleCategoryClick(key)}
            >
              {key}
            </span>
          ))}
        </div>
      </div>

      {/* Display Projects */}
      {renderGrid()}

      {/* Page Toggle for Multi-Page Categories */}
      {categories[currentCategory].pages.length > 1 && (
        <div className="toggle-container">
          <div className={`rect-toggle1 ${currentPage === 1 ? "active" : ""}`} onClick={() => setCurrentPage(1)}></div>
          <div className={`rect-toggle2 ${currentPage === 2 ? "active" : ""}`} onClick={() => setCurrentPage(2)}></div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
