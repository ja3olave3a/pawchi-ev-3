function Image({ src, alt }) {
  if (!src) {
    return <div className="img-vacia">Sin imagen</div>;
  }

  return <img src={src} alt={alt} className="img" />;
}

export default Image;
