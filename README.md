# Project Info

repo: https://github.com/tingedudu8/shein

website: https://tingedudu8.github.io/shein

commits history: https://github.com/tingedudu8/shein/commits/main/

pull requests: https://github.com/tingedudu8/shein/pulls?q=is%3Apr+is%3Aclosed

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

### 2.2 Component Design

#### Library Component

According to the `https://mui.com/material-ui/react-tabs/` used the following component 

`<Tab />` - the tab element itself. Clicking on a tab displays its corresponding panel.
`<Tabs />` - the container that houses the tabs. Responsible for handling focus and keyboard navigation between tabs.

#### Costom Component

`<TabContent />` - the content, which shows when the corresponding tab is selected.

``` jsx
<TabContent value={value} index={idx}>
  children
<TabContent/>
```


`<FoodCard />` - the food card, which renders each dish with a `name`, `price`, `description` and `img-url`.

``` jsx
<FoodCard name={item.name} url={item.url} description={item.description} price={item.price}></FoodCard>
```

### Data Source

all the menu data is stored in local json file `src/data/breakfast-menu.json`, `src/data/dinner-menu.json` and `src/data/lunch-menu.json`.

## 3. Test
use `@testing-library/react` for unit test check if component rendered correctly.

quick example:
``` js
test('renders breakfast dish "bread" on the first screen by default', () => {
  render(<App />);
  const linkElement = screen.getByText(/A fresh handmade bread/);
  expect(linkElement).toBeInTheDocument();
});
```

## 4. CI/CD
### 4.1 create workflow using github actions

create a `.github/workflows/build_and_deploy.yml` file, and establish basic steps.

``` yml
name: Build and Deploy
on: 
  push:
    branches:
      - main
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Install
        run: |
          npm install
      
      - name: Build
        run: |
          npm run build

      - name: Run tests
        run: |
          npm test

      - name: Deploy
        run: |
          npm deploy
```

### 4.2 How to debug github actions easily without massive commits?

Since I am not familiar with github actions, I may need to debug a lot with it. To debug it without massive commits, I tried following solutions: 

- a.  I tried to use a tool called [act](https://github.com/nektos/act) to run and debug your GitHub Actions workflows locally

    1. Install act

    2. Run act

    3. Prepare docker [ will take too much time]

    4. debug

- b. Manual Workflow Dispatch 

    1. Modify workflow yaml, update the trigger section to include workflow_dispatch, so it can be triggered manually

Finally, I realized it's better to create a fix branch to work on the github actions.

  1. create a branch named `fix-ci/cd-deploy`.

  2. modify the yml so that the pipeline can also be triggered when the fix branch is pushed

``` yml
name: Build and Deploy
  on: 
    push:
      # branches:
      #   - main
```

  3. create a pull request when the issue was fixed: https://github.com/tingedudu8/shein/pull/1

### 4.3 integrate ci/cd with github pages deployment
``` yml
- name: Deploy
        env:
            GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          git remote set-url origin https://git:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git
          npm run deploy -- -u "github-actions-bot <support+actions@github.com>"
```

### 4.4 add running test to ci/cd
``` yml
- name: Run tests
        run: |
          npm test
```


# Debug Log

### **issue 1** 

run `gh-pages -d build` succeed on local env, but failed on github actions: 

![debug1 in ci/cd](public/bug_1.png)

error message: `ProcessError: fatal: could not read Username for 'https://github.com': No such device or address`

### **Solution** 

Made changes to the deploy stage to include the user info:
```
- name: Deploy
        env:
            GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          git remote set-url origin https://git:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git
          npm run deploy -- -u "github-actions-bot <support+actions@github.com>"
```


