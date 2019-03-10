function startGame(){

    //1-  Make Var For Input Value
    var guessword = document.getElementById("guessword").value;
    console.log(guessword);
    var btn =document.getElementById("checkbtn");
   // Create another array to store good guesses
   var secret = [];
   // Create a variable to store the number of bad guesses
   var strikes = 0;
   function check ()
   {
    if (word==null || word=='')
        {
            word=input.value;
            input.value="";
            input.placeholder="Player 2, Guess a letter";
            btn.innerHTML="guess";
        }
    }

   // Fill this array with placeholders for guessing
   for (i = 0; i < guessword.length; i++)
   {
     secret.push("_");
   }
   // Start a loop that continues as long as the person has
   // not guessed wrong three times, or all of the letters have
   // been guessed.
   while (strikes < 3 && secret.indexOf("_") >= 0) {
   
     // Prompt Player 2 to guess a letter and store as
     // a variable.
     var letter = prompt(secret.join(" ") + "\n\n" + "Player 2, Guess a letter.");
   
     // If the letter does not exist in the word,
     // add it to the bad guesses.
     if (guessword.indexOf(letter) < 0) {
       // add a strike
       strikes++;
       alert("Bad guess!");
   
     // If the letter exists in the word, we need to
     // add it to the good guesses array
     } else {
       for (i = 0; i < guessword.length; i++) {
         // Each time the guess letter is found, we
         // add it as a good guess in the same spot
         if (guessword[i] === letter) {
           secret[i] = letter;
         }
       }
     }
   }
   
   // Once the player has exited the loop, congratulate
   // them on a win, or tell them they have lost and show
   // the secret word.
   if (strikes === 3) {
     alert("Sorry, please play again!");
   } else {
     alert("Congratulations on your win!");
   }
   alert("The secret word was " + guessword);
   
   }
   
   