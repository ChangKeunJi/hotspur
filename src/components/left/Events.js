import React, { Component } from "react";
import axios from "axios";
import moment from "moment";

class Events extends Component {
  state = {
    matches: []
  };

  // Grab the 5 upcoming matches.
  componentDidMount() {
    axios
      .get(
        "https://api.football-data.org/v2/teams/73/matches?status=SCHEDULED",
        {
          headers: {
            "X-Auth-Token": "9398b9f03e1b4dd89fce0a382693f699"
          }
        }
      )
      .then(res => {
        const matches = res.data.matches.slice(0, 4);
        this.setState({ matches });
      })
      .catch(err => console.log(err.message));
  }

  render() {
    const renderMatch = match => {
      let team =
        match.awayTeam.id === 73 ? match.homeTeam.name : match.awayTeam.name;

      let loc =
        match.awayTeam.id === 73 ? (
          <span className="text-danger">Away</span>
        ) : (
          <span className="text-success">Home</span>
        );

      return (
        <li
          key={match.id}
          className="list-group-item border border-primary bg-light"
        >
          <p className="border-bottom pb-3">
            {team} - <span>{loc}</span>
          </p>
          <p className="mb-0 mt-0">{moment(match.utcDate).format("LLL")}</p>
        </li>
      );
    };

    return (
      <div className="event text-center">
        <ul className="list-group">
          {this.state.matches.map(match => renderMatch(match))}
        </ul>
      </div>
    );
  }
}

export default Events;
