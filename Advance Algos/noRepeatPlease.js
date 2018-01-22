/*Return the number of total permutations of the provided string that don't have repeated consecutive letters. 
Assume that all characters in the provided string are each unique.
For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), 
but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.*/


/*function generate(n, array) {
//console.log("ENTER", n, array)

if (n == 1) {

    console.log(array);
}

else {

    for (var i = 0; i < n - 1; i++) {
        //console.log("RECUR", n-1, array)


        generate(n - 1, array);

        if (n % 2 == 0) {
            //console.log("SWAP ", n, array)

            var one = array[i];
            var two = array[n - 1];

            array[i] = two;

            array[n - 1] = one;

            //swap(array[i], array[n - 1]);
        }

        else {
            //console.log("SWAP ", 0, n-1)

            var first = array[0];
            var second = array[n - 1];

            array[0] = second;

            array[n - 1] = first;


            //swap(array[0], array[n - 1]);
        }
         //console.log("array", array)
    }

    //console.log("RECUR 2", n-1, array)

    generate(n - 1, array);
}
}
generate(3,['a','b','c']);
//console.log("LEAVE", n, array)*/
function permAlone(str) {

  // Create a regex to match repeated consecutive characters.
  var regex = /(.)\1+/g;

  // Split the string into an array of characters.
  var arr = str.split('');
  var permutations = [];
  var tmp;

  // Return 0 if str contains same character.
  if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;

  // Function to swap variables' content.
  function swap(index1, index2) {
    tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  }

  // Generate arrays of permutations using the algorithm.
  function generate(int) {
    if (int === 1) {
      // Make sure to join the characters as we create  the permutation arrays
      permutations.push(arr.join(''));
    } else {
      for (var i = 0; i != int; ++i) {
        generate(int - 1);
        swap(int % 2 ? 0 : i, int - 1);
      }
    }
  }

  generate(arr.length);

  // Filter the array of repeated permutations.
  var filtered = permutations.filter(function(string) {
    return !string.match(regex);
  });

  // Return how many have no repetitions.
  return filtered.length;
}

// Test here.
permAlone('aab');