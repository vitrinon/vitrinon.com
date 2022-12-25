document.getElementById("badgetextarea").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // enter tuşunun standart işlevini engelleme
    // textarea içerisinde yazılan kelimeyi alma
    var kelime = this.value.trim();
    // kelimeyi kullanarak badge oluşturma
    var badge = document.createElement("span");
    badge.classList.add("badge");
    badge.textContent = kelime;
    // badge içerisinde silme butonu oluşturma
    var silButonu = document.createElement("button");
    silButonu.textContent = "Sil";
    silButonu.addEventListener("click", function() {
      // silme butonuna tıklandığında badge'i silme
      badge.remove();
    });
    badge.appendChild(silButonu);
    // badge'i ekrana ekleme
    document.body.appendChild(badge);
    // textarea'yı temizleme
    this.value = "";
  }
});
