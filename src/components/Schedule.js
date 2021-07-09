import React, {useState, useEffect} from 'react'
import scheduleData from '../data/schedule.json'
import {arsenalSchedule} from '../utils/scheduleData'
import "../css/style.css"
import {Link} from 'react-router-dom'

const Schedule = () => {

  const [schedule, setSchedule] = useState([]);

  

  useEffect(() => {

    
    const fullScheduleData = async () =>{
      /* let response = await fetch("https://api-football-v1.p.rapidapi.com/v3/standings?season=2020&league=39", {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "f2025a8ca8mshb12438f716d685ep100be8jsnace113e48389",
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
        }
      })
      let data = await response.json(); */

      const fullSchedule = arsenalSchedule(scheduleData)

      setSchedule(fullSchedule)
      
      console.log("formattedSchedule", fullSchedule)
      
    }

    fullScheduleData();
    

  }, [])

  return (
    <>
<div className="background">
    <div className="mainWrapper">
      <div className="left-side">
        <div className="left-side-logo">
        <img src="blkCannon.jpeg" width="100%"></img>   
        </div>
        <div className="left-side-nav">
          <br></br>
          <br></br>
          <a className="btn btn-default btn-lg" href="/"> Home </a> <br></br>
          <a className="btn btn-default btn-lg" href="/table"> Table </a> <br></br>
          <a className="btn btn-default btn-lg" href="/roster"> Roster </a> <br></br>
          <a className="btn btn-default btn-lg" href="/schedule"> Schedule </a> <br></br>
        </div>
        <div className="left-side-links">
        <br></br>
        <br></br>
        <br></br>
        <br></br>

          Links:
          <br></br>
        <a href="https://www.premierleague.com/">Premier League</a><br></br>
        <a href="https://rapidapi.com/api-sports/api/api-football/">Football API</a><br></br>
        <a href="https://www.espnfc.com">ESPN FC</a> <br></br>
        <a href="https://www.arsenal.com">Official Website</a> <br></br>
        </div>
      </div>
      <div className="right-side">
      <div className="right-side-header"> 
        <div className="right-side-header-left">
        <img src="arsenalLogo.png" width="75px"></img>      
        </div>
        <div className="right-side-header-center">
          <h1> Arsenal FC </h1>
        </div>
        <div className="right-side-header-right">
          <img src="arsenalLogo.png" width="75px"></img>
        </div>
      </div>
        <div className="mainContent">
          

      <h2> Arsenal 2021-2022 Schedule </h2>
    <table>
      <tr>
        <th>Date</th>
        <th>Time</th>
        <th></th>
        <th>Home</th>
        <th></th>
        <th>Away</th>
        <th>Venue</th>
      </tr>

      {schedule.map(arsenalsSchedule =>{
        return(
          <tr>
            <td width="125px">{arsenalsSchedule.date}</td>
            <td width="25px">{arsenalsSchedule.time}</td>
            <td width="25px"><img src={arsenalsSchedule.logoHome} width="25px"></img></td>
            <td width="120px">{arsenalsSchedule.teamHome}</td>
            <td width="25px"><img src={arsenalsSchedule.logoAway} width="25px"></img></td>
            <td width="150px">{arsenalsSchedule.teamAway}</td>
            <td width="200px">{arsenalsSchedule.venue}</td>
          </tr>
        )
      })}
    </table>

      </div>
      </div>
    </div>
  </div>

    </>
  )
}

export default Schedule
