import { useContext } from 'react';
import { CountdonwContexts } from '../contexts/CountdownContexts';
import styles from '../styles/components/Countdown.module.css';


export function Countdown() {

  const {
    minutes,
    seconds,
    hasFineshed,
    isActive,
    resetCountdown,
    startCountdown
  } = useContext(CountdonwContexts)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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
