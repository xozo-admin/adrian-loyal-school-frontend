import { Link } from "react-router-dom";

const QuickActions = ({ actions = [] }) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-[#16324F]">Quick Access</h2>
        <p className="mt-1 text-sm text-slate-500">Jump to the sections you update most often.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {actions.map((action) => (
          <Link
            key={action.title}
            to={action.to}
            className="group rounded-2xl border border-slate-200 bg-slate-50/80 p-4 transition hover:border-[#16324F]/20 hover:bg-white hover:shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-2xl text-lg"
                style={{ backgroundColor: `${action.color}14`, color: action.color }}
              >
                {action.icon}
              </div>

              <div>
                <h3 className="font-semibold text-[#16324F]">{action.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{action.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
