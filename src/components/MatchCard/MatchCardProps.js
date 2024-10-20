// MatchCardProps.js
export default class MatchCardProps {
  
constructor(matchId, matchName, matchDate, team1, team2, team1Image, team2Image, timeRemaining, type, country1, country2) {
        this.matchId = matchId;
        this.matchName = matchName;
        this.matchDate = matchDate;
        this.team1 = team1;
        this.team2 = team2;
        this.team1Image = team1Image;
        this.team2Image = team2Image;
        this.timeRemaining = timeRemaining;
        this.type = type;
        this.country1 = country1;
        this.country2 = country2;
    }
}