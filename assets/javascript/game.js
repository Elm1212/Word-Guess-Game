
//variables//


    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

//create array of words//
    var wordList = [
        "rose",
        "lily",
        "sunflower",
        "tulip",
        "daisy",
        "dahilia",
        "begonia",
        "daffodil",
        "carnation",
        "irises"
    ];

    const maxTries = 10;

    //stores letters used//
    var guessedLetters = [];

    //index of current word in the array//
    var wordIndex;
    
    //word we build//
    var answerWord = [];

    //how many guesses player has left//
    var remainingGuesses = 0;

    //alert to tell you if game started//
    var startGame = false;

    //alert "press any key to try again"//
    var finishedGame = false;

    var wins = 0;

    //restart game//
    function resetGame() {
        remainingGuesses = maxTries;
        startGame = false;
        wordIndex = Math.floor(Math.random() * (wordList.length));
        guessedLetters = [];
        answerWord =[];
        for (var i = 0; i <wordList[wordIndex]. length; i ++) 
            answerWord.push ("_");
        }

        console.log (resetGame)
    

   





    


// might need command.....window.onload = function (){

    //if (guessesLeft <= 10 {

        //function alphabetChecker(x) {
            //var vowels = ['a', 'e', 'i', 'o', 'u']
            //if (vowels.indexOf(x) !== -1) {
              //console.log("Found at index:" + //vowels.indexOf(x))//
            
