import { Children, createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContexts } from "./ChallengesContexts";

interface CountdonwContextsData {
  minutes: number;
  seconds: number;
  hasFineshed: Boolean;
  isActive: Boolean;
  resetCountdown: () => void;
  startCountdown: () => void;
}

interface CountdonwProviderProps {
  children: ReactNode;
}

export const CountdonwContexts = createContext({} as CountdonwContextsData)

let countdownTimeout: NodeJS.Timeout;

const { startNewChallenge } = useContext(ChallengesContexts);


const [time, setTime] = useState(0.05 * 60);
const [isActive, setIsActive] = useState(false);
const [hasFineshed, setHasFineshed] = useState(false);

const minutes = Math.floor(time / 60);
const seconds = time % 60;

function startCountdown() {
  setIsActive(true);
}

function resetCountdown() {
  clearTimeout(countdownTimeout);
  setIsActive(false);
  setHasFineshed(false);
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
    startNewChallenge();
  }
}, [isActive, time])

export function CountdownProvider({ children }: CountdonwProviderProps) {
  <CountdonwContexts.Provider
    value={{
      minutes,
      seconds,
      hasFineshed,
      isActive,
      startCountdown,
      resetCountdown
    }}>
    {children}
  </CountdonwContexts.Provider>
}
