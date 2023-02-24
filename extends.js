class TeamMember {
    name;
    location;
    tech;  
    constructor(name,location){
        this.name=name;
        this.location=location;
        this.tech=this.tech;
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback.`)
    }
}


class Instructor extends TeamMember {
    
    designation = 'web instructor'
    team = 'web team'
    
    constructor (name,location){
        super(name,location);
    }
    startSupportSession (time){
        console.log(`start the support session at ${time}`)
    }

    creatQuiz (module){
        console.log(`please create quiz for module  ${module}`)

    }
    
}


// developer class
class Developer extends TeamMember {
    
    designation = 'web instructor'
    team = 'web team'
    tech;
    constructor (name,location,tech){
        super (name,location)
        this.tech = tech;
    }
    developeFeature (feature){
        console.log(`please develope the feature  ${feature}`)
    }

    release (version){
        console.log(`please relese the version  ${version}`)

    }
    
}

// job placement class

class JobPlacement extends TeamMember {
    designation = 'job placement instructor'
    team = 'job placement'
    region;
    constructor (name,location,region){
        super (name,location);
        this.region = region;
    }
    provideResume (feature){
        console.log(`please develope the feature  ${feature}`)
    }

    prepareStudent (version){
        console.log(`please relese the version  ${version}`)

    }
}

const maruf = new Developer ('Sayed Al Maruf','sylhet','React.JS');
console.log(maruf)
maruf.provideFeedback()