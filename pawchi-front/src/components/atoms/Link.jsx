import { NavLink } from 'react-router-dom';

function Link({ to, children, className = '', ...props }) {
  return (
    <NavLink to={to} className={`link ${className}`.trim()} {...props}>
      {children}
    </NavLink>
  );
}

export default Link;
