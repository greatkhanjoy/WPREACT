import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import PopupOne from "./components/popups/PopupOne";
import PopupTwo from "./components/popups/PopupTwo";

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Survey />,
    document.getElementById("gfsurvey-floating-button")
  );
});

const Survey = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const [popup, setPopup] = useState(null);

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (id) => {
    setModalOpen(true);
    setPopup(id);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className={`floating-button z-10 ${isMenuOpen ? "open" : ""}`}>
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? "Close" : "Menu"}
        </button>
        {isMenuOpen && (
          <div className="menu-container">
            <div className="menu">
              <ul>
                <li className="text-white" onClick={() => openModal(1)}>
                  Menu Item 1
                </li>
                <li className="text-white" onClick={() => openModal(2)}>
                  Menu Item 2
                </li>
                <li className="text-white" onClick={() => openModal(3)}>
                  Menu Item 3
                </li>
                <li className="text-white" onClick={() => openModal(4)}>
                  Menu Item 4
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      {/* <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={openModal}
      >
        Open Modal
      </button> */}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-20">
          <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
          <div className="bg-white w-1/2 p-6 rounded shadow-lg z-50">
            {popup === 1 && <PopupOne />}
            {popup === 2 && <PopupTwo />}
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
