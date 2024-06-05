let timerInterval : any = null;
let minutes : number = 0;
let seconds : number = 0; 
let elapsedTime : string = '00:00';
let timeFinished : string;


export const timerHTML : any = document.querySelector('#timeCounter');

// Start the timer and call the countUp-function once every second

export function startTimer() : void {
  timerInterval = setInterval(countUp,1000);

  // Makes sure to print out '00:00' (if startTimer is called from 'playAgainBtn' for example)

  timerHTML.textContent = '00:00';
}

// Counting up

function countUp() : void {
  if (seconds === 59) {
    seconds = 0;
    minutes += 1;
  } else {
    seconds += 1;
  }

  // Converting to string, padding with 0's for the sake of looks, and printing the result in timerHTML

  elapsedTime = (String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0'));
  
  timerHTML.textContent = elapsedTime;

}

// Stop the timer by clearing the 1000 ms interval

export function stopTimer() : void {
  clearInterval(timerInterval);
  timerInterval = null;
  timeFinished = elapsedTime;

  // Reset minutes and seconds to 0

  minutes = 0;
  seconds = 0;
  

}

export { elapsedTime , timeFinished };