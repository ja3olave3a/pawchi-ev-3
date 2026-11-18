import { Link as RouterLink } from 'react-router-dom';

function Link({ to, className, children }) {
  return (
    <RouterLink to={to} className={className}>
      {children}
    </RouterLink>
  );
}

export default Link;
