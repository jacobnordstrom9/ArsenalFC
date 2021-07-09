export function arsenalSchedule(gunnerSchedule){
  const fullSchedule = [];
  let formattedSchedule = {};
  
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
  const teamSchedule = gunnerSchedule.response;
  console.log(teamSchedule)
    teamSchedule.forEach(schedule => {
      formattedSchedule.date = schedule.fixture.date.slice(0,10)
      formattedSchedule.time = schedule.fixture.date.slice(11,16)
      formattedSchedule.teamHome = schedule.teams.home.name
      formattedSchedule.teamAway = schedule.teams.away.name
      formattedSchedule.venue = schedule.fixture.venue.name
      formattedSchedule.logoHome = schedule.teams.home.logo
      formattedSchedule.logoAway = schedule.teams.away.logo

      fullSchedule.push(formattedSchedule);
      formattedSchedule = {};
    })
    
return fullSchedule;


}

