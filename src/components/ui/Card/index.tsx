import s from "./index.module.scss";

interface CardProps {
  title: string;
}

export default function Card({ title }: CardProps) {
  return (
    <div className={s.wrapper}>
      <h2 className={s.titleHeader}>{title}</h2>
    </div>
  );
}
