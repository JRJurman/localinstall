exports.localinstall = function() {
  var exec = require('child_process').exec;
  // run npm pack
  exec('npm pack', function( error, stdout, stderr ) {
    if (error !== null) {
      throw error;
    }

    var stdoutList =  stdout.split('\n');

    // remove all the empty stdout lines
    var cleanStdout = stdoutList.filter(function( line ) {
      return line !== '';
    });

    // get the name of the tarball created
    var tarball = cleanStdout.pop();

    // npm install the tarball
    exec('npm install ' + tarball, function( error, stdout, stderr ) {
      if (error !== null) {
        throw error;
      }

      // remove tarball
      exec('rm ' + tarball, function( error, stdout, stderr ) {
        if (error !== null) {
          throw error;
        }
      });

    });

  });

}
