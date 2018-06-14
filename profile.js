//Require https and http module
const https = require('https');
const http = require('http');

//Print error
function print_error(error_object) {
  console.error(error_object.message);
}

//Function to print message to console
function printMessage(username, badgeCount, points) {
  const message =`${username} has ${badgeCount} total badge(s) and ${points} points in Javascript`;
  console.dir(message);
 }

function get(username) {
    //Connect to the API URL
try {
      const request =https.get(`https://teamtreehouse.com/${username}.json`, response => {
          if (response.statusCode == 200) {
                //read the data
               let body = "";
      		     response.on("data", data => {
                    body += data.toString();
                })
                response.on("end", () => {
                  try {
                  const profile = JSON.parse(body);
                  printMessage(username, profile.badges.length, profile.points.JavaScript);
                } catch (error) { print_error(error) };
                  //parse the data
                  //Print the data
                })
            } else {
                    const message = `There was an error getting profile for ${username} (${http.STATUS_CODES[response.statusCode]})`;
                    const statusCodeError = new Error(message);
                    print_error(statusCodeError);
                    }

          });

          request.on("error", error => {
            print_error(error);
          })
      } catch (error){
            print_error(error);
          }

}
module.exports.get=get;
