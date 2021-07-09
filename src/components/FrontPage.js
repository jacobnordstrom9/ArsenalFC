import React from 'react'

const FrontPage = () => {


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
        
          <p className="frontPageText">If you don't believe in yourself, that you are the real deal, you might as well stay at home" - Thierry Henry</p> <br></br>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/35LeMGfzlxM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default FrontPage
