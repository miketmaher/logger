import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteLog, setCurrent } from '../../redux/actions/logActions';
import M from 'materialize-css/dist/js/materialize';
import Moment from 'react-moment';

const Log = ({ log }) => {
  const dispatch = useDispatch();

  const { id, tech, date, attention, message } = log;
  const onDelete = () => {
    dispatch(deleteLog(id));
    M.toast({ html: 'Log deleted' });
  };
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${attention ? 'red-text' : 'blue-text'}`}
          onClick={() => dispatch(setCurrent(log))}
        >
          {message}
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
};

export default Log;
