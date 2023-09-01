import { GolfCoach } from "./GolfCoach";
import { CricketCoach } from "./CricketCoach";
import { Coach } from "./Coach";

let golfCoach = new GolfCoach();
let cricketCoach = new CricketCoach();

let theCoaches : Coach[] = [];

theCoaches.push(golfCoach);
theCoaches.push(cricketCoach);

for(let coach of theCoaches) {
    console.log(coach.getDailyWorkout());
}