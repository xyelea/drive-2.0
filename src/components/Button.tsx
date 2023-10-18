import { FC } from "react";

const Button: FC<Button> = ({ btnClass, title, onClick }) => {
  return (
    <div className={`btn btn-primary ${btnClass}`} onClick={onClick}>
      {title}
    </div>
  );
};

export default Button;
