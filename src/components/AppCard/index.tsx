import React from "react";
import styles from "./AppCard.module.scss";

interface IAppCardProps {
  name: string;
  url: string;
  className: string;
}

const AppCard: React.FC<IAppCardProps> = ({
  name,
  url,
  className,
  children,
}) => {
  return (
    <div
      className={[styles.wrapper, className].join(" ")}
      onClick={() => window.open(url)}
    >
      <img src={`/app-icons/${name.replace(/\s/, "").toLowerCase()}.png`} />
    </div>
  );
};

export default AppCard;
