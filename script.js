document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("message").innerHTML = "Kocham cię Asiu";
    document.getElementById("message").classList.remove("hidden");
});

document.getElementById("noBtn").addEventListener("click", function() {
    document.getElementById("message").innerHTML = "Może następnym razem...";
    document.getElementById("message").classList.remove("hidden");
});