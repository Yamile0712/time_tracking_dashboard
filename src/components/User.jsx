export const User = ({ id, nombre, horas, anterior, color, icon }) => {
  return (
    <div className={`activity-card ${color}`}>
      <div className={`card-top ${id}`}>
        <span className="card-top-icon">{icon}</span>
      </div>

      <div className="card-body">
        <div className="card-header">
          <span className="card-title">{nombre}</span>
          <button className="card-menu-btn">···</button>
        </div>
        
        <div className="card-hours">{horas}</div>
        <div className="card-prev">Last Week – {anterior}</div>
      </div>
    </div>
  );
};
