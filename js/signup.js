
document.getElementById("#browse").onclick = function () {
    location.href = "index.html";
};

const actualBtn = document.getElementById('actual-btn');
const fileChosen = document.getElementById('file-chosen');

actualBtn.addEventListener('change', function () {
    fileChosen.textContent = this.files[0].name
})

document.querySelector("#linkLogin").addEventListener("click", e => {
    location.href = "login.html";
});



