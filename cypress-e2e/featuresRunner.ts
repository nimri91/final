const { exec } = require("child_process");
const fs = require("fs");

const mainDir = "cypress/features/";
let features_queue: string[] = [];

function run(features: string[]) {
  console.log("list of features to run: ", features);
  features.map((feature) => {
    runFeature(feature)
  })
}

function runFeature(featureName) {
  console.log(`runNewFeature(${featureName})`);
  console.log(`featureRunning Start Running ${featureName}`);
  const chrome_path: string = process.env.CI ? "/usr/bin/google-chrome" :  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
  const mac_exec_cmd = `cypress run -b "${chrome_path}" --headed --env allure=true --config specPattern='**/${mainDir}/${featureName}'`;
  const linux_exec_cmd = `CYPRESS_NO_COMMAND_LOG=1 CYPRESS_BASE_URL=${process.env.CYPRESS_BASE_URL} ./node_modules/.bin/cypress run --headed --browser /usr/bin/google-chrome --env allure=true,MAILTRAP_INBOX_ID=${process.env.MAILTRAP_INBOX_ID},MAILTRAP_ACCOUNT_ID=${process.env.MAILTRAP_ACCOUNT_ID},MAILTRAP_API_KEY=${process.env.MAILTRAP_API_KEY} --config specPattern='**/${mainDir}/${featureName}'`;
  const exec_cmd = process.env.CI ? linux_exec_cmd :  mac_exec_cmd;
  exec( exec_cmd , (error, stdout, stderr) => {
      console.log(`stdout: ${stdout}`);
      if (stderr) {
        console.error(`stderr: ${stderr}`);
      }
      if (error) {
        console.error(`error: ${error}`);
      }
    }
  );
  return true;
}


module.exports = { run };
