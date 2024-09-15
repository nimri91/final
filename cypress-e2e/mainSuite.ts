const runner = require("./featuresRunner");
let suites_to_run = process.env.SUITES;

function initialize() {
  console.log(`mainSuite initialize`);
}

if (!suites_to_run) {
  suites_to_run = "smoke";
}

const suites = {
  smoke: [
    // "smoke_suite/general_actions/welcome.feature",
    // "smoke_suite/general_actions/authentication.feature",
    // "smoke_suite/general_actions/authorization.feature",
    // "smoke_suite/general_actions/tagManagement.feature",
    "smoke_suite/general_actions/blogManagement.feature",
  ]
};




let suites_array = suites_to_run.split(",");
let features_promise = new Promise((resolve, reject) => {
  debugger
  let features = [];
  suites_array.forEach((element) => {
    if (suites[element.trim()]) {
      features = features.concat(suites[element.trim()]);
    }
  });
  resolve(features);
});

features_promise.then(async (features: string[]) => {
  console.log(`features_promise: `, features)
  runner.run(features);
});
