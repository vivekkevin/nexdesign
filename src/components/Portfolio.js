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
import nexu21 from "../assets/Nexu21.png";
import nexu22 from "../assets/Nexu22.png";
import nexu23 from "../assets/Nexu23.png";
import nexu24 from "../assets/Nexu24.png";
import nexu25 from "../assets/Nexu25.png";
import nexu26 from "../assets/Nexu26.png";
import nexu27 from "../assets/Nexu27.png";
import nexu28 from "../assets/Nexu28.png";
import nexu29 from "../assets/Nexu29.png";
import nexu210 from "../assets/Nexu210.png";
import nexu211 from "../assets/Nexu211.png";
import nexv11 from "../assets/Nexv11.png";
import nexv12 from "../assets/Nexv12.png";
import nexv13 from "../assets/Nexv13.png";
import nexv14 from "../assets/Nexv14.png";
import nexv15 from "../assets/Nexv15.png";
import nexv16 from "../assets/Nexv16.png";
import nexq11 from "../assets/Nexq11.png";
import nexq12 from "../assets/Nexq12.png";
import nexq13 from "../assets/Nexq13.png";
import nexq14 from "../assets/Nexq14.png";
import nexq15 from "../assets/Nexq15.png";
import nexq16 from "../assets/Nexq16.png";
import nexq17 from "../assets/Nexq17.png";
import nexq18 from "../assets/Nexq18.png";
import nexq19 from "../assets/Nexq19.png";
import nexu31 from "../assets/Nexu31.png";
import nexu32 from "../assets/Nexu32.png";
import nexu33 from "../assets/Nexu33.png";
import nexu34 from "../assets/Nexu34.png";
import nexu35 from "../assets/Nexu35.png";
import nexu36 from "../assets/Nexu36.png";
import nexq110 from "../assets/Nexq110.png";
import nexq111 from "../assets/Nexq111.png";
import nexq112 from "../assets/Nexq112.png";
import nexq113 from "../assets/Nexq113.png";
import nexq114 from "../assets/Nexq114.png";
import nexq115 from "../assets/Nexq115.png";
import nexq116 from "../assets/Nexq116.png";
import nexq117 from "../assets/Nexq117.png";
import nexq118 from "../assets/Nexq118.png";
import nexq119 from "../assets/Nexq119.png";



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
        [nexu11, nexu17, nexu13, nexu110, nexu18, nexu15, nexu18, nexu14, nexu16, nexu111, nexu12, nexu19],
        [nexu21, nexu22, nexu23, nexu24, nexu25, nexg26, nexu26, nexu27, nexu28, nexu29, nexu210, nexu211]
      ]
    },
    "Nex Video Design": {
      pages: [
        [nexu21, nexu31, nexu23, nexu32, nexu33, nexg26, nexu34, nexu27, nexu28, nexu35, nexu210, nexu36],
        [nexu21, nexv11, nexu23, nexv12, nexv13, nexg26, nexv14, nexu27, nexu28, nexv16, nexu210, nexv15]
      ]
    },
    "Nex 3D Animation": {
      pages: [
        [nexq11, nexq12, nexq14, nexq119, nexq13, nexq15, nexq16, nexq17, nexq18, nexq19, nexq110, nexq111],
        [nexq112, nexq113, nexq114, nexq115, nexq13, nexq116, nexq117, nexq118]
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
