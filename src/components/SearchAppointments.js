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
                <button
                  className={
                    "sort-by dropdown-item " +
                    (this.props.orderBy === "petName" ? "active" : "")
                  }
                  onClick = {e => this.props.changeOrder('petName', this.props.orderDir)}
                  href="#"
                >
                  Tiername
                </button>
                <button
                  className={
                    "sort-by dropdown-item " +
                    (this.props.orderBy === "aptDate" ? "active" : "")
                  }
                  onClick = {e => this.props.changeOrder('aptDate', this.props.orderDir)}
                  href="#"
                >
                  Datum
                </button>
                <button
                  className={
                    "sort-by dropdown-item " +
                    (this.props.orderBy === "ownerName" ? "active" : "")
                  }
                  onClick = {e => this.props.changeOrder('ownerName', this.props.orderDir)}
                  href="#"
                >
                  Besitzer
                </button>
                <div role="separator" className="dropdown-divider" />
                <button
                  className={
                    "sort-by dropdown-item " +
                    (this.props.orderDir === "asc" ? "active" : "")
                  }
                  onClick = {e => this.props.changeOrder(this.props.orderBy, 'asc')}
                  href="#"
                >
                  aufsteigend
                </button>
                <button
                  className={
                    "sort-by dropdown-item " +
                    (this.props.orderDir === "desc" ? "active" : "")
                  }
                  onClick = {e => this.props.changeOrder(this.props.orderBy, 'desc')}
                  href="#"
                >
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
