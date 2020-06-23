//function getTempCallback (location, callback) {
    // happy path
//   callback(undefined, 78);
   // error
//}

//getTempCallback('Philadelphia', function(err, temp){
//  if(err) {
//    console.log('error', err);
//  } else {
//    console.log('success', temp);
//  }
//});

// function getTempPromise(location) {
//   return new Promise(function(resolve, reject)
//     { setTimeout(function() {
//       resolve(79);
//       reject('City not found.');
//     }, 1000);
//     });
//   }
//
//   getTempPromise('Philadelphia').then(function(temp) {
//     console.log('Promise success', temp);
//   }, function (err) {
//     console.log('Promise error', err);
//   })

function addPromise(a, b) {
  return new Promise(function(resolve, reject)
  { setTimeout(function() {
      if(typeof a === 'number' && typeof b === 'number') {
        resolve(a+b);
      } else {
        reject('At least one input is not a number.');
      }
    }, 1000);
  });
  }

  console.log('1st test');
  
  addPromise(4,6).then(function(temp) {
    console.log('Promise success:', temp);
  }, function (err) {
    console.log('Promise error:', err);
  });

  console.log('2nd test');

  addPromise(4,'Foobar').then(function(temp) {
    console.log('Promise success:', temp);
  }, function (err) {
    console.log('Promise error:', err);
  });
