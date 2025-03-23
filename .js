document.addEventListener("DOMContentLoaded", function () {
    const moodForm = document.getElementById("moodForm");
    const moodList = document.getElementById("moodList");

   
    function loadMoods() {
        moodList.innerHTML = "";
        const moods = JSON.parse(localStorage.getItem("moods")) || [];
        moods.forEach(mood => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${mood.estado}</strong> - ${mood.nota} <em>(${mood.fecha})</em>`;
            moodList.appendChild(li);
        });
    }

     Guardar estado de ánimo
    moodForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const mood = document.getElementById("mood").value;
        const notes = document.getElementById("notes").value;
        const date = new Date().toLocaleString();

        const moodEntry = {
            estado: mood,
            nota: notes || "Sin notas",
            fecha: date
        };

        let moods = JSON.parse(localStorage.getItem("moods")) || [];
        moods.push(moodEntry);
        localStorage.setItem("moods", JSON.stringify(moods));

      
        moodForm.reset();
        loadMoods();
    });

    loadMoods();
});
