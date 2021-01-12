# Lab01-Quiz-aboutme

OUTCOMES:
* The user should be alerted
* The user should have the option to opt out
* There should be a first and last name prompt
* The user should be prompted with 3 questions
* The user should be able to see their results after taking the quiz


HTML Setup:
* information about the quiz, styled well. 
    - Why? So the user knows what to do.
* A button
    - why? to prompt the quiz
* A results section
    - Why? to display the results of the quiz


1. Get DOM Elements
    - Button
    - Results container
2. Add Event Listeners
    - Button
3. Respond to user input 
    - Launch an alert
        - if the user says no, the quiz ends
        - if the user says yes, launch the series of questions
    - Launch a first name prompt
        - create a variable to store the output
    - Launch last name prompt
        - create a variable to store the output
    - launch a series of quiz questions in yes/no format
        - what counts as a yes?
            * Yes
            * yes
            * yeah
        - What counts as a no?
            * No
            * no
            * nah
4. Dispaly user input via a 'special box'
    - Display input content
        * style that content according to right or wrong answers
5. Display precentages of right or wrong answers input by users
            