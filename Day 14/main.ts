

// Q 111:

// Use an if-else-if chain to categorize a person's age group (child, teenager, adult).

// Explain & TIP: Age groups can typically be categorized by specific ranges. For instance,
// you might consider anyone under 13 a child, between 13 and 19 a teenager, and 20 or older an adult.

function  categorizeAge(age : number) : string {
    if (age < 13) {
        return "child" ;
    }
    else if(age <= 19) {
        return "teenager" ;
    }
    else {
        return "adult" ;
    }
}
console.log(categorizeAge(11)) ; // child
console.log(categorizeAge(17)) ; // teenager
console.log(categorizeAge(24)) ; // adult

//.........................................................................................................................

// Q 112:

// Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.

// Explain & TIP: The Map object in JavaScript holds key-value pairs and remembers the original insertion order of the keys. 
// It can be more efficient for large sets of data and when the key is not a string.

const countries1 = new Map< string , string > () ;

countries1.set("Cannada" , "Alberta , Manitoba") ; // add canada to the map
countries1.set("Italy" , "Calabria") ; // add italy to the map
countries1.set("Pakistan" , "Islamabad") ; // ad pakistan to the map

console.log(countries1) ;

//...............................................................................................................................

// Q 113:

// Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.

// Explain & TIP: You can check for the presence of a key in a Map with the .has() method and retrieve its value 
//with the .get() method.

const countries = new Map< string , string > () ;

countries.set("Cannada" , "Alberta , Manitoba") ; // add canada to the map
countries.set("Italy" , "Calabria") ; // add italy to the map
countries.set("Pakistan" , "Islamabad") ; // ad pakistan to the map

console.log(countries) ;

function logCapitalOfUSA(countries : Map < string , string >) : void {
    if (countries.has("USA")) {
        console.log(`The capital of USA is ${countries.get("USA")}`) ;
    }
    else {
        console.log("USA is not in the map") ;
    }
}
logCapitalOfUSA(countries) ;

//...........................................................................................................................

// Q 114:
// Iterate over a Map of student IDs and names, and log each pair to the console.

// Explain & TIP: Iterating over a Map can be done using the .forEach() method or a for...of loop, providing access 
//to each key-value pair.

const students = new Map < number , string > () ;
students.set(1 , "Yousra") ; 
students.set(2 , "Uzma") ;
students.set(3 , "Asma") ;
students.set(4 , "Vaniza") ;
students.set(5 , "Niba") ;
students.set(6 , "Haram") ;
students.set(7 , "Sania") ;

students.forEach((name , id) => {
    console.log(`Student ID : ${id} , Name: ${name}`) ;
});

//....................................................................................................................................

// Q 115:

// Use a switch statement to log the days of the week based on a number (1-7).

// Explain & TIP: A switch statement is a great way to select one of many code blocks to be executed. It's particularly 
// useful for scenarios like mapping numbers to days of the week.

function logDayOfWeek (dayNumber : number) : void {
    switch (dayNumber) {
        case 1 : 
        console.log("Sunday") ;
        break ; 

        case 2 : 
        console.log("Monday") ;
        break ; 

        case 3 : 
        console.log("Tuesday") ;
        break ; 

        case 4 : 
        console.log("Wednesday") ;
        break ; 

        case 5 : 
        console.log("Thursday") ;
        break ; 

        case 6 : 
        console.log("Friday") ;
        break ; 

        case 7 : 
        console.log("Saturday") ;
        break ; 
        
        default : console.log("Invalid Day Number") ;

        break ; 
    }
}

// logDayOfWeek(1) ; 
// logDayOfWeek(2) ; 
// logDayOfWeek(3) ;
// logDayOfWeek(4) ;
logDayOfWeek(5) ;   
// logDayOfWeek(6) ;
// logDayOfWeek(7) ;  
