import  { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import * as d3 from "d3";
import { getAdminStats } from "../../Services/admin";
import Loading from "../../Components/Loading";
import {
  FaSignOutAlt,
  FaBlog,
  FaHeart,
  FaComments,
} from "react-icons/fa";

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const chartRef = useRef(null);

  useEffect(() => {
    getAdminStats()
      .then((res) => setStats(res.data))
      .catch((err) => console.error("Stats fetch failed:", err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!loading && stats) drawChart();
  }, [loading, stats]);

  const drawChart = () => {
    const svg = d3.select(chartRef.current);
    svg.selectAll("*").remove();

    const margin = { top: 40, right: 30, bottom: 50, left: 60 };
    const width = 500 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const g = svg
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const data = [
      { label: "Blogs", value: stats.totalBlogs },
      { label: "Users", value: stats.totalUsers },
      { label: "Likes", value: stats.topBlogs[0]?.likes || 0 },
      { label: "Comments", value: stats.mostCommentedBlog?.commentCount || 0 },
    ];

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.label))
      .range([0, width])
      .padding(0.3);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value) * 1.2])
      .nice()
      .range([height, 0]);

    g.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x).tickSizeOuter(0))
      .selectAll("text")
      .style("font-size", "14px")
      .attr("fill", "#374151"); // slate-700

    g.append("g")
      .call(d3.axisLeft(y).ticks(5))
      .selectAll("text")
      .style("font-size", "12px")
      .attr("fill", "#374151");

    const colors = ["#3b82f6", "#10b981", "#ec4899", "#8b5cf6"];
    g.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => x(d.label))
      .attr("width", x.bandwidth())
      .attr("y", height)
      .attr("height", 0)
      .attr("fill", (_, i) => colors[i])
      .transition()
      .duration(800)
      .delay((_, i) => i * 100)
      .attr("y", (d) => y(d.value))
      .attr("height", (d) => height - y(d.value));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/admin/login";
  };

  if (loading || !stats) return <Loading />;

  return (
    <div className="min-h-screen px-6 py-20 text-gray-800 dark:text-gray-100">
      <div className="mt-12 flex justify-between items-center mb-10">
        <h1 className="text-4xl font-light tracking-tight">
          Admin Insights
        </h1>
        <button
          onClick={handleLogout}
          className="p-3 bg-red-500 hover:bg-red-600 text-white rounded-full transition"
          title="Logout"
        >
          <FaSignOutAlt size={20} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <StatCard
          icon={<FaBlog size={30} />}
          title="Blogs"
          value={stats.totalBlogs}
          color="blue"
        />
        <StatCard
          icon={<FaHeart size={30} />}
          title="Top Likes"
          value={stats.topBlogs[0]?.likes || 0}
          color="pink"
        />
        <StatCard
          icon={<FaComments size={30} />}
          title="Top Comments"
          value={stats.mostCommentedBlog.commentCount || 0}
          color="purple"
        />
      </div>

      <div className=" p-6 rounded-xl backdrop-blur-sm mb-12">
        <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-100 mb-4">
          Stats Overview
        </h2>
        <svg
          ref={chartRef}
          className="mx-auto w-full max-w-xl h-[300px]"
        />
      </div>

      <Section title="Top 5 Blogs by Likes">
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {stats.topBlogs.map((b) => (
            <li
              key={b._id}
              className="p-4 bg-white/40 dark:bg-white/10 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">
                {b.title}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {b.likes} likes
              </p>
              <Link
                to={`/blog/${b._id}`}
                className="text-blue-600 dark:text-blue-400 underline text-sm mt-1 inline-block"
              >
                View Blog
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Latest 5 Comments">
        <ul className="space-y-4">
          {stats.latestComments.map((c) => (
            <li
              key={c._id}
              className="p-4 bg-white/30 dark:bg-white/5 border border-gray-200 dark:border-gray-700 rounded-xl"
            >
              <p>
                <strong className="text-gray-800 dark:text-gray-200">
                  {c.name}
                </strong>{" "}
                commented on{" "}
                <Link
                  to={`/blog/${c.blogId}`}
                  className="text-blue-600 dark:text-blue-400 underline"
                >
                  {c.blogTitle}
                </Link>
              </p>
              <p className="mt-1 text-gray-800 dark:text-gray-200">
                {c.text}
              </p>
              <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">
                {new Date(c.createdAt).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <div className="mt-12 flex flex-wrap gap-4 justify-center">
        <Link to="/admin/blogs" className={btnStyle("green")}>
          Manage Blogs
        </Link>
        <Link to="/admin/blogs/add" className={btnStyle("yellow")}>
          ➕ Add Blog
        </Link>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon, color }) => (
  <div className={`p-6 rounded-2xl backdrop-blur-sm bg-white/40 dark:bg-white/10 border border-gray-200 dark:border-gray-700 shadow`}>
    <div className="flex items-center space-x-4">
      <div className={`p-3 bg-${color}-500/30 rounded-full text-${color}-600`}>
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {title}
        </p>
        <p className={`text-2xl font-bold text-${color}-600 dark:text-${color}-400`}>
          {value}
        </p>
      </div>
    </div>
  </div>
);

const Section = ({ title, children }) => (
  <section className="mt-12">
    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
      {title}
    </h2>
    {children}
  </section>
);

const btnStyle = (color) =>
  `px-6 py-3 rounded-full bg-${color}-100/60 dark:bg-${color}-600/30 text-${color}-900 dark:text-${color}-200 border border-${color}-300 dark:border-${color}-500 hover:bg-${color}-200/80 dark:hover:bg-${color}-600/40 transition`;

export default AdminDashboard;
