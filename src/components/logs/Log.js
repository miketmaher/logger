import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteLog, setCurrent } from '../../redux/actions/logActions';
import M from 'materialize-css/dist/js/materialize';
import Moment from 'react-moment';

const Log = ({ log, deleteLog, setCurrent }) => {
  const { id, tech, date } = log;
  const onDelete = () => {
    deleteLog(id);
    M.toast({ html: 'Log deleted' });
  };
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
          }`}
          onClick={() => setCurrent(log)}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{id}</span> last updated by{' '}
          <span className="black-text">{tech}</span> on{' '}
          <Moment format="MMMM Do YYYY, h:mm:ss">{date}</Moment>
        </span>
        <a href="#!" onClick={onDelete} className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

Log.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

const actions = {
  deleteLog,
  setCurrent,
};

export default connect(null, actions)(Log);
