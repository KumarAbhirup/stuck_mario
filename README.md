# `📦 Stuck Mario` Koji Game

Let the Mario not jump out of the circle! Read the instructions on the game start screen.

## 😃 Getting Started

Main code is in *frontend/app/index.js*

I've provided comments in the most important parts of the code, so you don't get lost.

Feel free to modify anything, upgrade the game, add more stuff!

## 🖥️ Spin up the game locally

- Run

```bash
$ git clone <YOUR_REMIXED_REMOTE_URL> <PROJECT_NAME>
$ cd <PROJECT_NAME>/frontend
$ npm i
$ npm start
```

- Visit [https://localhost:8080](https://localhost:8080)

## ⚒️ Customizations

Check out the Koji VCC to see what you can customize.

## ☕ For developers

### Develop locally

- Developing locally on VSCode gives you perks of ESLint and Prettier and having them lint code automatically is fun!

- Just do `git clone <REMOTE_GIT_URL> <PROJECT_NAME>`

- Then do `$ npm i` in the `frontend` and `backend` directories.

- Now, run the `$ env` command in the online Koji editor terminal and copy the result.

- Create `.env` file in the root directory of the project and paste the content in it. Now, your environment variables will be filled with the necessary tokens needed to run the Leaderboard.

- Run `$ npm start` and `$ npm run start-dev` in the `frontend` and `backend` directories respectively.

- That's how you get your local dev environment.

- As per now, there are problems with Leaderboard working locally. But you don't have to worry as Leaderboard will always work when you deploy your changes.

### Save to GitHub

- Create a New Repository

- Run the following commands Local Terminal or on Online Koji Editor terminal

```bash
$ git remote add github https://github.com/<GITHUB_USERNAME>/<REPO_NAME>.git
$ git push -u github master
```

- And now everytime you make changes, do the following

```bash
$ git add .
$ git commit -m "Save changes"
$ git push origin master
$ git push github master
```

- On GitHub, for better development processes, you are advised to use Branches and Pull Requests instead of directly commiting to master. Learn more [here](https://guides.github.com/).

### Deploying the changes made locally

- Run the following commands

```bash
$ git add .
$ git commit -m "Save changes"
$ git push origin master
$ git push github master # <- only if you also maintain a GitHub Repository
```

- Now open the online Koji Editor and get the changes you made by running the following command 👉 `$ git pull origin master`

- To officially deploy your project, you can **Publish the project using the Koji GUI**.

## 🤙 Wanna contribute❓

Just shoot a Pull Request at [the official GitHub repository of this game 📦](https://github.com/KumarAbhirup/stuck_mario)

Or follow me and DM on [Twitter @kumar_abhirup](https://twitter.com/kumar_abhirup) 🙌

Or hit me up on Koji's official Discord server, username: kumar_abhirup 🌱

## 📝 Licence

**GPL © [Kumar Abhirup](https://kumar.now.sh)**

_Follow me 👋 **on Twitter**_ →   [![Twitter](https://img.shields.io/twitter/follow/kumar_abhirup.svg?style=social&label=@kumar_abhirup)](https://twitter.com/kumar_abhirup)

## Credits for assets

Background Sound from [OpenGameArt](https://opengameart.org/content/winds-of-stories).
