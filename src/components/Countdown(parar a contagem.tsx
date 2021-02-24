import { useState, useEffect, useRef } from 'react';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {

  const timeoutRef = useRef(null)

  const [time, setTime] = useState(20 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setActive(true);
  }
  function stopCountdown() {
    clearTimeout(timeoutRef.current)
    setActive(false);
  }
  // CONTAGEM REGRESSIVA, MUITO UTIL, GUARDAR PRA SEMPRE!!!
  useEffect(() => {
    if (active && time > 0) {
      timeoutRef.current = setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    }
  }, [active, time])

  return (
    <div>

      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {!active && (
        <button type="button" className={styles.startCountdownButton}
          onClick={startCountdown}>
          Iniciar contagem
        </button>
      )}

      {active && (
        <button type="button" className={styles.startCountdownButton}
          onClick={stopCountdown}>
          Parar contagem
        </button>
      )}

    </div>
  )
}
