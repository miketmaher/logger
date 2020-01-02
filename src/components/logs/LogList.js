import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Log from './Log';
import Preloader from '../layout/Preloader';
import { getLogs } from '../../redux/actions/logActions';

const LogList = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No Logs to show</p>
      ) : (
        logs.map(log => <Log log={log} key={log.id} />)
      )}
    </ul>
  );
};

LogList.propTypes = {
  log: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};

const mapStateToProps = state => ({
  log: state.log,
});

const actions = {
  getLogs,
};

export default connect(mapStateToProps, actions)(LogList);
