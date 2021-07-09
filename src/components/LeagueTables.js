import React, {useState, useEffect} from 'react'
import data from '../data/table.json'
import {formatTeams} from '../utils/formatTeams'
import {Link} from 'react-router-dom'

const LeagueTable = () => {
  
  const [standings, setStandings] = useState ([])
  /* const [name, setName] = useState("")
  const [logo, setLogo] = useState("")
  const [rank, setRank] = useState("")
  const [points, setPoints] = useState("")
  const [played, setPlayed] = useState("")
  const [wins, setWins] = useState("")
  const [draw, setDraw] = useState("")
  const [loss, setLoss] = useState("")
  const [gd, setGd] = useState("") */
  // const [group, setGroup] = useState("")

  useEffect(() => {

    
    const tableData = async () =>{
      /* let response = await fetch("https://api-football-v1.p.rapidapi.com/v3/standings?season=2020&league=39", {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "f2025a8ca8mshb12438f716d685ep100be8jsnace113e48389",
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
        }
      })
      let data = await response.json(); */

      const formattedData = formatTeams(data)

      setStandings(formattedData)
      // setFormattedData(formatTeams(standings))

      // setName(formattedData.map(team =>{
      //   return team.name
      // }))
      // setLogo(formattedData.map(team =>{
      //   return team.logo
      // }))
      // setRank(formattedData.map(team =>{
      //   return team.rank
      // }))
      // setPoints(formattedData.map(team =>{
      //   return team.points
      // }))
      // setPlayed(formattedData.map(team =>{
      //   return team.played
      // }))
      // setWins(formattedData.map(team =>{
      //   return team.wins
      // }))
      // setDraw(formattedData.map(team =>{
      //   return team.draw
      // }))
      // setLoss(formattedData.map(team =>{
      //   return team.loss
      // }))
      // setGd(formattedData.map(team =>{
      //   return team.gd
      // }))
      // setGroup(formattedData.map(team =>{
      //   return team.group
      // }))

      console.log("formattedData", formattedData)
      /*  console.log("name",name)
      console.log("logo",logo)
      console.log("rank",rank)
      console.log("points",points)
      console.log("played",played)
      console.log("wins",wins)
      console.log("draw",draw)
      console.log("loss",loss)
      console.log("gd",gd) */
      
    }

    tableData();
    // console.log(team)

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
          
    <h2>2020-2021 Premier League Standings</h2>
    <div className="leagueTable">

      <table>
        <tr>
          <th></th>
          <th></th>
          <th>GP&nbsp;</th>
          <th>Name &nbsp;</th>
          <th>Wins &nbsp;</th>
          <th>Draw &nbsp;</th>
          <th>Loss &nbsp;</th>
          <th>GD &nbsp;</th>
          <th>Points&nbsp;</th>
        </tr>
        {standings.map(leagueTable =>{
          return (
            <tr>
            <td width="45px">{leagueTable.rank}</td>
            <td width="30px"><img src={leagueTable.logo} width="25px"></img></td>
            <td width="55px">{leagueTable.played}</td>
            <td width="200px">{leagueTable.name}</td>
            <td width="55px">{leagueTable.wins}</td>
            <td width="55px">{leagueTable.draw}</td>
            <td width="55px">{leagueTable.loss}</td>
            <td width="55px">{leagueTable.gd}</td>
            <td width="55px">{leagueTable.points}</td>
          </tr>
          )
        })}
      </table>
        </div>
 
        </div>
        </div>
      </div>
    </div>
  
    </>
  )
}

export default LeagueTable
