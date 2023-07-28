import "./index.module.scss";

interface ContainerProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ContainerProps) {
  return (
    <div className="wrapper">
      <div className="container">{children}</div>
    </div>
  );
}
