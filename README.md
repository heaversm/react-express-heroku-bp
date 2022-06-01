# React Express Heroku Boilerplate

This is a basic starter for React (Create React App) and Express, to be deployed on Heroku. You can follow [this gist](https://gist.github.com/heaversm/1db85cf40bfb6e6157d7fe442e24aa4d) to create this from scratch or see how it was built.

It is designed to implement a backend API that can query external APIs with axios. 

## TO GET STARTED:


* Make a copy of `env-sample` as `.env` and fill it with the API key for your desired service (if any). 
* In the root directory, run `npm i` then `npm start`
* In the `client` directory, run `npm i` then `npm start`
* View your app at [localhost:3000](https://localhost:3000)

## TO DEPLOY

* Make an app in heroku (e.g. `insert-your-app-name-here`)
* Add any required environment variables from `.env` to heroku (settings > config vars)
* Commit all your code to git
* Install (`sudo npm i -g heroku`) and log in to the heroku cli and push your code to your heroku app

```
heroku login
heroku git:remote -a insert-your-app-name-here
git push heroku main
```

