class System{

    constructor(){}

    authenticate(actualCode,enteredCode){
        textSize(50);
        fill("red");
        text(code,300,300)
        if(actualCode === enteredCode.toUpperCase()) 
            return true
        else
            return false
    }

}
