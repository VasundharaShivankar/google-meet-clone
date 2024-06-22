import "./Students.css"
import MicOn from "./img/microphone.png"
import MicOff from "./img/mute.png"

function Students({studentName, studentImg, micState}) {
  return (
    <div className="student-card-container">
        <img src={micState ? MicOn : MicOff} className="mic"/>

        <img src={studentImg} className="student-img"/>
        <span className="name">{studentName} </span>
    </div>
  )
}

export default Students