import React, { useState } from "react";
import { X, Menu, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const MobMenu = ({ Menus }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleToggle = {
    enter: { height: "auto", overflow: "hidden" },
    exit: { height: 0, overflow: "hidden" },
  };

  const handleNavigation = (url, external) => {
    if (external) {
      window.open(url, "_blank", "noopener noreferrer"); // Open external link in a new tab
    } else if (url) {
      window.location.href = url; // Navigate for internal links
    }
  };

  return (
    <div>
      <button className="lg:hidden z-[1000] relative" onClick={toggleMenu}>
        {isOpen ? <X /> : <Menu />}
      </button>

      <motion.div
        className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg-[#18181A] backdrop-blur text-white p-6 pb-20 z-[1100]"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
      >
        <ul>
          {Menus.map(({ name, subMenu }, i) => {
            const hasSubMenu = subMenu?.length > 0;
            const isClicked = clicked === i;

            return (
              <li key={i}>
                <span
                  onClick={() => setClicked(isClicked ? null : i)}
                  className="flex-center-between p-4 hover:bg-white/5 rounded-md cursor-pointer"
                >
                  {name}
                  {hasSubMenu && (
                    <ChevronDown className={`ml-auto ${isClicked ? "rotate-180" : ""}`} />
                  )}
                </span>

                {hasSubMenu && (
                  <motion.ul
                    className="ml-5"
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={handleToggle}
                  >
                    {subMenu.map(({ name, url, external }, index) => (
                      <li
                        key={index}
                        onClick={() => handleNavigation(url, external)}
                        className="p-2 flex-center hover:bg-white/5 rounded-md gap-x-2 cursor-pointer"
                      >
                        {name}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
};

export default MobMenu;
