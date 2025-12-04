function Button({ children, onClick, variant = 'primary', className = '', disabled = false }) {
  const baseStyle = "px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none";
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20 border border-indigo-500/50 focus:ring-indigo-500",
    secondary: "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 focus:ring-slate-600",
    outline: "bg-transparent border border-slate-600 text-slate-400 hover:border-cyan-400 hover:text-cyan-400 focus:ring-cyan-400",
    ghost: "text-slate-400 hover:text-white hover:bg-slate-800/50 focus:ring-slate-700",
    activeTab: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.2)] focus:ring-cyan-400"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
