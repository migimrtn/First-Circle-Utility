# First-Circle-Utility
 First Circle Exam Utility (HTML, CSS, JS)

The following web application is developed using HTML, CSS, and JavaScript. HTML was used for the structure of the webpage while CSS was used for styling the buttons, table, and the aesthetic of the webpage. JavaScript was used for the backend as it included the functions for fetching the API URL and for the functionality of the frontend buttons such as downloading for JSON and CSV as well as printing to the browser's console. 

To access the utility:

You will need:
1. Visual Studio Code
2. NodeJS and its dependencies
3. Live Server (VS Code Package)
4. GitHub

NodeJS was used to run a local server and access the API URL, while the Live Server Package was used for viewing the web page itself while implementing the frontend code.

Upon installing the needed dependencies, I prepared a folder for the font that I wanted to use and imported it to the directory of the project.

I started working on the HTML structure so that I can setup the buttons, table, headers, and initial structure of the page. Once done, I worked on the backend task and assigned functions to the buttons for download and print. The fetch function was then implemented and integrated with the API URL and it was incorporated with a for loop structure so that I can fetch data from the URL 15 times as needed. The fetched data was passed to the front end for table display and to complete the function of the buttons.

Lastly, the design of the webpage was implemented through CSS to enhance the user experience and to display the data with clarity.

To inspect the source codes for the webpage:
FRONT END:
index.html - HTML Source Code
style.css - CSS Source Code

BACK END:
script.js - JavaScript Source Code
server.js - JavaScript Source Code

To access the code using GitHub, the link shared with you allows you to view my Git Repository and download the zip file so that you can open the folder in Visual Studio Code and install the dependencies needed.

To Run the Front End Application:
1. The webpage will automatically fetch 15 data from the API URL.
2. 3 Buttons are available: Download JSON, Download CSV, and Print to Console.
3. Download JSON - It will initiate a download file called boredapi.json which contains the data displayed in the table in JSON format.
4. Download CSV - It will initiate a download file called boredapi.csv which contains the data displayed in the table in CSV format.
5. Print to Console - It will print the data displayed to the browser's console.

Should the table display "N/A", it means that the API URL is at request limit.
