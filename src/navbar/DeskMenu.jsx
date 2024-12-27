import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const DeskMenu = ({ menu }) => {
  const [isHover, setIsHover] = useState(false);

  const handleToggleDrawer = () => {
    setIsHover(!isHover);
  };

  const toggleDrawer = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: { duration: 0.5 },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: { duration: 0.2 },
      display: "none",
    },
  };

  const hasSubMenu = menu?.subMenu?.length;

  return (
    <motion.li
      className="group/link"
      onHoverStart={handleToggleDrawer}
      onHoverEnd={handleToggleDrawer}
      key={menu.name}
    >
      <span className="flex p-3">
        {menu.name}
        {hasSubMenu && <ChevronDown className="group-hover/link:rotate-180 duration-200" />}
      </span>

      {hasSubMenu && (
        <motion.div
          className="sub-menu"
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={toggleDrawer}
        >
          <div
            className={`grid gap-7 ${
              menu.gridCols === 3
                ? "grid-cols-3"
                : menu.gridCols === 2
                ? "grid-cols-2"
                : "grid-cols-1"
            }`}
          >
            {menu.subMenu.map((submenu, index) => (
              submenu.external ? (
                <a
                  href={submenu.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="hover:underline"
                >
                  <div>{submenu.name}</div>
                </a>
              ) : (
                <Link to={submenu.path} key={index}>
                  <div>{submenu.name}</div>
                </Link>
              )
            ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
};

export default DeskMenu;

