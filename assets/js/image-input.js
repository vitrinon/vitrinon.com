function getval(sel) {          
       	if (sel.files && sel.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
         /* $('<img class="preview" src="'+e.target.result+'" alt="your image" />').insertAfter(sel);*/
          $(sel).closest('.img-upload-btn').css('background-image','url('+e.target.result+')' )
          $('<button class="btn btn-link deletor" onclick="deletor(this);"><small><i class="fas fa-times"></i></small></button>').insertAfter(sel);
        //$(sel).css('visibility','hidden')
        }

        reader.readAsDataURL(sel.files[0]);
    }

        $('.col-sm-12').append('<div class="form-group col-sm-11"><div class="img-picker"><div class="form-control btn btn-default btn-block img-upload-btn"><i class="fas fa-plus"></i><input type="file" name="images" onchange="getval(this);"></div></div></div>');
    }
function deletor(id){
  $(id).closest('.col-sm-11').remove();
}



$(document).ready(function() {
  $('#kapakfoto-input').change(function() {
    var file = this.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
      $('#kapakfoto-preview').css('background-image', 'url(' + reader.result + ')');
    }
    if (file) {
      reader.readAsDataURL(file);
    } else {
      $('#kapakfoto-preview').css('background-image', '');
    }
  });
});


$(document).ready(function() {
  $('.addfileicon').click(function() {
    $('#kapakfoto-input').click();
  });
});



$(document).ready(function() {
  $('#kapakfoto-input-1').change(function() {
    var file = this.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
      $('#kapakfoto-preview-1').css('background-image', 'url(' + reader.result + ')');
    }
    if (file) {
      reader.readAsDataURL(file);
    } else {
      $('#kapakfoto-preview-1').css('background-image', '');
    }
  });
});


$(document).ready(function() {
  $('.addfileicon-1').click(function() {
    $('#kapakfoto-input-1').click();
  });
});


