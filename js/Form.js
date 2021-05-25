class Form {
    constructor(){
        this.input = createInput("name")
        this.button = createButton("play")
        this.greetings = createElement('h3')
    }
    hide(){
        this.greetings.hide()
        this.input.hide()
        this.button.hide()
    }
    display(){
        var title = createElement('h2')
        title.html("car Racing Game");
        title.position(230,0)

        
        this.input.position(230,260)
        this.button.position(350,300)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            plaayer.name = this.input.value();
            playerCount+=1
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount)
            this.greetings.html("hello "+ player.name)
            this.greetings.position(230,260)
        })

    }
}
