import s from "./index.module.scss";

interface HeaderProps {
  content: string;
}

export default function Header({ content }: HeaderProps) {
  return (
    <div className={s.wrapper}>
      <h1>{content}</h1>
    </div>
  );
}
