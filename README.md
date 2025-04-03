# Project Timeline
## Set up app

1. Set up git

run `brew install git` to install git

run `git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"` to set up git user info

run `git init` to create a new repository

run 
- `git remote add origin git@github.com:tingedudu8/test.git`

- `git branch -M main`

- `git push -u origin main` to push an existing repository from the command line


2. Create react app

run `npx create-react-app shein-website` to create react app
clean useless template file

## Implementation

3. import MUI library

run `npm install @mui/material @emotion/react @emotion/styled` to import Material UI to the project

4. add tabs

according to the `https://mui.com/material-ui/react-tabs/` used the following component 

`<Tab />` - the tab element itself. Clicking on a tab displays its corresponding panel.
`<Tabs />` - the container that houses the tabs. Responsible for handling focus and keyboard navigation between tabs.


## CI/CD
1. create workflow using github actions

create a `.github/workflows/build_and_deploy.yml` file

2. How to debug github actions easily?

I tried following solutions

- 2.1 We tried to use a tool called [act](https://github.com/nektos/act) to run and debug your GitHub Actions workflows locally

    - 1. Install act
    - 2. Run act
    - 3. Prepare docker
    - 4. debug

- 2.2 Manual Workflow Dispatch 

    - 1. Modify workflow yaml, update the trigger section to include workflow_dispatch, so it can be triggered manually









