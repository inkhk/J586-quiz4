var students = ["Joe", "Jack", "Jane", "Jill"];
var gradeMean = [90, 68, 92, 88];

var lowest = Number.MAX_VALUE;
var lowestStudent = 0;

for (var i = 0; i < students.length; i++){
  if(gradeMean[i] < lowest){
    lowest = gradeMean[i];
    lowestStudent = students[i];
  }
}


document.getElementById("result").innerHTML = "<p>" + lowestStudent + " has the lowest score of " + lowest +"</p>";
//Using the data above write a JavaScript that is linked to an html page that determines who has the lowest score.
//Write the answer in sentence form that includes both the name of the student and the score they have.
//Write the answer to both the console and the html page using the document write or other command.
