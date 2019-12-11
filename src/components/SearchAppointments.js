import React, { Component } from "react";

class SearchAppointments extends Component {
  render() {
    return (
      <div className="search-appointments row justify-content-center my-4">
        <div className="col-md-6">
          <div className="input-group">
            <input
              id="SearchApts"
              type="text"
              className="form-control"
              aria-label="Termine durchsuchen"
            />
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sortieren nach: <span className="caret" />
              </button>

              <div className="sort-menu dropdown-menu dropdown-menu-right">
                <button className="sort-by dropdown-item" href="#">
                  Tiername
                </button>
                <button className="sort-by dropdown-item" href="#">
                  Datum
                </button>
                <button className="sort-by dropdown-item" href="#">
                  Besitzer
                </button>
                <div role="separator" className="dropdown-divider" />
                <button className="sort-by dropdown-item" href="#">
                  aufsteigend
                </button>
                <button className="sort-by dropdown-item" href="#">
                  absteigend
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchAppointments;
