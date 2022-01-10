// Write a function getUniqNames, which takes an array of string names and 
//returns an array of the same names, but without repetitions.

getUniqNames(['Eileen', 'Peter', 'Jared', 'Robert', 'Robert', 'Robert', 'David']);

function getUniqNames(names) {
    const buffer = new Set(names);
    const result = [...buffer];
    
    console.log(result);
    return result;
}