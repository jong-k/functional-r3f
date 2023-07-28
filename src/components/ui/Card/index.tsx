import "./index.module.scss";

interface CardProps {
  title: string;
}

export default function Card({ title }: CardProps) {
  return (
    <div className="wrapper">
      <h2 className="title-header">{title}</h2>
    </div>
  );
}
