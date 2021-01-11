# Lab01-Quiz-aboutme

OUTCOMES:
* There should be an alert
* There should be a confirm so the user can opt out
* There should eb a first name and last and  prompt
* There should be 3 question prompts
* the user should be able to see their results after taking the quiz


HTML Setup:
* Some information, presented nicely with an imaghe and some list items.
    - Why? So the user knows what to do.
* A button
    - why? to launch the quiz
* A secret, empty div
    - Why? to inject.display the results to the user


1. Get DOM Elements
    - Button
    - Secret Div
2. Add Event Listeners
    - Button
3. Respond to user input -- in most apps, the real work happens in the cool zone
    - Launch an alert
        - if the suer says no, nothing else happens
        - if the user says yes, launch the series of prompts
    - Launch a first anme prompt
        - store the output to display later
    - Launch last name prompt
        - store output to display later
    - launch quiz prompts with specific yes/no questions
        - how do we evlaute the answers?
        - what counts as a yes?
            - Yes
            - Yeah
            - Yep
            - yes
            - yeah
            - y
            - Y
            - anything that starts with y