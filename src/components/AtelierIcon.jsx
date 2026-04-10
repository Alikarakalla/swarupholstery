function AtelierIcon({ className = '', name }) {
  return (
    <span aria-hidden="true" className={`material-symbols-outlined ${className}`.trim()}>
      {name}
    </span>
  );
}

export default AtelierIcon;
