export const User = ({ nombre, horas, anterior, color }) => {
  
  return (

    <div className={`card-container ${color}`}>
      <div className="card-content">
        <div className="card-header">
          <span>{nombre}</span>
          <button className="dots-btn">...</button>
        </div>

        <div className="card-body">
          <h2 className="current-hours">{horas}</h2>
          <p className="previous-stats">Last Week - {anterior}</p>
        </div>
      </div>
    </div >

  );
};
