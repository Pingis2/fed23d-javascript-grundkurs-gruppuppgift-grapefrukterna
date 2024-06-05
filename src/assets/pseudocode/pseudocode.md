# Pseudo code for the functions in this project

## Good to know:

**This just my idea of which functions we need for G requirement. So this is very much up for input and discussion if we want to add more or combine / split some of these functions for example**

the variable and function names I've used here are just working names to make the pseudocode more understandable, otherwise I'd have to repeat what they all do, feel free to change the names  
added what I think will work, most can probably be altered, some probably will have to be

I'm unsure how timers work, so any input there is very welcome as it will be needed in at least 2 functions, possible more.

comment lines are under the lines they refer to i e  
stuff  
_comment/clarification on stuff_

## Things we need to decide on in order to write all pseudocode for the functions:

- What things we create in the HTML file and what we generate with TypeScript when displaying the question screen & results screen  
  This will also matter for eventListeners and which ones we should have them predefined and which ones that should added in a function
- If we're showing the user which questions that were correct and incorrect in the results screen or possibly after answering a question  
  If we are showing this, then we might have to keep track of this in the isAnswerCorrect function
- If we are showing how many questions they got right, for example 8/10.

### create10Questions function

make a new copy of original array with all questions (questionsArrayCopy)  
_This array will have the questions removed, so a copy is needed to leave the original array intact_  
let 10 questions array (tenQuestionsArray) be empty, i e tenQuestionsArray = []
_needs to be predefined somewhere else initially, it will be resused if more than one game is played so we need to change it here, not create it_  
make a loop run 10 times
_a for loop might be the easiest one_

- each loop:  
   Math.floor(Math.random \* the size of questionsArrayCopy) to get a random indexNumber  
   use indexNumber to select question object in questionsArrayCopy  
   push the question object into tenQuestionsArray  
   remove the indexNumber from (questionsArrayCopy)  
  _This is to avoid selecting the same question twice by removing it from questionsArrayCopy_

when loop is done - return (tenQuestionsArray)

### Timer module

_will probably need to have contain 2 functions, startTimer and stopTimer_

_both functions might need to be more complex, not sure if this is enough_

_some variables will have to be declared outside of the functions since they will be modified by multiple functions_

create variable for keeping track of the timer value (timeTotal)

### startTimer function

_having both startTimer & stopTimer in the same module seems like a good idea_

create a timer with Date
display timer in HTML  
_will have to wait until HTML is set_  
_might be good to use current timer variable here_  
store timer result to a variable (timeTotal)

### stopTimer function

_stops and resets the timer_

stop the timer (clearInterval(timerInterval))
create a new variable to display time elapsed, i e timeFinished = timeTotal
return timeFinished to the function that called the stop of the timer
set timeTotal to 0  
reset other possible variables

### displayNextQuestion function (currentScore, tenQuestionsArray, currentQuestion)

use currentQuestion variable to decide what content to show

- if currentQuestion >= 9  
  call stopTimer function
  call function to display results screen (displayResultsScreen)  
  _assuming we have currentQuestion start at 0, 10 questions will be answered when it's 9_
  pass in (currentScore, timer)  
  _unsure how to pass in timer here, ideas are welcome_

- else  
  _will do most of this one later when we know how much of this section that is in HTML and what needs to be generated from TypeScript_  
  after showing content:  
  currentQuestion ++;  
  _this should make sure we show the next question the next time this function is called_

### startNewQuiz function

_triggered when user clicks button for new quiz, via enentListener. Can also be reused when user wants to play a second game_

call function (create10Questions) to get 10 random questions (tenQuestionsArray)  
_should recieve array with 10 random questions_  
call function (startTimer) for timer to start  
let currentScore = 0;
let currentQuestion = 0;
_if the user wants to play a second game, we need to set currentScore to 0_

call function to display next question (displayNextQuestion) page  
_the reason why this is a separate function is because we need to re-render the page multiple times_  
_we'll probably have to pass in have to pass in (currentScore, tenQuestionsArray, currentQuestion) to this function_  
show question section (probbably with classList)

hide start section(probbably with classList)  
hide results section(probbably with classList)  
_this is an easy solution with minimal code to make the function work from both start and results screen_  
_since adding a hidden class on a section that already have it doesn't do anything, we can skipp checking if they contain it_  
_we could however also do this by checking which section doesn't contain hidden since that is probably a more proffessional solution_

### isAnswerCorrect function

function isAnswerCorrect(questionIndex, option, pointsTotal)  
_questionIndex is sent to make sure we check the current question, it should be a number_  
_option is which answer the user selected to the question (i e 1, 2 or 3)_  
_pointsTotal is the amounts of points the player currently have in the game_
const currentQuestion {} = tenQuestionsArray[questionsIndex]  
check if currentQuestion.correctOptionIndex === option

- if false  
  return or deduct points from pointsTotal  
  return the new value of pointsTotal
- if true  
  add +1 to pointsTotal  
  _this is if we just add 1 point per answer and ignore difficulty_  
  add (currentQuestion.difficulty) to points total
  _if we want to add points depending on difficulty, this line can can be used instead_
  return the new value of pointsTotal

### displayResultsScreen function

_we need to decide how much is made in HTML and how much is rendered in TypeScript from this function_

hide question section (probably with classList)  
show results section (probably with classList)  
display how long the quiz took (timeTotal)  
display score  
_we'll probably have a button in HTML that we can have an eventListener on for startNewQuiz function, so no need to do this here in that case_
