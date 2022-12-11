function kirim(){
    let inpNama = document.getElementById("username").value;
    let inpPassword = document.getElementById("password").value;
    let form = document.getElementById("form");
    if (inpNama == "ahmad2017" && inpPassword == "integrity") {
        form.setAttribute("action", "dashboard.html");
        window.alert("Login Berhasil");
    } else {
        window.alert("Login Gagal");
    }
    console.log(inpNama + inpPassword)
}