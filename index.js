const core = require('@actions/core');
const github = require('@actions/github');

try {
  // skip if not PR
  if (github.context.action !== "pull_request") {
      console.log("not a PR")
  }


  console.log(`The event payload: ${JSON.stringify(github.context.payload, undefined, 2)}`);
} catch (error) {
  core.setFailed(error.message);
}