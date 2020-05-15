import React, { Component } from "react";

import axios from "axios";

//component
import Spinner from "../../components/UI/Spinner/Spinner";
import Repo from "../../components/Repo/Repo";
import "./Repos.css";

class Repos extends Component {
  state = {
    repos: [],
    loading: true
  };

  componentDidMount() {
    var d = new Date();
    d.setDate(d.getDate() - 30);

    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();

    if (month < 10) {
      month = "0" + month;
    }
    var formattedDate = year + "-" + month + "-" + day;

    axios
      .get(
        "https://api.github.com/search/repositories?q=created:>" +
          formattedDate +
          "&sort=stars&order=desc"
      )
      .then(res => {
        this.setState({ repos: res.data.items, loading: false });
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  }

  starsFormatter = (nbStars, digits) => {
    var si = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "G" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" }
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var i;
    for (i = si.length - 1; i > 0; i--) {
      if (nbStars >= si[i].value) {
        break;
      }
    }
    return (
      (nbStars / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol
    );
  };

  render() {
    return (
      <div className="repos-list">
        {this.state.loading ? (
          <Spinner />
        ) : (
          <ul className="list-unstyled">
            {this.state.repos.map(repo => {
              return (
                <Repo
                  key={repo.id}
                  title={repo.full_name}
                  id={repo.id}
                  desc={repo.description}
                  stars={this.starsFormatter(repo.stargazers_count, 1)}
                  issues={repo.has_issues ? repo.open_issues_count : 0}
                  owner={repo.owner}
                />
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default Repos;
