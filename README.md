question: to create dynamic html for a given json file

what do u need?
node https://nodejs.org/en/download/
react (run the command 'npm i -g create-react-app')

react is used to render the html created with these json files. u need node for running react

how to run: use 'npm start' command

input: currently we have 2 sample input folders in "src/data" namely "mark.json" and "mark2.json"

You can just change the values in json to play with it and it will concurrently render in the html output

also on line 2 in "src/components/Main.js", you can switch the line from "import myJson from "../data/mark2.json";" to "import myJson from "../data/mark2.json";" to switch these inputs
