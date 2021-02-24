import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';


let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFineshed, setHasFineshed] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.05 * 60);
  }

  // CONTAGEM REGRESSIVA, MUITO UTIL, GUARDAR PRA SEMPRE!!!
  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000)

    } else if (isActive && time === 0) {
      setHasFineshed(true);
      setIsActive(false);
    }
  }, [isActive, time])

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

      {hasFineshed ? (
        <button
          disabled
          className={styles.startCountdownButton}
        >
          Ciclo Encerrado
        </button>
      ) : (
          <>
            {isActive ? (
              <button
                type="button"
                className={`${styles.startCountdownButton} ${styles.startCountdownButtonActive}`}
                onClick={resetCountdown}>
                Parar contagem
              </button>
            ) : (
                <button
                  type="button"
                  className={styles.startCountdownButton}
                  onClick={startCountdown}>
                  Iniciar contagem
                </button>
              )}
          </>
        )}
    </div>
  )
}
