# Julius Baer Markets Toolbox Team Hiring Candidate

## Prerequesites

Please take your time to read this README carefully until the end before starting.

Add your work to a new branch. The branch name should include your full
name with the format: `firstname-lastname-tic-tac-toe`

The project has been configured with [parcel](https://github.com/parcel-bundler/parcel)
and makes use of [preact](https://github.com/preactjs/preact) (v8) while [karma](https://github.com/karma-runner/karma)
is also available for testing. It will run on Node 10 LTS (possibly also later versions).

- `npm start` will start a local server and allow you to use a browser to see your work.
- `npm test` will run any tests that you add.

The language of choice is Typescript. If you chose to add another library, please do so and document the reason you are using it.

## What we are expecting

The target is to create a tic-tac-toe game under the given constraints.

We are expecting a board with nine fields and the ability to click on a field to display the corresponding marker (either an `x` or an `o`).
We assume that players are using the same mouse and play in the correct order so that first click will be an `x`, the second an `o` and so on.

In the case of a winner a message should be displayed and no further input (mouse clicks) allowed by the user.
In the case of a draw (no further spots left to fill) a message should be displayed again.

As soon as you are done with the implementation and there is some time left, please try to make the board look better. Please use plain css for that.

## Time constraints

We expect you to spend a maximum of 2.5 hours for this task. The top priority is a working game. Please do not spend more time and rather send us 
something incomplete and state why you were not able to complete the task in the expected time.

## Zipping and returning the result to us

- Remove the `node_modules` directory.
- Remove the `dist` directory.
- Remove the `.cache` directory (maybe hidden).
- Remove the `.karma-parcel` directory (maybe hidden).
- Remove any other file or directory listed in `.gitignore`.

**There should be no *.js files in the zip package** because our security filters will remove the attachment. As a last resort, if for some reason there are *.js files in your branch, we ask you kindly to use https://wetransfer.com/.

## We will not review the assessment if one of the following is true ##

- Preact is replaced with React.
- Preact with Hooks were installed and the game is not finished.