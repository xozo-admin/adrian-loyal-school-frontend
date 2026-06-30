import { useEffect, useMemo, useState } from "react";
import {
  FaEnvelope,
  FaFileAlt,
  FaHome,
  FaImages,
  FaInfoCircle,
  FaTachometerAlt,
  FaUserGraduate,
} from "react-icons/fa";

import { getAdmissions } from "../api/admissionApi";
import { getFacultyProfiles, getCampusTourImages } from "../api/aboutApi";
import { getContactMessages } from "../api/contactApi";
import { getGallery } from "../api/galleryApi";
import { getHomeAchievements, getHomeUpdates } from "../api/homeContentApi";
import { getMandatoryDocuments } from "../api/mandatoryApi";
import { ADMIN_BASE_PATH } from "../adminConfig";
import QuickActions from "../dashboard/QuickActions";
import RecentActivity from "../dashboard/RecentActivity";
import StatsCard from "../dashboard/StatsCard";
import AdminLayout from "../layouts/AdminLayout";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [overview, setOverview] = useState({
    admissions: [],
    contactMessages: [],
    gallery: [],
    homeUpdates: [],
    achievements: [],
    mandatory: [],
    faculty: [],
    campusTour: [],
  });

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        setLoading(true);
        setError("");

        const [
          admissionsResponse,
          contactResponse,
          galleryResponse,
          updatesResponse,
          achievementsResponse,
          mandatoryResponse,
          facultyResponse,
          campusTourResponse,
        ] = await Promise.all([
          getAdmissions(),
          getContactMessages(),
          getGallery(),
          getHomeUpdates(),
          getHomeAchievements(),
          getMandatoryDocuments(),
          getFacultyProfiles(),
          getCampusTourImages(),
        ]);

        setOverview({
          admissions: admissionsResponse.data || [],
          contactMessages: contactResponse.data || [],
          gallery: galleryResponse.data || [],
          homeUpdates: updatesResponse.data || [],
          achievements: achievementsResponse.data || [],
          mandatory: mandatoryResponse.data || [],
          faculty: facultyResponse.data || [],
          campusTour: campusTourResponse.data || [],
        });
      } catch (loadError) {
        setError(loadError?.response?.data?.message || "Failed to load dashboard data.");
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  const stats = useMemo(
    () => [
      {
        title: "Admissions",
        value: overview.admissions.length,
        color: "#10B981",
        icon: <FaUserGraduate />,
      },
      {
        title: "Messages",
        value: overview.contactMessages.length,
        color: "#EF4444",
        icon: <FaEnvelope />,
      },
      {
        title: "Gallery Items",
        value: overview.gallery.length,
        color: "#2563EB",
        icon: <FaImages />,
      },
      {
        title: "Documents",
        value: overview.mandatory.length,
        color: "#7C3AED",
        icon: <FaFileAlt />,
      },
    ],
    [overview],
  );

  const actions = useMemo(
    () => [
      {
        title: "Home Content",
        description: `${overview.homeUpdates.length} updates and ${overview.achievements.length} achievements`,
        to: `${ADMIN_BASE_PATH}/home`,
        color: "#16324F",
        icon: <FaHome />,
      },
      {
        title: "Admissions",
        description: `${overview.admissions.length} enquiries received`,
        to: `${ADMIN_BASE_PATH}/admissions`,
        color: "#10B981",
        icon: <FaUserGraduate />,
      },
      {
        title: "Contact",
        description: `${overview.contactMessages.length} messages waiting`,
        to: `${ADMIN_BASE_PATH}/contact`,
        color: "#EF4444",
        icon: <FaEnvelope />,
      },
      {
        title: "About Page",
        description: `${overview.faculty.length} faculty and ${overview.campusTour.length} campus images`,
        to: `${ADMIN_BASE_PATH}/about`,
        color: "#F59E0B",
        icon: <FaInfoCircle />,
      },
    ],
    [overview],
  );

  const recentActivity = useMemo(() => {
    const items = [
      ...overview.admissions
        .slice(-2)
        .reverse()
        .map((item) => ({
          key: `admission-${item.id}`,
          title: item.childName || "New admission enquiry",
          description: `${item.admissionClass} admission enquiry from ${item.city || "student family"}`,
          color: "#10B981",
          icon: <FaUserGraduate />,
        })),
      ...overview.contactMessages
        .slice(-2)
        .reverse()
        .map((item) => ({
          key: `contact-${item.id}`,
          title: item.fullName || "New contact message",
          description: item.subject || item.email || "Contact enquiry received",
          color: "#EF4444",
          icon: <FaEnvelope />,
        })),
      ...overview.homeUpdates
        .slice(-1)
        .reverse()
        .map((item) => ({
          key: `update-${item.id}`,
          title: item.title || "Latest update added",
          description: "Home page latest update content was added.",
          color: "#16324F",
          icon: <FaHome />,
        })),
      ...overview.mandatory
        .slice(-1)
        .reverse()
        .map((item) => ({
          key: `mandatory-${item.id}`,
          title: item.title || "Document uploaded",
          description: "A mandatory disclosure document is available.",
          color: "#7C3AED",
          icon: <FaFileAlt />,
        })),
    ];

    return items.slice(0, 6);
  }, [overview]);

  return (
    <AdminLayout>
      <section className="mb-8 rounded-3xl border border-slate-200 bg-white px-6 py-7 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">Admin Dashboard</p>
            <h2 className="mt-2 text-3xl font-semibold text-[#16324F]">Clean overview of your website content</h2>
            <p className="mt-2 max-w-3xl text-slate-500">
              A minimal live summary of admissions, messages, gallery content, and school documents.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
            <FaTachometerAlt className="text-[#16324F]" />
            {loading ? "Refreshing live data..." : "Dashboard synced with current data"}
          </div>
        </div>
      </section>

      {error ? (
        <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-red-700">
          {error}
        </div>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard
            key={stat.title}
            title={stat.title}
            value={loading ? "..." : stat.value}
            color={stat.color}
            icon={stat.icon}
          />
        ))}
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <QuickActions actions={actions} />
        <RecentActivity items={recentActivity} loading={loading} />
      </div>

      <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Home Section</p>
          <h3 className="mt-2 text-2xl font-semibold text-[#16324F]">{loading ? "..." : overview.homeUpdates.length}</h3>
          <p className="mt-2 text-sm text-slate-500">Latest updates uploaded</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Achievements</p>
          <h3 className="mt-2 text-2xl font-semibold text-[#16324F]">{loading ? "..." : overview.achievements.length}</h3>
          <p className="mt-2 text-sm text-slate-500">Home page achievement entries</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Faculty Profiles</p>
          <h3 className="mt-2 text-2xl font-semibold text-[#16324F]">{loading ? "..." : overview.faculty.length}</h3>
          <p className="mt-2 text-sm text-slate-500">About page faculty members</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Campus Tour</p>
          <h3 className="mt-2 text-2xl font-semibold text-[#16324F]">{loading ? "..." : overview.campusTour.length}</h3>
          <p className="mt-2 text-sm text-slate-500">Campus images available</p>
        </div>
      </section>
    </AdminLayout>
  );
};

export default Dashboard;
