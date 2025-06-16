import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import * as d3 from "d3";
import { getAdminStats } from "../../Services/admin";
import Loading from "../../Components/Loading";
import { FaSignOutAlt, FaBlog, FaUsers, FaHeart, FaComments } from "react-icons/fa";

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await getAdminStats();
        setStats(res.data);
      } catch (err) {
        console.error("Stats fetch failed:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  useEffect(() => {
    if (!loading && stats) drawChart();
  }, [loading, stats]);

  const drawChart = () => {
    const svg = d3.select(chartRef.current);
    svg.selectAll("*").remove(); // Clear any previous chart

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

    const x = d3.scaleBand()
      .domain(data.map(d => d.label))
      .range([0, width])
      .padding(0.3);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value) * 1.2])
      .range([height, 0]);

    g.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x).tickSizeOuter(0))
      .selectAll("text")
      .style("font-size", "14px")
      .attr("fill", "#fff");

    g.append("g")
      .call(d3.axisLeft(y).ticks(5))
      .selectAll("text")
      .style("font-size", "12px")
      .attr("fill", "#fff");

    // Bars with animation
    g.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", d => x(d.label))
      .attr("width", x.bandwidth())
      .attr("y", height)
      .attr("height", 0)
      .attr("fill", (d, i) => ["#3b82f6", "#10b981", "#ec4899", "#8b5cf6"][i])
      .transition()
      .duration(800)
      .delay((_, i) => i * 100)
      .attr("y", d => y(d.value))
      .attr("height", d => height - y(d.value));
  };


  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/admin/login";
  };

  if (loading || !stats) return <Loading />;

  return (
    <div className="min-h-screen px-6 py-20  text-white">
      <div className=" mt-20  flex justify-between items-center mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight">🧠 Admin Insights</h1>
        <button
          onClick={handleLogout}
          className="p-3 bg-red-600 hover:bg-red-700 rounded-full transition"
          title="Logout"
        >
          <FaSignOutAlt className="text-white w-5 h-5" />
        </button>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <StatCard icon={<FaBlog />} title="Blogs" value={stats.totalBlogs} color="blue" />
        <StatCard icon={<FaUsers />} title="Users" value={stats.totalUsers} color="green" />
        <StatCard icon={<FaHeart />} title="Top Likes" value={stats.topBlogs[0]?.likes || 0} color="pink" />
        <StatCard icon={<FaComments />} title="Top Comments" value={stats.mostCommentedBlog.commentCount || 0} color="purple" />
      </div>

      <div className="bg-[#1f2937] p-6 rounded-xl shadow-xl">
        <h2 className="text-2xl font-semibold text-center text-white mb-4">📊 Stats Overview</h2>
        <svg ref={chartRef} className="block mx-auto w-full max-w-xl h-[300px]" />
      </div>


      {/* Top Blogs */}
      <Section title="🏆 Top 5 Blogs by Likes">
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {stats.topBlogs.map((b) => (
            <li key={b._id} className="p-4 bg-white/10 rounded-lg shadow-lg hover:scale-105 transition">
              <h3 className="font-bold text-lg">{b.title}</h3>
              <p className="text-sm text-pink-300">{b.likes} likes</p>
              <Link to={`/blog/${b._id}`} className="text-blue-400 underline text-sm mt-1 inline-block">
                View Blog
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Latest Comments */}
      <Section title="🆕 Latest 5 Comments">
        <ul className="space-y-4">
          {stats.latestComments.map((c) => (
            <li key={c._id} className="p-4 bg-white/5 border border-white/10 rounded-xl">
              <p><strong>{c.name}</strong> on{" "}
                <Link to={`/blog/${c.blogId}`} className="text-blue-300 underline">
                  {c.blogTitle}
                </Link>
              </p>
              <p className="mt-1">{c.text}</p>
              <p className="text-xs mt-2 text-white/60">{new Date(c.createdAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* CTA Buttons */}
      <div className="mt-12 flex flex-wrap gap-4 justify-center">
        <Link to="/admin/blogs" className={btnStyle("green")}>✍️ Manage Blogs</Link>
        <Link to="/admin/blogs/add" className={btnStyle("yellow")}>➕ Add Blog</Link>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon, color }) => (
  <div className={`p-6 rounded-2xl backdrop-blur-lg bg-gradient-to-br from-${color}-500/20 to-${color}-700/30 border border-${color}-500/40 shadow-md`}>
    <div className="flex items-center space-x-4">
      <div className={`p-3 bg-${color}-500/30 rounded-full text-${color}-300`}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-white/70">{title}</p>
        <p className={`text-2xl font-bold text-${color}-300`}>{value}</p>
      </div>
    </div>
  </div>
);

const Section = ({ title, children }) => (
  <div className="mt-12">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {children}
  </div>
);

const btnStyle = (color) =>
  `px-6 py-3 rounded-full bg-${color}-600/30 text-${color}-200 border border-${color}-400 hover:bg-${color}-500/50 hover:text-white transition`;

export default AdminDashboard;
