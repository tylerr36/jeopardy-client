# Jeopardy!
This app allows users to create questions with corresponding answers, designed so that enough questions are added to create an interactive trivia game. When viewing all questions, the answers are hidden until the user clicks the question. Once viewing the answer, the user has the ability modify the question or answer, as well as the option to delete the question entirely.

## Important Links
  - [Deployed Web Application](https://tylerr36.github.io/jeopardy-client/)
  - [Deployed back-end API](https://secure-plains-22928.herokuapp.com/)
  - [Jeopardy API Repository](https://github.com/tylerr36/jeopardy-api)

## Setup and Installation
1. Fork and clone this repository
2. Change into the new directory
3. Install dependencies with `npm install`.
4. Run `git checkout -b yournewbranch` with a branch name of your choice in place of "yournewbranch" to create the check out to your new branch.

## Technologies Used
  - React
  - Bootstrap
  - Node
  - Sass
  - Git

## The Approach
My approach was to first understand what I wanted for an application, which was to allow for users to start with an empty Jeopardy board, and then choose six categories, each of which would have five questions, thus filling the 30-question board. The signed-in user could create a game board from his or her categories, or from the categories of others. After analyzing what could be accomplished within the four day time limit while meeting all project requirements, I decided to focus on allowing users to be able to create and store their own trivia questions, with answers only able to be viewed after an extra click, so that the user could still display his or her questions to others without immediately revealing answers.

Once I had decided what my plan was within the timeframe, I created wireframes, an ERD, and user stories to represent the app's goals

After successfully testing all trivia question CRUD actions on the back end, I built the front-end framework to allow a user to create trivia questions. Once questions were successfully created and stored, I moved to indexing the questions, following by deletion and modification. When troubleshooting, I looked at similar examples from other React-based front-end projects to try to find parallels. When this was not successful, I used the collective knowledge of my trusty classmates and instructors.

Styling changed were added as a final step.

![Screenshot](https://i.imgur.com/nf5gnfd.png)

[Wireframes](https://i.imgur.com/prkXnkM.jpg)

[User Stories](https://i.imgur.com/cI2JEQO.png)

## Future Goals- Create question categories, with five questions being assigend to each category.
- Assign values to questions.
- View categories created by others, and be able to use their and/or cateogies to fill a 6-category gameboard.
 - Save your selected 6-category board so you can challenge someone else to the same 30 questions.
 - Add a field to submit answers, so that they are later compared against the correct answer, with points being automatically added or deducted based on a correct or incorrect answer.
