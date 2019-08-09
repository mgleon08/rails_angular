# Onboarding Task

## Environment

* Ruby version 2.2.3
* Rails version 4.2.7
* Node version v12.8.0
* Npm 6.10.3
* angular 1.7.8
* angular-ui-router 1.0.22

## Database MongoDB

```
docker-compose up -d
```

## Setup

### Install Gem

```
bundle install
```

### Install npm

```
npm install
```

### Run

```
rails s
```

```
http://localhost:3000/users
```

## Test

### RSpec

```
rspec
```

### Angular Protractor

install [java](https://www.oracle.com/technetwork/java/javase/downloads/index.html) first

```
npm install -g protractor
```

```
webdriver-manager update
webdriver-manager start
```

```
protractor spec/protractor/conf.js
```

# Reference

* [karma](http://karma-runner.github.io/2.0/dev/git-commit-msg.html)
* [protractortest](http://www.protractortest.org/#/tutorial)
* [git-flow](https://nvie.com/posts/a-successful-git-branching-model/)
* [relishapp](https://relishapp.com/rspec)
* [betterspecs](http://www.betterspecs.org/)
* [angular guide](https://docs.angularjs.org/guide)
