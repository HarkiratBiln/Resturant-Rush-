class Customer {
    constructor() {


        this.custIMG1 = loadImage("images/man.png");
        this.custIMG2 = loadImage("images/man2.png");
        this.custIMG3 = loadImage("images/women.png");
        this.custIMG4 = loadImage("images/girl.png");

        this.cust = createSprite(200,height/2);
    }


    display() {

        var rand = Math.round(random(1,4));

        switch(rand){
            case 1: this.cust.addImage(this.custIMG1);
            break;
            case 2: this.cust.addImage(this.custIMG1);
            break;
            case 3: this.cust.addImage(this.custIMG1); 
            break;
            case 4: this.cust.addImage(this.custIMG1); 
            break;
        }

    }
}