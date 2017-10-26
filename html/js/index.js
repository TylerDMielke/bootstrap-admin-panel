//This script runs on html button press
//It runs the selected powershell script on the hosting server

const shell = require('node-powershell');

let ps = new shell({
  executionPolicy: 'Bypass',//bypasses the execution policy for the session
  noProfile: true//sets so no Windows PS profile is required
});

//put command or script file location in parenths below
ps.addCommand('echo node-powershell');//This adds the script to a pipeline to be sent to the shell
ps.invoke()//Executes script in the shell
  .then(output => {console.log(output);//Sends any output from the shell to the browser console
  })
  .catch(err => {
    console.log(err);//Sends any errors to the browser console
    ps.dispose();//Releases all resources used by the shell object and closes the shell session
  });
 // console.log("it runs on button click");
