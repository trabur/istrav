require('dotenv').config()

const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

let owner = 'trabur'
let repo = 'istrav-tinderbox'
let workflowId = 'istrav-up.yml'
let istravPackage = require('./package.json')

async function main () {
  // https://octokit.github.io/rest.js/v18#actions
  let response = await octokit.rest.actions.createWorkflowDispatch({
    owner: owner,
    repo: repo,
    workflow_id: workflowId,
    ref: 'master',
    inputs: {
      stackId: 'istrav.com',
      planId: 'tardigrade',
      VERSION: `v${istravPackage.version}`,
      ACK_DOMAIN: 'hacktracks.org',
      HEADLESS_DOMAIN: 'farmerless.com',
      POSTGRESQL_URI: process.env.POSTGRESQL_URI,
      SECRET: process.env.SECRET,
      AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
      AWS_SECRET_KEY: process.env.AWS_SECRET_KEY
    }
  })
  
  console.log('response', response)
}

main()