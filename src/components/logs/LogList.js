import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Log from './Log';
import Preloader from '../layout/Preloader';
import { getLogs } from '../../redux/actions/logActions';

const LogList = () => {
  const log = useSelector(state => state.log);

  const dispatch = useDispatch();

  const { logs, loading } = log;

  useEffect(() => {
    dispatch(getLogs());
  }, [dispatch]);

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

export default LogList;
