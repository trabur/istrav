ISTRAV
========

# clone repository
```fish
$ git clone git@github.com:trabur/istrav.git
$ cd istrav
```

# pull latest git changes
```fish
$ git submodule update --init --recursive
$ git submodule foreach --recursive git fetch
$ git submodule foreach git merge origin master
```

# create config file
```bash
$ touch .env
```

# .env
then configure the follow env variables:
```bash
PULUMI_ACCESS_TOKEN=""
GITHUB_TOKEN=""
POSTGRESQL_URI=""
SECRET=""
AWS_ACCESS_KEY=""
AWS_SECRET_KEY=""
```

update the rest of the project with .env files
```bash
$ cp .env ./istrav-api/.env
```

# run istrav locally
```fish
$ npm intall

# jumps into each directory and runs npm install
$ npm run init
# jumps into each directory and starts up node.js 
$ npm run dev
```

# tag a vew version
```fish
$ npm version v0.9.2

$ git add .
$ git commit -m ""
$ git push

$ npm run tag
```

# check version tobe deployed
```fish
$ npm run version
```

# release version to production
note: after tagging wait for docker containers to build then run this...
```fish
$ npm run trigger:istravUp
```

# git submodules used
```fish
$ git submodule add https://github.com/trabur/istrav-load-balancer
$ git submodule add https://github.com/trabur/istrav-api
$ git submodule add https://github.com/trabur/istrav-headless
$ git submodule add https://github.com/trabur/istrav-admin
$ git submodule add https://github.com/trabur/istrav-marketing
$ git submodule add https://github.com/trabur/istrav-storefront
$ git submodule add https://github.com/trabur/istrav-channel
$ git submodule add https://github.com/trabur/istrav-forum

$ git submodule add https://github.com/trabur/istrav-tinderbox
```