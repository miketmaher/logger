import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTechs } from '../../redux/actions/techActions';
import Tech from './Tech';

const TechListDialog = () => {
  const tech = useSelector(state => state.tech);
  const { techs, loading } = tech;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTechs());
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technicians</h4>
        <ul className="collection">
          {!loading &&
            techs &&
            techs.map(tech => <Tech key={tech.id} tech={tech} />)}
        </ul>
      </div>
    </div>
  );
};

export default TechListDialog;
