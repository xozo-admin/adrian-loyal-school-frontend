const RecentActivity = ({ items = [], loading = false }) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-[#16324F]">Latest Activity</h2>
        <p className="mt-1 text-sm text-slate-500">A simple view of the newest submissions and content.</p>
      </div>

      <div className="space-y-4">
        {loading ? (
          <p className="text-sm text-slate-500">Loading dashboard activity...</p>
        ) : items.length ? (
          items.map((activity) => (
            <div
              key={activity.key}
              className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-4"
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-2xl text-lg"
                style={{ backgroundColor: `${activity.color}14`, color: activity.color }}
              >
                {activity.icon}
              </div>

              <div>
                <p className="font-medium text-[#16324F]">{activity.title}</p>
                <p className="mt-1 text-sm text-slate-500">{activity.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-slate-500">No recent activity yet.</p>
        )}
      </div>
    </div>
  );
};

export default RecentActivity;
