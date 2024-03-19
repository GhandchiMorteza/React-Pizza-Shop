import { LinkProps, useNavigate } from "react-router-dom";

function LinkButton({ children, className, to }: LinkProps) {
  const classes = `text-sm text-blue-500 hover:text-blue-600 hover:underline ${className}`;
  const navigate = useNavigate();
  if (to === "-1") {
    return (
      <button className={classes} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  }
  return (
    <LinkButton className={classes} to={to}>
      {children}
    </LinkButton>
  );
}

export default LinkButton;
