const StatsCard = ({ title, value, color, icon }) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>

          <h2 className="mt-3 text-3xl font-semibold text-[#16324F]">
            {value}
          </h2>
        </div>

        <div
          className="flex h-12 w-12 items-center justify-center rounded-2xl text-xl"
          style={{ backgroundColor: `${color}14`, color }}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
