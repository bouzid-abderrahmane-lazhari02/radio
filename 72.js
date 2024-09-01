class Color{
    constructor(){
    
    this.button1 = document.getElementById("button1");
    this.button1.addEventListener("click",()=>{
        this.select_color("button1");
    });

    this.button2 = document.getElementById("button2");
    this.button2.addEventListener("click",()=>{
        this.select_color("button2");
    });

    this.button3 = document.getElementById("button3");
    this.button3.addEventListener("click",()=>{
        this.select_color("button3");
    });

    this.button4 = document.getElementById("button4");
    this.button4.addEventListener("click",()=>{
        this.select_color("button4");
    });

    if(localStorage.getItem("COLOR")==null){
     document.body.style.background = "linear-gradient(to right, #00d2ff, #928dab)";
    }


    this.select_color(localStorage.getItem("COLOR"));
    }

    select_color(color){
       
        if(color == "button1"){
            document.body.style.background = "linear-gradient(to left, rgb(250, 250, 250),rgb(0, 0, 0))";
        }
        else if(color == "button2"){
            document.body.style.background="linear-gradient(to right,#ff9966,#ff5e62)";
        }

        else if(color == "button3"){
            document.body.style.background ="rgb(4, 180, 211)";
        }

        else if(color == "button4"){
            document.body.style.background ="#222a4c";
        }
        localStorage.setItem("COLOR",color);
    }

}
onload = new Color();
