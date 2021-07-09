export function arsenalRoster(gunnerRoster){
  const fullRoster = [];
  let formattedRoster = {};
  
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
  const teamRoster = gunnerRoster.response;
  console.log(teamRoster)
    teamRoster.forEach(roster => {
      formattedRoster.firstName = roster.player.firstname
      formattedRoster.lastName = roster.player.lastname
      formattedRoster.name = roster.player.name
      formattedRoster.height = roster.player.height
      formattedRoster.nationality = roster.player.nationality
      formattedRoster.photo = roster.player.photo
      formattedRoster.birthday = roster.player.birth.date
      formattedRoster.age = roster.player.age
      formattedRoster.appearances = roster.statistics[0].games.appearences
      formattedRoster.goals = roster.statistics[0].goals.total
      formattedRoster.assists = roster.statistics[0].goals.assists
      formattedRoster.position = roster.statistics[0].games.position
      // formattedSchedule.time = schedule.fixture.date.slice(11,16)
      // formattedSchedule.teamHome = schedule.teams.home.name
      // formattedSchedule.teamAway = schedule.teams.away.name
      // formattedSchedule.venue = schedule.fixture.venue.name
      // formattedSchedule.logoHome = schedule.teams.home.logo
      // formattedSchedule.logoAway = schedule.teams.away.logo

      fullRoster.push(formattedRoster);
      formattedRoster = {};
    })
    
return fullRoster;


}

