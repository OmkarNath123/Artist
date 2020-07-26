class Form{
    constructor(){
    
    }
    display(){
    var title=createElement("h2");
    title.html("Paint what you like");
    title.position(400,0);
    
    var input=createInput("NAME");
    input.position(400,160)
    var button=createButton("PLAY")
    button.position(400,200)
    var greeting=createElement("h3")
    button.mousePressed(function(){
        input.hide();
        button.hide();
    var name=input.value();
    artist.update(name);
    greeting.html("HELLO"+name);
    greeting.position(400,160);
    })
    }
    }