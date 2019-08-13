// Problem 1:
// Create a GitHubRepository class with properties userName, fileName, descriptionOfRepository, and code.
// Create a function that prints all properties. Create an object of the class and use the function.
//
class GitHubRepository{
    constructor(userName, fileName, descriptionOfRepository, code){
        this.userNamep= userName;
        this.fileNamep = fileName;
        this.descriptionOfRepositoryp = descriptionOfRepository;
        this.codep = code;
    }
    printRepos(){
        console.log(this.userNamep);
        console.log(this.fileNamep);
        console.log(this.descriptionOfRepositoryp);
        console.log(this.codep);

}
}

let myRepos = new GitHubRepository("Tad", "Milky Way", "coding the milky way", "JavaScript");
myRepos. printRepos();
// Problem 2:
// Create a Movie class with the following properties: movieName, rating, and yearReleased.
// Create a method to change the rating and another one to change the yearReleased properties.
// Create an object of the class and use the two methods you created.

class Movie{
    constructor(movieName, rating, yearReleased){
        this.movieNamep= movieName;
        this.ratingp = rating;
        this.yearReleasedp = yearReleased;
    }
    changeRating(rating){
        this.ratingp = rating;
    }
    anotherYearReleased(yearReleased){
        this.yearReleasedp = yearReleased;
    }
}

// let movieProperties =
//     {
//        rating:"PG 16",
//         yearReleased:"2009"
// };

let myMovie = new Movie("Alien 3", "Adult", "2009");
console.log(myMovie.yearReleasedp);
myMovie.anotherYearReleased("2013");
console.log(myMovie.yearReleasedp);
myMovie.changeRating("PG 16");
console.log(myMovie.ratingp);