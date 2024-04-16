//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores){
        this.name = name
        this.mass = mass
        this.scores = scores
    }
    addScore(newScore){
      this.scores.push(newScore)
    }
    average() {
    let total = 0; 
    for (let i = 0; i < this.scores.length; i++) {
    total += this.scores[i];
    }
      let avg = total / this.scores.length;
    return Math.round(avg*10)/10
    
  }
  status() {
    if (this.average() >= 90) {
      return "Accepted"
      } else if (this.average() >= 80) {
      return "Reserve" 
      } else if (this.average() >= 70) {
      return "Probationary"
    } else {
      return "Rejected"
    }
}
}

let bear = new CrewCandidate("Bubba Bear", "135kg",[88, 85, 90,])
let maltese = new CrewCandidate("Merry Maltese", "1.5kg", [93, 88, 97])
let gator = new CrewCandidate("Glad Gator","225kg",[75, 78, 62])
  

bear.addScore(83)
let counter = 0;
console.log(gator.average());
while (gator.average() < 80) { 
    gator.addScore(100)
    counter++;
}
// It takes 2 loops to reach Reserve and 6 to reach Accepted.

console.log(`${gator.name} earned an average test score of ${gator.average()}% and has a status of ${gator.status()}.`)
console.log(counter)



//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
