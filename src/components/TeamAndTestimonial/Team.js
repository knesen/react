import React from 'react'
import img_team_1 from '../../assets/images/team-1.jpg'
import img_team_2 from '../../assets/images/team-2.jpg'
import img_team_3 from '../../assets/images/team-3.jpg'
import img_team_4 from '../../assets/images/team-4.jpg'

const Team = () => {
  return (
    <div className="team container">
            <div className="team-top">
                <div className="team-top-title">
                    <p className="red-tag">Meet Our Team</p>
                    <h2>Experience Team Members</h2>
                </div>
                <div className="team-button">
                    <button className="rounded-button">
                        Browse Team
                        <i className="fa-light fa-arrow-right"></i>
                    </button>
                </div>
            </div>
            <div className="team-bottom">
                <div className="team-member">
                    <img src={img_team_1} alt="Team member Kristine Palmer" />
                    <h4>Kristine Palmer</h4>
                    <p>Chef Operation Officer</p>
                </div>
                <div className="team-member">
                    <img src={img_team_2} alt="Team member Mark Aubri" />
                    <h4>Mark Aubri</h4>
                    <p>Senior Consultant</p>
                </div>
                <div className="team-member">
                    <img src={img_team_3} alt="Team member Kimberly Hansen" />
                    <h3>Kimberly Hansen</h3>
                    <p>Senior Consultant</p>
                </div>
                <div className="team-member">
                    <img src={img_team_4} alt="Team member Justin Willoman" />
                    <h3>Justin Willoman</h3>
                    <p>Senior Tech Consultant</p>
                </div>
            </div>
            <div className="gallery-icon">
                <i className="fa-sharp fa-solid fa-circle-small"></i>
                <i className="fa-sharp fa-solid fa-circle-small gallery-current"></i>
                <i className="fa-sharp fa-solid fa-circle-small"></i>
                <i className="fa-sharp fa-solid fa-circle-small"></i>
                <i className="fa-sharp fa-solid fa-circle-small"></i>
            </div>
        </div>
  )
}

export default Team