const classroom1 = {
    hasTeachingAssistant : true,
    classList : ["teacher1","ATeacher1","Student1","Student2","Student3","Student4"],
  }
  const classroom2 = {
    hasTeachingAssistant : false,
    classList : ["teacher1","Student1","Student2","Student3","Student4"],
  }
  function getStudents(classroom){
    const {hasTeachingAssistant,classList}=classroom;
    console.log(hasTeachingAssistant);
    console.log(classList);
    if(classroom.hasTeachingAssistant === true)
    {
      console.log("has teaching assistant");
      const [v1,v2,...v3]=classList;
      console.log("v1:",v1);
      console.log("v2:",v2);
      console.log("v3:",v3);
    }
    else{
      const [v1,...v2]=classList;
      console.log("v1:",v1);
      console.log("v2:",v2);
    }
  }
  console.log("classroom 1 with assistant");
  getStudents(classroom1);
  console.log("classroom 2 without assistant");
  getStudents(classroom2);