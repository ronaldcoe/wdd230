(function() {
    var questions = [{
      question: "#1 What is Drawing Number One supposed to depict?",
      choices: ["An elephant inside a boa constrictor", 
        "The baobabs", 
        "A hat", 
        "The fox"
        ],
      correctAnswer: 0
    }, {
      question: "#2 Where does the narrator’s plane crash?",
      choices: ["In the Amazon rainforest", 
        "In the Gobi desert", 
        "In the Sahara desert", 
        "On an unnamed island"],
      correctAnswer: 2
    }, {
      question: "#3 What is the first thing the little prince asks of the pilot?",
      choices: ["To help him find the snake", 
        "To draw him a sheep", 
        "To listen to the story of the fox", 
        "To draw a picture of the baobabs"],
      correctAnswer: 1
    }, {
      question: "#4 What is the Earth name for the little prince’s home planet?",
      choices: ["Mars", 
        "Asteroid", 
        "Earth", 
        "Jupiter"],
      correctAnswer: 1
    }, {
      question: "#5 What drawing does the narrator say he worked especially hard on?",
      choices: ["The little prince", 
        "The fox", 
        "The baobabs", 
        "The Saharan landscape"],
      correctAnswer: 2
    }];
    
    var questionCounter = 0; //Tracks question number
    var selections = []; //Array containing user choices
    var quiz = $('#quiz'); //Quiz div object
    function displayCurrentScore() {
        if (localStorage.getItem('score')) {
            let scoreDisplay = document.querySelector('#scoreDisplay')
            scoreDisplay.textContent = `Your previous score was ${localStorage.getItem('score')}`;
        }
    }
    // Display initial question
    displayNext();
    
    // Click handler for the 'next' button
    $('#next').on('click', function (e) {
      e.preventDefault();
      
      // Suspend click listener during fade animation
      if(quiz.is(':animated')) {        
        return false;
      }
      choose();
      
      // If no user selection, progress is stopped
      if (isNaN(selections[questionCounter])) {
        alert('Please make a selection!');
      } else {
        questionCounter++;
        displayNext();
      }
    });
    
    // Click handler for the 'prev' button
    $('#prev').on('click', function (e) {
      e.preventDefault();
      
      if(quiz.is(':animated')) {
        return false;
      }
      choose();
      questionCounter--;
      displayNext();
    });
    displayCurrentScore()
    $('#start').on('click', displayCurrentScore);
    // Click handler for the 'Start Over' button
    
    $('#start').on('click', function (e) {
      e.preventDefault();
      
      if(quiz.is(':animated')) {
        return false;
      }
      questionCounter = 0;
      selections = [];
      displayNext();
      $('#start').hide();
    });
    
    // Animates buttons on hover
    $('.button').on('mouseenter', function () {
      $(this).addClass('active');
    });
    $('.button').on('mouseleave', function () {
      $(this).removeClass('active');
    });
    
    // Creates and returns the div that contains the questions and 
    // the answer selections
    function createQuestionElement(index) {
      var qElement = $('<div>', {
        id: 'question'
      });
      
      var header = $('<h2>Question ' + (index + 1) + ':</h2>');
      // qElement.append(header);
      
      var question = $('<p>').append(questions[index].question);
      qElement.append(question);
      
      var radioButtons = createRadios(index);
      qElement.append(radioButtons);
      
      return qElement;
    }
    
    // Creates a list of the answer choices as radio inputs
    function createRadios(index) {
      var radioList = $('<ul>');
      var item;
      var input = '';
      for (var i = 0; i < questions[index].choices.length; i++) {
        item = $('<li>');
        label = $('<label>')
        input = '<input type="radio" name="answer" value=' + i + ' />';
        input += questions[index].choices[i];
        item.append(input);
        label.append(item)
        radioList.append(label);
      }
      return radioList;
    }
    
    // Reads the user selection and pushes the value to an array
    function choose() {
      selections[questionCounter] = +$('input[name="answer"]:checked').val();
    }
    
    // Displays next requested element
    function displayNext() {
      quiz.fadeOut(function() {
        $('#question').remove();
        
        if(questionCounter < questions.length){
          var nextQuestion = createQuestionElement(questionCounter);
          quiz.append(nextQuestion).fadeIn();
          if (!(isNaN(selections[questionCounter]))) {
            $('input[value='+selections[questionCounter]+']').prop('checked', true);
          }
          
          // Controls display of 'prev' button
          if(questionCounter === 1){
            $('#prev').show();
          } else if(questionCounter === 0){
            
            $('#prev').hide();
            $('#next').show();
          }
        }else {
          var scoreElem = displayScore();
          quiz.append(scoreElem).fadeIn();
          $('#next').hide();
          $('#prev').hide();
          $('#start').show();
        }
      });
    }
    
    // Computes score and returns a paragraph element to be displayed
    function displayScore() {
        var score = $('<p>',{id: 'question'});
      
        var numCorrect = 0;
        for (var i = 0; i < selections.length; i++) {
            if (selections[i] === questions[i].correctAnswer) {
            numCorrect++;
            }
        }
      
        score.append('You got ' + numCorrect + ' questions out of ' +
                   questions.length + ' right!!!');

        localStorage.setItem('score', numCorrect);

        
        return score;
    }
  })();