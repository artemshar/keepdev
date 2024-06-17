---
title: "Timer realization in React"
summary: "Timer realization using React"
date: "June 17 2024"
draft: true
tags:
  - React
  - Samples
---

## Timer

Timer is a device that counts down from a specified time interval.

### Requirements
First, let's define the user requirements for the timer:
- the user must be able to set the initial value
- when the start button is pressed, the timer will start counting down every second to 0
- the user can press the pause button, then the decrease is frozen at the last digit
- if the user presses the start button again, the timer will continue its countdown downwards
- if the user presses the stop button, the timer will return to the initial value

### Realization 

**custom hook useTimer**

Create your own hook 'useTimer' without UI

I think this is the most convenient and scalable way to write timer functionality for apps on React. This hook will not be responsible for the display, instead it will just return us seconds and 3 handlers functions: startTimer, stopTimer, pauseTimer.

Not a word more...

TypeScript:
```tsx
import { useState, useEffect, useCallback } from "react";

const useTimer = (initialSeconds = 60) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);

  const stopTimer = useCallback(() => {
    setIsActive(false);
    // Optionally reset seconds to initial value
    setSeconds(initialSeconds);
  }, []);

  const startTimer = useCallback(() => {
    setIsActive(true);
  }, []);

  const pauseTimer = useCallback(() => {
    setIsActive(false);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => {
          if (seconds > 0) {
            return seconds - 1;
          } else {
            clearInterval(interval!);
            setIsActive(false);
            return 0; // Ensure the timer stops at 0
          }
        });
      }, 1000);
    } else {
      clearInterval(interval!);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, seconds]);

  return { seconds, startTimer, stopTimer, pauseTimer };
};

export default useTimer;
```
