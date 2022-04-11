const obj = {
  name: "Daniil",
  age: 20,
  skills: {
    school: {
      position: "pupil",
      experience: 12,
      start_time: new Date('September 1, 2008'),
      graduation_time: new Date('June 20, 2020'),
    },
    university: {
      position: "student",
      experience: 2,
      start_time: new Date('September 1, 2020'),
      graduation_time: new Date('July 10, 2024'),
    },
    endava: {
      position: "intern",
      experience: 2,
      start_time: new Date('March 16, 2022'),
      graduation_time: new Date('June 20, 2022'),
    },
  },
  calculateAge: function (param) {
    return param;
  },
};

const createDeepCopy = object => {
  
  if (object === null){
    return object
  }

  if (object instanceof Date) {
    return new Date(object.getTime()); 
  }

  if (typeof object !== "object") {
    return object; 
  }

  const objectCopy = Array.isArray(object) ? [] : {};

  for (const key in object) {
    const value = object[key];
    objectCopy[key] = createDeepCopy(value); 
  }

  return objectCopy;
};

const objDeepCopied = createDeepCopy(obj);

objDeepCopied.name = "Daniel";
objDeepCopied.skills.school.position = "graduated";

console.log(obj, objDeepCopied);

console.log(typeof objDeepCopied.skills.endava.graduation_time)

