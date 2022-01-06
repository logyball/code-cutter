const core = require('@actions/core');
const github = require('@actions/github');

try {
    console.log(`context: ${github.context}`)

  // skip if not PR
  if (github.context.action !== "pull_request") {
      console.log("not a PR")
      return
  }
  const pr_payload = github.context.payload.pull_request

  let added = JSON.parse(pr_payload.body).additions
  let subbed = JSON.parse(pr_payload.body).deletions

  console.log(`The event payload: ${JSON.stringify(github.context.payload, undefined, 2)}`);
  console.log(`additions: ${added}`);
  console.log(`deleted: ${subbed}`);


} catch (error) {
  core.setFailed(error.message);
}