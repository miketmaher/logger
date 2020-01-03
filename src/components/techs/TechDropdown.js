import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTechs } from '../../redux/actions/techActions';

const TechDropdown = () => {
  const tech = useSelector(state => state.tech);
  const { techs, loading } = tech;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTechs());
  }, []);
  return (
    !loading &&
    techs &&
    techs.map(t => (
      <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
        {t.firstName} {t.lastName}
      </option>
    ))
  );
};

export default TechDropdown;
