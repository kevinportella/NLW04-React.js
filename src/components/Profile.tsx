import { useContext } from 'react';
import { ChallengesContexts } from '../contexts/ChallengesContexts';
import styles from '../styles/components/Profile.module.css';


export function Profile() {
  const { level } = useContext(ChallengesContexts);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/kevinportella.png" alt="Kevinho Delas" />
      <div>
        <strong>Kevin Portella</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Lvl.{level} </p>
      </div>
    </div>
  )
}
