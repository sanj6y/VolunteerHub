import React, { ReactNode } from "react";
import "./gridStyles.css";

interface GridProps {
  children: ReactNode;
}

const Grid: React.FC<GridProps> = ({ children }) => {
  return <div className="grid-container">{children}</div>;
};

export default Grid;
