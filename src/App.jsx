import './App.css'
import { User } from './components/User'

export const App = () => {
  return (
    <div className="dashboard"> 
      {/* Tarjeta de Perfil (Jeremy) */}
      <div className="profile-card">
        <div className="profile-top">
          <img src="./jeremy.png" alt="Jeremy" className="avatar" />
          <div className="profile-text">
            <p>Report for</p>
            <h1>Jeremy Robinson</h1>
          </div>
        </div>
        <div className="profile-menu">
          <button>Daily</button>
          <button className="active">Weekly</button>
          <button>Monthly</button>
        </div>
      </div>

      {/* Bloque de Actividades */}
      <User nombre="Work" horas="32hrs" anterior="36hrs" color="work" />
      <User nombre="Play" horas="10hrs" anterior="8hrs" color="play" />
     
    </div>
  )
}