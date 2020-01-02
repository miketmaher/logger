import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize';

const AddTechDialog = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please complete all fields' });
    }
    setFirstName('');
    setLastName('');
  };

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>Add Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              last Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect waves-light blue btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

export default AddTechDialog;
