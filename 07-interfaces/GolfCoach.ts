import {Coach} from './Coach'

export class GolfCoach implements Coach {

    getDailyWorkout(): string {
        return "GolfCoach: Hit 100 balls at the golf range.";
    }
    
}