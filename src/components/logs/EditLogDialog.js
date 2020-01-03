import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateLog } from '../../redux/actions/logActions';
import M from 'materialize-css/dist/js/materialize';
import TechDropdown from '../techs/TechDropdown';

const EditLogDialog = ({ current, updateLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  const onSubmit = e => {
    e.preventDefault();
    if (message === '' || tech === '') {
      M.toast({ html: 'Please complete all fields' });
    }
    updateLog({
      id: current.id,
      message,
      attention,
      tech,
      date: new Date(),
    });
    M.toast({ html: `Log update by ${tech}` });
    setAttention(false);
    setMessage('');
    setTech('');
  };

  return (
    <div id="edit-log-modal" className="modal" style={style}>
      <div className="modal-content">
        <h4>Edit System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
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

EditLogDialog.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  current: state.log.current,
});

const actions = {
  updateLog,
};

export default connect(mapStateToProps, actions)(EditLogDialog);
