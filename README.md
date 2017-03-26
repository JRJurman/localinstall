# localinstall
Pack and install your npm package into itself. This is useful if you want to run
tests against the distributable that other npm users will be using, and not
against the lib / dist in your own build.

**Note**: this may not work in newer versions of Node.T 
To get a similar effect, run `npm link; npm link <package-name>`.

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

Now, in your tests, you can test your package as if it was installed by an end
user.

```javascript
var mypackage = require('mypackage');
...
```
