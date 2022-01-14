function validation() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email == "rezawijdanridwana07@gmail.com" && password == "12345678") {
    alert("Anda berhasil login.");
    return true;
  } else if (email == "" && password == "") {
    alert("Email dan Password tidak boleh kosong!");
  } else {
    alert("Email atau Password yang Anda Masukan Salah!");
  }
}
