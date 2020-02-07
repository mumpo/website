import { useState } from 'react';

export const useIntervalUpdate = (interval: number) => {
  const [, setTick] = useState(0);

  setTimeout(() => {
    setTick(tick => tick + 1);
  }, interval);
};
