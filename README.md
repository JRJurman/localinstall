# localinstall
Pack and install your npm package into itself. This is useful if you want to run
tests against the distributable that other npm users will be using, and not
against the lib / dist in your own build.

## Usage
First install this package using npm
```
$ npm install localinstall --save-dev
```

Then edit your package.json to include the command before your tests
```javascript
"scripts": {
  "pretest": "localinstall",
  "test": "your-tests-here"
}
```
