import { Link } from "react-router-dom";
import s from "./index.module.scss";

interface CardProps {
  title: string;
  linkTo: string;
}

export default function Card({ title, linkTo }: CardProps) {
  return (
    <Link to={linkTo}>
      <div className={s.wrapper}>
        <h3 className={s.titleHeader}>{title}</h3>
      </div>
    </Link>
  );
}
