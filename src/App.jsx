import { User } from "./components/User";
import "./App.css";

const activities = [
  { id: "work",     label: "Work",      hours: 32, lastWeek: 36, color: "work",     icon: "👜" },
  { id: "play",     label: "Play",      hours: 10, lastWeek: 8,  color: "play",     icon: "🎮" },
  { id: "study",    label: "Study",     hours: 4,  lastWeek: 7,  color: "study",    icon: "📚" },
  { id: "exercise", label: "Exercise",  hours: 4,  lastWeek: 5,  color: "exercise", icon: "🏃" },
  { id: "social",   label: "Social",    hours: 5,  lastWeek: 10, color: "social",   icon: "👥" },
  { id: "selfcare", label: "Self Care", hours: 2,  lastWeek: 2,  color: "selfcare", icon: "🧘" },
];

export default function App() {
  return (
    <div className="dashboard">
      {/* ── Perfil ── */}
      <div className="profile-card">
        <div className="profile-avatar"><img src="./imagen_user.png" alt="" /></div>
        <p className="profile-label">Report for</p>
        <h1 className="profile-name">Jeremy<br />Robson</h1>
        <ul className="timeframe-list">
          <li className="active">Daily</li>
          <li>Weekly</li>
          <li>Monthly</li>
        </ul>
      </div>

      {/* ── Tarjetas de actividad ── */}
      {activities.map(({ id, label, hours, lastWeek, color, icon }) => (
        <User
          key={id}
          id={id}
          nombre={label}
          horas={`${hours}hrs`}
          anterior={`${lastWeek}hrs`}
          color={color}
          icon={icon}
        />
      ))}
    </div>
  );
}