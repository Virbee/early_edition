#!/usr/bin/env bash

npm run build-front
git add early-edition-back/public
git commit -m "Deploy to heroku"
git push heroku master
