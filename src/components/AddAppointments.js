import React, { Component } from 'react';

class AddAppointments extends Component {
    render() {
        return (
            <div className={
                'card textcenter mt-3 ' +
                (this.props.formDisplay ? '' : 'add-appointment')
            }>
            <div className="apt-addheading card-header bg-primary text-white">
              Termin hinzufügen
            </div>
  
            <div className="card-body">
              <form id="aptForm" noValidate>
                <div className="form-group form-row">
                  <label
                    className="col-md-2 col-form-label text-md-right"
                    htmlFor="petName"
                    readOnly
                  >
                    Tiername
                  </label>
                  <div className="col-md-10">
                    <input
                      type="text"
                      className="form-control"
                      name="petName"
                      placeholder="Tiername"
                    />
                  </div>
                </div>
  
                <div className="form-group form-row">
                  <label
                    className="col-md-2 col-form-label text-md-right"
                    htmlFor="ownerName"
                  >
                    Besitzer
                  </label>
                  <div className="col-md-10">
                    <input
                      type="text"
                      className="form-control"
                      name="ownerName"
                      placeholder="Name des Besitzers"
                    />
                  </div>
                </div>
  
                <div className="form-group form-row">
                  <label
                    className="col-md-2 col-form-label text-md-right"
                    htmlFor="aptDate"
                  >
                    Datum
                  </label>
                  <div className="col-md-4">
                    <input
                      type="date"
                      className="form-control"
                      name="aptDate"
                      id="aptDate"
                    />
                  </div>
                  <label
                    className="col-md-2 col-form-label text-md-right"
                    htmlFor="aptTime"
                  >
                    Uhrzeit
                  </label>
                  <div className="col-md-4">
                    <input
                      type="time"
                      className="form-control"
                      name="aptTime"
                      id="aptTime"
                    />
                  </div>
                </div>
  
                <div className="form-group form-row">
                  <label className="col-md-2 text-md-right" htmlFor="aptNotes">
                    Anmerkungen
                  </label>
                  <div className="col-md-10">
                    <textarea
                      className="form-control"
                      rows="4"
                      cols="50"
                      name="aptNotes"
                      id="aptNotes"
                      placeholder="Anmerkungen"
                    />
                  </div>
                </div>
  
                <div className="form-group form-row mb-0">
                  <div className="offset-md-2 col-md-10">
                    <button
                      type="submit"
                      className="btn btn-primary d-block ml-auto"
                    >
                      Termin hinzufügen
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
  
        );
    }
}

export default AddAppointments;