import { useState } from "react";
import "./App.css";

const activities = [
  { id: "work",     label: "Work",      hours: 32, lastWeek: 36, icon: "💼" },
  { id: "play",     label: "Play",      hours: 10, lastWeek: 8,  icon: "🎮" },
  { id: "study",    label: "Study",     hours: 4,  lastWeek: 7,  icon: "📚" },
  { id: "exercise", label: "Exercise",  hours: 4,  lastWeek: 5,  icon: "🏃" },
  { id: "social",   label: "Social",    hours: 5,  lastWeek: 10, icon: "👥" },
  { id: "selfcare", label: "Self Care", hours: 2,  lastWeek: 2,  icon: "✨" },
];

const timeframes = ["Daily", "Weekly", "Monthly"];

export default function App() {
  const [activeTimeframe, setActiveTimeframe] = useState("Weekly");

  return (
    <div className="dashboard">
      {/* ── Perfil ── */}
      <div className="profile-card">
        <div className="profile-avatar">😊</div>
        <p className="profile-label">Report for</p>
        <h1 className="profile-name">Jeremy<br />Robson</h1>
        <ul className="timeframe-list">
          {timeframes.map((tf) => (
            <li
              key={tf}
              className={activeTimeframe === tf ? "active" : ""}
              onClick={() => setActiveTimeframe(tf)}
            >
              {tf}
            </li>
          ))}
        </ul>
      </div>

      {/* ── Tarjetas de actividad ── */}
      {activities.map(({ id, label, hours, lastWeek, icon }) => (
        <div key={id} className="activity-card">
          <div className={`card-top ${id}`}>
            <span className="card-top-icon">{icon}</span>
          </div>
          <div className="card-body">
            <div className="card-header">
              <span className="card-title">{label}</span>
              <button className="card-menu-btn">···</button>
            </div>
            <div className="card-hours">{hours}hrs</div>
            <div className="card-prev">Last Week – {lastWeek}hrs</div>
          </div>
        </div>
      ))}
    </div>
  );
}