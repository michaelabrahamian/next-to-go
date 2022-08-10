import { formatDistanceToNowStrict } from 'date-fns';
import { useEffect, useState } from 'react';

type CountDownTimerProps = {
  targetDate: Date;
};

export const CountDownTimer = ({
  targetDate,
}: CountDownTimerProps): JSX.Element => {
  const [countDown, setCountdown] = useState(
    formatDistanceToNowStrict(targetDate)
  );

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown(formatDistanceToNowStrict(targetDate));
    }, 1_000);

    return () => clearInterval(countdownInterval);
  }, [targetDate]);

  console.log('targetDate', targetDate);

  return <span>starts in: {countDown}</span>;
};
