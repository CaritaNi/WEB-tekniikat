let courses = [];

document.querySelector("lisää").addEventListener("click", lisää);
document.getElementById("lista").addEventListener("click", lista);

function addCourse(){
    // Haetaan tiedot kentistä
    let cname = document.getElementById("course").value;
    let sNum = document.getElementById("studentNum").value;

    // Luodaan tiedoista olio
    let course = {
    course_name : cname,
    student_num : sNum
    }
    // Lisätään olio taulukkoon
    courses.push(course);
}

function lista(){
    // Käydään läpi kaikki kurssit taulukosta
    courses.forEach( course => {
        // Luodaan kurssille list item
        let li = document.createElement("li");
        // Lisätään itemiin kurssin tiedot oliosta
        li.textContent = "Course" + course.course_name + " has " + course.student_num + 
            "registered"

        // lisätään list itemit olioon
        document.querySelector("ul").appendChild(li);
        
    } );
}