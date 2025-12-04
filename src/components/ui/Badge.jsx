function Badge({ children, color = 'blue' }) {
  const colors = {
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/20"
  };

  return (
    <span className={`px-2 py-0.5 rounded-full text-[10px] md:text-xs font-semibold border ${colors[color] || colors.blue}`}>
      {children}
    </span>
  );
}

export default Badge;
