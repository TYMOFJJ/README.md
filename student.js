const FULLNAME = "Tymofii Lytvynenko";  
const STUDENT_ID = "45442";    

console.log(`My name is ${Tymofii}. My student ID is ${45442}`);

function getStudentFullName() {
    return FULLNAME;
}


function getStudentId() {
    return STUDENT_ID;
}


console.log(`My name is ${getStudentFullName()}. My student ID is ${getStudentId()}`);

module.exports = {
    getStudentFullName,
    getStudentId,
};

function getStudentFullName(id) {
    if (id === 0) {
        return "Twoje Imię i Nazwisko";
    } else if (id === 1) {
        return "Kacper Nowak";
    } else if (id === 2) {
        return "Maja Kowalska";
    } else {
        return "Michal Wisniewski";
    }
}


function getStudentId(id) {
    if (id === 0) {
        return "Twój Numer Albumu";
    } else if (id === 1) {
        return "111222";
    } else if (id === 2) {
        return "222333";
    } else {
        return "333444";
    }
}


module.exports = {
    getStudentFullName,
    getStudentId,
};