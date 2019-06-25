export class User {
    constructor(
        public name: string,
        public password: string, 
        public descritpion: string = null, 
        public lastRide: LastRide){}
}


export class LastRide {
    constructor(
    public averageMPH: string = null,
    public miles: string = null,
    public movingTime: string = null){ }
}