function Text({ tipo = 'p', className, children }) {
  if (tipo === 'h1') return <h1 className={className}>{children}</h1>;
  if (tipo === 'h2') return <h2 className={className}>{children}</h2>;
  if (tipo === 'h3') return <h3 className={className}>{children}</h3>;
  return <p className={className}>{children}</p>;
}

export default Text;
