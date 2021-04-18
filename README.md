ISTRAV
========

# clone repository
```fish
$ git clone git@github.com:trabur/istrav.git
$ cd istrav
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

# run istrav locally
```fish
$ npm run install
$ npm run dev
```

# pull latest git changes
```fish
$ git submodule update --recursive
```

# tag a vew version
```fish
$ npm version v0.10

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
npm run trigger:istravUp
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