# Jeopardy!
This app allows users to create questions with corresponding answers, designed so that enough questions are added to create an interactive trivia game. When viewing all questions, the answers are hidden until the user clicks the question. Once viewing the answer, the user has the ability modify the question or answer, as well as the option to delete the question entirely.

## Important Links
  - [Deployed Web Application](https://tylerr36.github.io/jeopardy-client/)
  - [Deployed back-end API](https://secure-plains-22928.herokuapp.com/)
  - [Jeopardy API Repository](https://github.com/tylerr36/jeopardy-api)

## Technologies Used
  - React
  - Bootstrap
  - Node
  - Sass
  - Git

## The Approach
My approach was to first understand what I wanted for an application, which was to allow for users to create categories of questions, able to be viewed by other users. I then thought about what from that idea could be accomplished within the four day time limit while meeting all requirements. I decided to focus on allowing user to be able to create and store trivia questions, with categories and viewing of other people's categories/questions to be added after submission.



After testing all CRUD actions on the backend, we built Handlebars templates for the auth, event, and rsvp actions. We then began testing the actions from the front end. After successfully implementing all client-side functions and AJAX calls, we began styling the app and adjusting Handlebars templates.

Our team also utilized our slack channel to communicate ideas, helpful links for a problem,
and updates to other team members if changes were being made outside of our fixed on working hours.

##Future Goals
 - We want to finish our mobile accessibility for the site (we have the landing age as a WIP)
 - We want to remove the form fields for Update/Delete Event and Create RSVP and turn them into hyperlinks to create a more user friendly site. This would also include a hidden form field for rsvps that references the listing id when used.
 - We want to utilize a calendar api in the future so that users can search by date/month and view events within, and try Moments.js to clean up the displayed times for events.
 - refactor, refactor, refactor!

# User Stories

## Auth:
<li>As an unregistered user, I would like to sign up with a unique email and password.</li>
<li>As a registered user, I would like to sign in with my email and password</li>
<li>As a signed in user, I would like to change my password</li>
<li>As a signed in user, I would like to sign out.</li>

## API:

<li>As an unregistred user, I would like to see all events.</li>
<li>As an unregistred user, I would like to navigate through events by date.</li>
<li>As an unregistred user, I would like to see a list of all my created and rsvp's events.</li>
<li>As a signed in user, I would like to RSVP to an event.</li>
<li>As a signed in user, I would like to create my own event.</li>
<li>As a signed in user, I would like to update my own events.</li>
<li>As a signed in user, I would like to delete my own event.</li>

# Wire Frames
![Screenshot](./public/wireframes_landing_page_1_2.png)
![Screenshot](./public/wireframes_2.png)
![Screenshot](./public/wireframe_3.png)
![Screenshot](./public/wireframe_4.png)
