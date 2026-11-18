function Text({ as: Tag = 'p', children, className = '', ...props }) {
  return (
    <Tag className={className || undefined} {...props}>
      {children}
    </Tag>
  );
}

export default Text;
