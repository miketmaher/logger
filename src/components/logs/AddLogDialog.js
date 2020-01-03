import React, { useState } from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize';
import { connect } from 'react-redux';
import { addLog } from '../../redux/actions/logActions';
import TechDropdown from '../techs/TechDropdown';

const AddLogDialog = ({ addLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (message === '' || tech === '') {
      M.toast({ html: 'Please complete all fields' });
    } else {
      const newLog = {
        message,
        tech,
        attention,
        date: new Date(),
      };
      addLog(newLog);
      M.toast({ html: `log added by ${tech}` });
      setAttention(false);
      setMessage('');
      setTech('');
    }
  };

  return (
    <div id="add-log-modal" className="modal" style={style}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={e => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>
              <TechDropdown />
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={() => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
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

const style = {
  width: '75%',
  height: '75%',
};

AddLogDialog.propTypes = {
  addLog: PropTypes.func.isRequired,
};

const actions = {
  addLog,
};

export default connect(null, actions)(AddLogDialog);
