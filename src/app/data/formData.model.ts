export class FormData {
    userLevel  = '';
    areaOptions  = '';
    pathOptions  = '';
    pathContent = '';

    clear() {
    this.userLevel = '';
    this.areaOptions = '';
    this.pathOptions = '';
    this.pathContent = '';
    }
}
// "Select Trek Level S=>1"
export class Start {
    userLevel  = '';
}

// Choose area od Trek S=>2
export class Area {
    areaOptions  = '';
}

// View Journey options and information S=>3
export class Journey {
    pathOptions  = '';
}
