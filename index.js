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
  let added = parseInt(pr_payload.additions);
  let deleted = parseInt(pr_payload.deletions);

  if (token == "") {
    throw new Error("no gh token");
  }

  const octokit = github.getOctokit(myToken)

  if (added > deleted) {
      octokit.rest.issues.createComment({
        issue_number: pr_payload.number,
        owner: github.context.repo.owner,
        repo: github.context.repo.repo,
        body: "add code"
      })
  } else {
    octokit.rest.issues.createComment({
        issue_number: pr_payload.number,
        owner: github.context.repo.owner,
        repo: github.context.repo.repo,
        body: "del code"
      })
  }

} catch (error) {
  core.setFailed(error.message);
}