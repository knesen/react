import React from 'react'
import img_team_1 from '../../assets/images/team-1.jpg'
import img_team_2 from '../../assets/images/team-2.jpg'
import img_team_3 from '../../assets/images/team-3.jpg'
import img_team_4 from '../../assets/images/team-4.jpg'

const Team = () => {
  return (
    <div class="team container">
            <div class="team-top">
                <div class="team-top-title">
                    <p class="red-tag">Meet Our Team</p>
                    <h2>Experience Team Members</h2>
                </div>
                <div class="team-button">
                    <button class="rounded-button">
                        Browse Team
                        <i class="fa-light fa-arrow-right"></i>
                    </button>
                </div>
            </div>
            <div class="team-bottom">
                <div class="team-member">
                    <img src={img_team_1} alt="Team member Kristine Palmer" />
                    <h4>Kristine Palmer</h4>
                    <p>Chef Operation Officer</p>
                </div>
                <div class="team-member">
                    <img src={img_team_2} alt="Team member Mark Aubri" />
                    <h4>Mark Aubri</h4>
                    <p>Senior Consultant</p>
                </div>
                <div class="team-member">
                    <img src={img_team_3} alt="Team member Kimberly Hansen" />
                    <h3>Kimberly Hansen</h3>
                    <p>Senior Consultant</p>
                </div>
                <div class="team-member">
                    <img src={img_team_4} alt="Team member Justin Willoman" />
                    <h3>Justin Willoman</h3>
                    <p>Senior Tech Consultant</p>
                </div>
            </div>
            <div class="gallery-icon">
                <i class="fa-sharp fa-solid fa-circle-small"></i>
                <i class="fa-sharp fa-solid fa-circle-small gallery-current"></i>
                <i class="fa-sharp fa-solid fa-circle-small"></i>
                <i class="fa-sharp fa-solid fa-circle-small"></i>
                <i class="fa-sharp fa-solid fa-circle-small"></i>
            </div>
        </div>
  )
}

export default Team