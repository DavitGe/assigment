import React from 'react';
import {useParams} from 'react-router-dom';
import {dataType} from '../../interfaces';

import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';

interface Props {
  data: dataType;
}
export default function SettingsContent({data}: Props) {
  const {step} = useParams();
  switch (Number(step)) {
    case 1:
      return <FirstStep data={data} />;
    case 2:
      return <SecondStep />;
    case 3:
      return <ThirdStep />;
    default:
      return <p>Something gone wrong</p>;
  }
}
