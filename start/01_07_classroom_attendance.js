// Write your code here
const classroom1 = {
  hasTeachingAssistant : true,
  classList : ["teacher1","ATeacher1","Student1","Student2","Student3","Student4"],
}
const classroom2 = {
  hasTeachingAssistant : false,
  classList : ["teacher1","Student1","Student2","Student3","Student4"],
}
function getStudents(classroom){
  if(classroom.hasTeachingAssistant === true)
  {
    console.log("has teaching assistant");
  }

}