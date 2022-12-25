$(document).ready(function() {
  // Ekle butonuna tıklandığında
  $('#vitrinurunuekle').click(function() {
// Yeni bir .vitrinuruneklecol sınıfına sahip div oluştur
    var newCol = $('<div class="col vitrinuruneklecol">' +
                      '<div>' +
                        '<div class="vitrin-urunu-background"><input class="form-control vitrinurunuekleinput" type="file" name="image" /></div>' +
                        '<div class="mb-2"><label class="form-label">Ürün Başlığı</label><input class="form-control" type="text" /></div>' +
                        '<div class="mb-2"><label class="form-label">Mağaza Bağlantısı</label><input class="form-control" type="url" /></div>' +
                      '</div>' +
                      '<button class="btn btn-primary myoutlinebutton w-100 mb-3 vitrinurunusilbutton" type="button">Sil</button>' +
                    '</div>');
    // Oluşturulan div'i .vitrinuruneklerow sınıfına sahip div'e ekle
    $('.vitrinuruneklerow').append(newCol);
  });
  
  // File input'a tıklandığında
  $('.vitrinurunuekleinput').click(function() {
    // Seçilen görseli almak için FileReader nesnesi oluşturulur
    var reader = new FileReader();
    
    // Görsel yüklendiğinde
    reader.onload = function(e) {
      // Görselin URL'si alınır
      var imageURL = e.target.result;
           // .vitrin-urunu-background sınıfına sahip div'in arkaplan görseli olarak gösterilir
      $(this).closest('.vitrin-urunu-background').css('background-image', 'url(' + imageURL + ')');
    }
    
    // Seçilen görsel yüklenir
    reader.readAsDataURL(this.files[0]);
  });
  
  // Sil butonuna tıklandığında
  $('.vitrinurunusilbutton').click(function() {
    // .col sınıfına sahip div silinir
    $(this).closest('.vitrinuruneklecol').remove();
  });
});

