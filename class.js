class Instructor {
    name;
    designation = 'web instructor'
    team = 'web team'
    location;
    constructor (name,location){
        this.name = name;
        this.location = location;
    }
    startSupportSession (time){
        console.log(`start the support session at ${time}`)
    }

    creatQuiz (module){
        console.log(`please create quiz for module  ${module}`)

    }
}

const maruf = new Instructor('maruf', 'sylhet');
console.log(maruf);
maruf.startSupportSession('9.00 am');
maruf.creatQuiz(40);
