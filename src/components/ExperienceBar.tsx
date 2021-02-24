import { useContext } from 'react';
import { ChallengesContexts } from '../contexts/ChallengesContexts';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContexts);

  const percenteToNextLevele = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percenteToNextLevele}%` }} />

        <span className={styles.currentExperience} style={{ left: `${percenteToNextLevele}%` }}>
          {currentExperience}xp
                </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}
