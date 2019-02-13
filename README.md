# The Jenkins X Files - Scully

<div style="text-align:center"><img src ="doc/dana_scully.jpg" /></div>

`scully` is the frontend side of [The Jenkins X Files](https://the-jenkins-x-files.github.io/) - the [Jenkins X](https://jenkins-x.io/) workshop. You can also see [Mulder](https://github.com/the-jenkins-x-files/mulder), the backend side.

It's a React application that provides a (very) basic UI with one page.

- `http://127.0.0.1:3000` to go to the UI

**Dependencies**:

- [Mulder](https://github.com/the-jenkins-x-files/mulder) - to store the quotes

**Dev env**:

- `npm install`
- `npm start`

**Building**:

- `npm install`
- `npm run build`

**Running**:

- build the project with `npm install` & `npm run build`
- and serve your files with `node server.js`

**Env variables**:

When your running `node server.js`, you can add an env variables

- `SERVER` (string): host:port of the mulder instance. Default: `http://127.0.0.1:8080`
- `PORT` (string): node server port. Default: `3000`

For example

```
SERVER=http://mulderscully.com node server.js
```

**Unit Tests**:

- `npm test`

## Thanks

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).