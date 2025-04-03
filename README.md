# Project Timeline
## 1. Set up app

### 1.1 Set up git

run `brew install git` to install git

run `git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"` to set up git user info

run `git init` to create a new repository

run 
- `git remote add origin git@github.com:tingedudu8/test.git`

- `git branch -M main`

- `git push -u origin main` to push an existing repository from the command line


### 1.2 Create react app

run `npx create-react-app shein-website` to create react app
clean useless template file

## 2. Implementation

### 2.1 import MUI library

run `npm install @mui/material @emotion/react @emotion/styled` to import Material UI to the project

### 2.2 add tabs

according to the `https://mui.com/material-ui/react-tabs/` used the following component 

`<Tab />` - the tab element itself. Clicking on a tab displays its corresponding panel.
`<Tabs />` - the container that houses the tabs. Responsible for handling focus and keyboard navigation between tabs.


## 3. CI/CD
### 3.1 create workflow using github actions

create a `.github/workflows/build_and_deploy.yml` file

``` yml
- name: Build
        run: |
          npm run build
```

### 3.2 How to debug github actions easily?

I tried following solutions

- 3.2.1 We tried to use a tool called [act](https://github.com/nektos/act) to run and debug your GitHub Actions workflows locally

    - 1. Install act
    - 2. Run act
    - 3. Prepare docker
    - 4. debug

- 3.2.2 Manual Workflow Dispatch 

    - 1. Modify workflow yaml, update the trigger section to include workflow_dispatch, so it can be triggered manually

### 3.3 integrate ci/cd with github pages deployment
``` yml
- name: Deploy
        env:
            GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          git remote set-url origin https://git:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git
          npm run deploy -- -u "github-actions-bot <support+actions@github.com>"
```

# 4. Debug

## 4.1 
![debug1 in ci/cd](public/bug_1.png)
ProcessError: fatal: could not read Username for 'https://github.com': No such device or address

How to fix:

Made changes to the deploy stage
- name: Deploy
        env:
            GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          git remote set-url origin https://git:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git
          npm run deploy -- -u "github-actions-bot <support+actions@github.com>"




# Debug

1. 
![debug1 in ci/cd](public/bug_1.png)
ProcessError: fatal: could not read Username for 'https://github.com': No such device or address

How to fix:

Made changes to the deploy stage
- name: Deploy
        env:
            GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          git remote set-url origin https://git:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git
          npm run deploy -- -u "github-actions-bot <support+actions@github.com>"










