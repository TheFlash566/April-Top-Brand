import { ProgressBar } from "react-bootstrap";

const OurSkills = () => {
    return (
        <div className="ourSkills" style={{display: "flex", width: "90%", margin: "auto", gap: "3em", paddingTop: "3em", paddingBottom: "3em"}}>
            <div className="skills-D1" style={{width: "50%", paddingTop: "3em", paddingBottom: "3em"}}>
                <h6 className="skills-h6" style={{color: "#db3030", fontWeight: "600", fontSize: "14px", lineHeight: "30px", textTransform: "uppercase", letterSpacing: "1px", display: "block"}}>OUR SKILLS</h6>
                <h3 style={{fontSize: "50px", lineHeight: "60px", fontWeight: "600", marginBottom: "1.5rem"}}>
                    Our Professional Experience & Skills</h3>
                <p style={{fontSize: "18px", lineHeight: "28px", color: "#777"}}>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel.</p>
            </div>

            <div className="skills-D2" style={{width: "50%", paddingTop: "6em", paddingBottom: "3em", lineHeight: "1.5"}}>
                <div style={{marginBottom: "25px", textAlign: "left"}}>
                    <h6 style={{fontSize: "18px", color: "#111", marginBottom: "10px", fontWeight: "700"}}>Design</h6>
                    <div style={{backgroundColor: "#777", display: "flex", borderRadius: "0.25rem", height: "0.4em"}}>
                        <div className="progress-bar" style={{width:"80%", borderRadius: "0.25rem", backgroundColor: "#db3030"}} role={ProgressBar} Aria-valueNow="70" aria-valuemin={0} Aria-valuemax="100"></div>
                    </div>
                </div>

                <div style={{marginBottom: "25px", textAlign: "left"}}>
                    <h6 style={{fontSize: "18px", color: "#111", marginBottom: "10px", fontWeight: "700"}}>Marketing</h6>
                    <div style={{backgroundColor: "#777", display: "flex", borderRadius: "0.25rem", height: "0.4em"}}>
                        <div className="progress-bar" style={{width:"85%", borderRadius: "0.25rem", backgroundColor: "#db3030"}} role={ProgressBar} Aria-valueNow="70" aria-valuemin={0} Aria-valuemax="100"></div>
                    </div>
                </div>

                <div style={{marginBottom: "25px", textAlign: "left"}}>
                    <h6 style={{fontSize: "18px", color: "#111", marginBottom: "10px", fontWeight: "700"}}>Development</h6>
                    <div style={{backgroundColor: "#777", display: "flex", borderRadius: "0.25rem", height: "0.4em"}}>
                        <div className="progress-bar" style={{width:"95%", borderRadius: "0.25rem", backgroundColor: "#db3030"}} role={ProgressBar} Aria-valueNow="70" aria-valuemin={0} Aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurSkills;







