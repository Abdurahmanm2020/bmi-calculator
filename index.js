var rangeSlider = function(){
  var slider = $('.row'),
      range = $('.value_range'),
      value = $('.field-text');
    
  slider.each(function(){

    value.each(function(){
      var value = $(this).prev().attr('value');
      $(this).html(value);
    });

    range.on('input', function(){
      $(this).next(value).html(this.value);
    });
  });
};
rangeSlider();

$('#submit').click(function(){
  var h = $('#height').val() / 100;
  var w = $('#weight').val();
  var bmi = h * h ;
  bmi = w/bmi;
  bmi = (bmi).toFixed(1);
  $('#bmiValue').html(bmi + " ");
  if (bmi < 18.5) {
    //Underweight
	
     	$("#my_image").attr("src","under.png");
	 $('#h5').html("you are underWeight and you sloud start eating some more food to put on  some weight");
    $('#bmid').html("Underweight");
  } else if ((18.5 <= bmi) && (bmi <= 24.9)) {
    //Normal weight
	
	$("#my_image").attr("src","notmal.png");
	 $('#h5').html("You are peficly Normal and if you keep on doing what ever you are doing you will stay that way");
    $('#bmid').html("Normal");
  } else if ((25 <= bmi) && (bmi <= 29.9)) {
    //Overweight   
	$("#my_image").attr("src","over.png");
    $('#h5').html("You are Overweight and you need to stop eating or you could becom Obese becerful");
    $('#bmid').html("Overweight");
  } else {
    //Obese
 
 $("#my_image").attr("src","OBESE.png");
    $('#h5').html("You are Obese and you beter start doing something about it befor it get wers. but not to fast");
     $('#bmid').html("Obese");
  }
  console.log(bmi);
});

$('input[type="range"]').change(function () {
 var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
    
    $(this).css('background-image',
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', #FFFFFF), '
                + 'color-stop(' + val + ', #8ED8D1)'
				+ 'color-stop(' + val + ', #666666)'
                + ')'
                );
});

function socialWindow(url) {
  var left = (screen.width - 570) / 2;
  var top = (screen.height - 570) / 2;
  var params = "menubar=no,toolbar=no,status=no,width=570,height=570,top=" + top + ",left=" + left;
  // Setting 'params' to an empty string will launch
  // content in a new tab or window rather than a pop-up.
  // params = "";
  window.open(url,"NewWindow",params);
}


$(document).ready(function() {
    $('#m').click(function() {
        $(this).addClass('m-1');
    });
});

$(document).ready(function() {
    $('#fe').click(function() {
        $(this).addClass('fem-1');
    });
});
$(document).ready(function() {
    $('#submit').click(function() {
        $(this).addClass('submit-1');
    });
});



$(document).ready(function() {
  clockUpdate();
  setInterval(clockUpdate, 1000);
})

function clockUpdate() {
  var date = new Date();
  $('.digital-clock').css({'color': '#000', });
  function addZero(x) {
    if (x < 10) {
      return x = '0' + x;
    } else {
      return x;
    }
  }



  function twelveHour(x) {
    if (x > 12) {
      return x = x - 12;
    } else if (x == 0) {
      return x = 12;
    } else {
      return x;
    }
  }

  var h = addZero(twelveHour(date.getHours()));
  var m = addZero(date.getMinutes());
  var s = addZero(date.getSeconds());

  $('.digital-clock').text(h + ':' + m + ':' + s)
}