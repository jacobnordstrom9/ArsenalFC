import React, {useEffect, useState} from 'react'
import rosterData from "../data/roster.json"
import {arsenalRoster} from '../utils/roster'
import {Modal, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Roster = () => {

  const [roster, setRoster] = useState([])
  const [show, setShow] = useState(false);
  const [player, setPlayer] = useState({photo:"", firstName:"", lastName:"", age: "", nationality: "", appearances: "",goals:"", assists:"", position:""})
  const handleClose = () => setShow(false);
  const handleShow = (e, index) => {

    console.log("index", index)
    console.log("roster", roster[index])
    let tempPlayer = roster[index]

    setPlayer({photo:tempPlayer.photo, firstName: tempPlayer.firstName , lastName: tempPlayer.lastName , age: tempPlayer.age , nationality: tempPlayer.nationality , appearances: tempPlayer.appearances ,goals: tempPlayer.goals , assists: tempPlayer.assists, position: tempPlayer.position })
    setShow(true)
    // console.log("E",e)
  }

  
  

  useEffect(() => {

    
    const fullRosterData = async () =>{
      /* let response = await fetch("https://api-football-v1.p.rapidapi.com/v3/standings?season=2020&league=39", {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "f2025a8ca8mshb12438f716d685ep100be8jsnace113e48389",
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
        }
      })
      let data = await response.json(); */

      const fullRoster = arsenalRoster(rosterData)

      setRoster(fullRoster)
      
      console.log("formattedRoster", fullRoster)
      
    }

    fullRosterData();
    

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
        
      <h2>2020 Arsenal Roster</h2>
            <div className="row">
              <div className="col-12"> 
              
                <div className="row" text-align="center">
                  {roster.map((arsenalsRoster, index) =>{
                    return(<div className="col-4">
                      <img src={arsenalsRoster.photo} onClick={(e)=>{handleShow(e, index)}}></img>
                        
                      <div>
                      {arsenalsRoster.firstName} {arsenalsRoster.lastName}
                      </div>
                      </div>
                    ) 
                  })}
                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>{player.name}</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <div className="container">
                              <div className="row">
                                <img src={player.photo}></img><br></br>
                                <div>
                                Name: {player.firstName} {player.lastName} <br></br>
                                Age: {player.age} <br></br>
                                Nationality: {player.nationality} <br></br>
                                Appearances: {player.appearances} <br></br>
                                Position: {player.position} <br></br>
                                Goals: {player.goals} <br></br>
                                Assists: {player.assists} <br></br>
                                </div>
                              </div>
                            </div>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Close
                            </Button>
                          </Modal.Footer>
                        </Modal>
                </div>
            
              </div>
            </div>

      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Roster
