---
title: "Finite-state machine example in JavaScript"
summary: "FSM example: a traffic light a traffic light and perform actions depending on the current state. Comparing with if else."
date: "July 2 2024"
draft: false
tags:
- JavaScript
- patterns
---

![Old machine](./machine.jpg)


## What is Finite-state machine?

**The finite state machine (FSM)** is a software design pattern where a given model transitions to other behavioral states through external input.

### Context
FSM refers to classes of automata

![Classes of automata: wiki](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Automata_theory.svg/450px-Automata_theory.svg.png)


### Example using if else

Let's say we have a simple task where we check, for example, a traffic light and perform actions depending on the current state.

```js
function trafficLightAction(color) {
  if (color === 'green') {
    console.log('Go');
  } else if (color === 'yellow') {
    console.log('Slow down');
  } else if (color === 'red') {
    console.log('Stop');
  } else {
    console.log('Invalid color');
  }
}

// Function call examples
trafficLightAction('green');  // Return: Go
trafficLightAction('yellow'); // Return: Slow down
trafficLightAction('red');    // Return: Stop
trafficLightAction('blue');   // Return: Invalid color
```


### Example with using Finite-state machine (FSM)

Now let's implement the same functionality using a state machine. A state machine will be an object where each key (state) is associated with a specific action.

```js
const trafficLightFSM = {
  green: () => console.log('Go'),
  yellow: () => console.log('Slow down'),
  red: () => console.log('Stop'),
  invalid: () => console.log('Invalid color'),
};

function trafficLightActionFSM(color) {
  const action = trafficLightFSM[color] || trafficLightFSM['invalid'];
  action();
}

// Function call examples
trafficLightActionFSM('green');  // Return: Go
trafficLightActionFSM('yellow'); // Return: Slow down
trafficLightActionFSM('red');    // Return: Stop
trafficLightActionFSM('blue');   // Return: Invalid color
```
