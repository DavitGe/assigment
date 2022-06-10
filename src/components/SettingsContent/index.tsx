import React from 'react';
import {useParams} from 'react-router-dom';

import FirstStep from './FirstStep';
import SeccondStep from './SeccondStep';
import ThirdStep from './ThirdStep';

export default function SettingsContent() {
  const {step} = useParams();
  switch (Number(step)) {
    case 1:
      return <FirstStep />;
    case 2:
      return <SeccondStep />;
    case 3:
      return <ThirdStep />;
    default:
      return <p>Something gone wrong</p>;
  }
}
