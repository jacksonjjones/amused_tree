  var currentDayEl = $('#currentDay');
  var saveBtnEl = $('.saveBtn')
  var timeBlockEl = $('.time-block')
  var descriptionEl = $('.description')

  saveBtnEl.click(function(){

    var timeBlockId = $(this).parent().attr('id');
    var userInput = $(this).siblings('.description').val();
    localStorage.setItem(timeBlockId, userInput);
    
      $('.add-message').removeClass("hidden");
          setTimeout(function(){
          $('.add-message').addClass("hidden");
      },2000);
  });
  
  timeBlockEl.each(function() {
      var currentHour = dayjs().hour();
      var blockHour = parseInt($(this).attr('id').split("-")[1]);

      if (blockHour < currentHour) {
          $(this).addClass('past');
      } else if (blockHour === currentHour) {
          $(this).addClass('present');
      } else {
          $(this).addClass('future');
      }
  });

  descriptionEl.each(function() {
    var timeBlockId = $(this).parent().attr("id");
    var savedData = localStorage.getItem(timeBlockId);
    if (savedData) {
      $(this).val(savedData);
    }
  });

  function displayCurrentDay() {
    var currentDay = dayjs().format('dddd, MMMM D[th]');
    currentDayEl.text(currentDay);
  }

displayCurrentDay();






