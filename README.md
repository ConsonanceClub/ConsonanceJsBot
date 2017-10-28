# ConsonanceJsBot
Creating a more secure and efficient voting system with a bot using Javascript.
This project aims to widen and test our knowledge of Javascript, How to create and manage Bots and most importantly how to work with open source projects.
We should try to properly document any additions we are making and try to write the code in the most simple and straight forward way possible.


## Stack used
The stack we are using is Botkit bots framework.
The docs can be found at their official [Github repo](https://github.com/howdyai/botkit "Botkit for slack")
And this is also a quick [tutorial](http://altitudelabs.com/blog/create-a-slackbot-using-botkit/) on how to use Botkit to make and manage slackbots

## Local Setup
To setup this project locally, there are two options:
1. Use Docker (Recommended): A Dockerfile is included in the repository that builds an image for the application. 
Also a docker-compose.yml file has been included which builds the application image and setups all the dependencies required for testing.
 So All you have to do is `docker-compose up` and the bot will be up and running.
2. Install all dependencies: You would need to install nodejs and mongodb locally in your environment. The run `npm start` to start the application.

NOTE: Before running each of the steps, ensure all the required environment variables are set. Look inside `.env.sample` for a list of all required environment variable. 
If you are using docker, you just need to make a copy of `.env.sample` and name it `.env` before running docker compose.


## How it should work
Basically, this is a slack bot. There should be a form of interaction between the user and the bot.
These are a list of use cases that you can pick up and try to document in the bot.
1. As a user, one should be able to ask the bot to start a vote (or poll) and specify voting duration.
2. As a user, one should also be able to tell the bot to stop a poll (or vote) at any time
3. As a user, one should also be able to request for a summary of all the votes ever casted on the group with thier date and duration.
4. During a voting period, the channel to vote in should be specified.
5. We should be able to specify a precise numer of voters expected on a poll in order to avoid spam votes
6. We should be able to specify a form of voting in which me might have a "for or against" vote or a vote where we can give an array of the parameters to be voted for

## Contribution.
You can contribute to this project by simply forking the repo, add your own and send a Pull request.


## Questions? 

You should contact the project co-ordinator in person of Otuoniyo Harny. 

