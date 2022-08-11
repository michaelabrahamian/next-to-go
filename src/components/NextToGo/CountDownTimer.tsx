import { formatDistanceToNowStrict } from 'date-fns';
import { useEffect, useState } from 'react';

type CountDownTimerProps = {
  targetDate: Date;
};

export const getCountdownText = (targetDate: Date): string =>
  formatDistanceToNowStrict(targetDate, {
    addSuffix: true,
  });

export const CountDownTimer = ({
  targetDate,
}: CountDownTimerProps): JSX.Element => {
  const [countDown, setCountdown] = useState(getCountdownText(targetDate));

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown(getCountdownText(targetDate));
    }, 1_000);

    return () => clearInterval(countdownInterval);
  }, [targetDate]);

  return <span>starts: {countDown}</span>;
};
