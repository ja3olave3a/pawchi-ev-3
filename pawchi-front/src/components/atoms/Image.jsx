function Image({ src, alt, className = '' }) {
  if (!src) {
    return <div role="img" aria-label={alt} className={`img img--vacia ${className}`.trim()} />;
  }

  return <img src={src} alt={alt} loading="lazy" className={`img ${className}`.trim()} />;
}

export default Image;
