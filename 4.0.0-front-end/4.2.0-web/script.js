var family = ["Lisa", "Bart", "Meggy", "Hommer", "Marge"]

var students = document.querySelector(".students");

var getStudents = function () {
    kickStudents()
    document.querySelector("h1").innerText = "Students List";
    for (var i = 0; i < family.length; i++) {
        var li = document.createElement("li");
        li.innerText = family[i];
        students.appendChild(li);
    }
}

var clearStudents = function () {
    students.replaceChildren()
    document.querySelector("h1").innerText = "Clear the students";
}


document.querySelector("h1").innerText = "My students list";

var btn = document.querySelector(".container-to-click");
btn.addEventListener('click', getStudents)
btn.addEventListener('dblclick', clearStudents)