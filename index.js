const core = require('@actions/core');
const github = require('@actions/github');

try {
  // skip if not PR
  if (github.context.eventName !== "pull_request") {
      console.log("not a PR")
      return
  }
  const pr_payload = github.context.payload.pull_request;
  const token = core.getInput('github-token');
  let added = pr_payload.additions;
  let deleted = pr_payload.deletions;

  if (token == "") {
    throw new Error("no gh token");
  }


} catch (error) {
  core.setFailed(error.message);
}