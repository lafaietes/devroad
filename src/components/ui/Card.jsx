function Card({ children, className = '', onClick }) {
  return (
    <div
      onClick={onClick}
      className={`bg-slate-900/60 backdrop-blur-md border border-slate-800 p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/50 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
