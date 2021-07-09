export function formatTeams(teams){
  const formattedTeams = [];
  let formattedTeam = {};
  
  // {
  //   rank: 1,
  //   team: [Object],
  //   points: 86,
  //   goalsDiff: 51,
  //   group: 'Premier League',
  //   form: 'WLWLW',
  //   status: 'same',
  //   description: 'Promotion - Champions League (Group Stage)',
  //   all: [Object],
  //   home: [Object],
  //   away: [Object],
  //   update: '2021-05-23T00:00:00+00:00'
  // }

  // formattedTeams = [{}, {}, {}]
  const teamStandings = teams.response[0].league.standings[0];
  // console.log(teamStandings)
    teamStandings.forEach(standings => {
      formattedTeam.name = standings.team.name
      formattedTeam.logo = standings.team.logo
      formattedTeam.rank = standings.rank
      formattedTeam.points = standings.points
      formattedTeam.played = standings.all.played
      formattedTeam.wins = standings.all.win
      formattedTeam.draw = standings.all.draw
      formattedTeam.loss = standings.all.lose
      formattedTeam.gd = standings.goalsDiff
      formattedTeam.group = standings.group

      formattedTeams.push(formattedTeam);
      formattedTeam = {};
    })

return formattedTeams;


}

