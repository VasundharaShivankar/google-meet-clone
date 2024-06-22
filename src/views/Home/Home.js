import "./Home.css"
import Student1 from "./img/1.avif"
import Student2 from "./img/2.avif"
import Student3 from "./img/3.avif"
import Student4 from "./img/4.avif"
import Student5 from "./img/5.avif"
import Student6 from "./img/6.avif"

const Home=()=>{
    return(
        <>
        <h1>This is the Google Meet Page</h1>
        <div className="container">
            <Students studentName="Sakshi"
                      studentImg={Student1}
                      micState={true} />

            <Students studentName="Khushi"
                      studentImg={Student2}
                      micState={true} />   

            <Students studentName="Ritika"
                      studentImg={Student3}
                      micState={true} />

            <Students studentName="Ashok"
                      studentImg={Student4}
                      micState={true} />
  
            <Students studentName="Rizwan"
                      studentImg={Student5}
                      micState={true} />

            <Students studentName="Ayush"
                      studentImg={Student6}
                      micState={true} />                    
        </div>
        </>
    )
}

export default Home;