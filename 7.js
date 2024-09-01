class Player{
    constructor(){
      var heightM = document.getElementById("main1");
    heightM.style.height = screen.height + "px";
    
    if(screen.width < 500){
    heightM.style.width = screen.width + "px";
   }

    var heightD = document.getElementById("div1");
    heightD.style.height = screen.height-300 + "px";
   }
}
onload = new Player();

// من اجل الازرار 

class Pl{
    constructor(){
        this.audio = document.getElementById("audio1");
        this.titele = document.getElementById("p1");
        this.Player = document.getElementById("img3");
        this.main = document.getElementById("main1");
        this.h2 = document.getElementById("div2");
    
    this.names_radio =[];
    this.names_radio[0]="القناة الالى";
    this.names_radio[1]="القناة الثانية";
    this.names_radio[2]="القناة الثالثة";
    this.names_radio[3]="إذاعة الجزائر الدولية";
    this.names_radio[4]="إذاعة القران الكريم";
    this.names_radio[5]="الإذاعة الثقافية";
    this.names_radio[6]="jil FM";
    this.names_radio[7]="إذاعة البهجة";

    this.source_audio =[];
    this.source_audio[0]="https://webradio.tda.dz/Chaine1_64K.mp3";
    this.source_audio[1]="https://webradio.tda.dz/Chaine2_64K.mp3";
    this.source_audio[2]="https://webradio.tda.dz/Chaine3_64K.mp3";
    this.source_audio[3]="https://webradio.tda.dz/Internationale_64K.mp3";
    this.source_audio[4]="https://webradio.tda.dz/Coran_64K.mp3";
    this.source_audio[5]="https://webradio.tda.dz/Culture_64K.mp3";
    this.source_audio[6]="https://webradio.tda.dz/Jeunesse_64K.mp3";
    this.source_audio[7]="https://webradio.tda.dz/ElBahdja_64K.mp3";
    
    if(localStorage.getItem("slider")!=null){
      this.count = localStorage.getItem("slider");
   }else  this.count=0;

    this.audio.src = this.source_audio[this.count];
    this.titele.innerHTML = this.names_radio[this.count];
    this.next = document.getElementById("img4");
    this.next.addEventListener("click", ()=>{
       this.playSlider();
       localStorage.setItem("slider",this.count);
    });

    this.behind = document.getElementById("img2");
    this.behind.addEventListener("click", ()=>{
        this.playB();
        localStorage.setItem("slider",this.count);
     });

    this.isplayed;
    this.Player.addEventListener("click", ()=>{
    this.play_pause();
    });

    this.nav = document.getElementById("nav1");
    this.fatiha = document.getElementById("article4");
    this.fatiha.addEventListener("click", ()=>{
      this.play_fatiha();
      this.main.style.display = "unset";
      this.nav.style.display = "none";
      this.h2.style.display = "none";
    });

    this.bakara = document.getElementById("article5");
    this.bakara.addEventListener("click", ()=>{
      this.play_bakara();
      this.main.style.display = "unset";
      this.nav.style.display = "none";
      this.h2.style.display = "none";
    });

    this.aliomran = document.getElementById("article6");
    this.aliomran.addEventListener("click", ()=>{
      this.play_alomran();
      this.main.style.display = "unset";
      this.nav.style.display = "none";
      this.h2.style.display = "none";
    });

    this.nisaa = document.getElementById("article7");
    this.nisaa.addEventListener("click", ()=>{
      this.play_alnisaa();
      this.main.style.display = "unset";
      this.nav.style.display = "none";
      this.h2.style.display = "none";
    });

    this.koran = document.getElementById("article8");
    this.koran.addEventListener("click", ()=>{
      this.play_koran();
      this.main.style.display = "unset";
      this.nav.style.display = "none";
      this.h2.style.display = "none";
    });
    this.takafe = document.getElementById("article9");
    this.takafe.addEventListener("click", ()=>{
      this.play_takafe();
      this.main.style.display = "unset";
      this.nav.style.display = "none";
      this.h2.style.display = "none";
    });
    this.jilFM = document.getElementById("article10");
    this.jilFM.addEventListener("click", ()=>{
      this.play_jilFM();
      this.main.style.display = "unset";
      this.nav.style.display = "none";
      this.h2.style.display = "none";
    });
    this.bahdja = document.getElementById("article11");
    this.bahdja.addEventListener("click", ()=>{
      this.play_bahdja();
      this.main.style.display = "unset";
      this.nav.style.display = "none";
      this.h2.style.display = "none";
    });
document.getElementById("button").onclick = ()=>{
      this.main.style.display = "none";
      this.h2.style.display = "unset";
      this.nav.style.display = "unset";
      this.audio.pause();
      this.isplayed = false;
    };
    }

    play_fatiha(){
      this.count = 0;
      this.audio.src = this.source_audio[this.count];
       this.titele.innerHTML = this.names_radio[this.count];
       this.audio.play();
       this.Player.src = "pause.png";
       this.isplayed = true;
       localStorage.setItem("slider",this.count);
    }play_bakara(){
      this.count = 1;
      this.audio.src = this.source_audio[this.count];
       this.titele.innerHTML = this.names_radio[this.count];
       this.audio.play();
       this.Player.src = "pause.png";
       this.isplayed = true;
       localStorage.setItem("slider",this.count);
    }play_alomran(){
      this.count = 2;
      this.audio.src = this.source_audio[this.count];
       this.titele.innerHTML = this.names_radio[this.count];
       this.audio.play();
       this.Player.src = "pause.png";
       this.isplayed = true;
       localStorage.setItem("slider",this.count);
    }play_alnisaa(){
      this.count = 3;
      this.audio.src = this.source_audio[this.count];
       this.titele.innerHTML = this.names_radio[this.count];
       this.audio.play();
       this.Player.src = "pause.png";
       this.isplayed = true;
       localStorage.setItem("slider",this.count);
    }play_koran(){
      this.count = 4;
      this.audio.src = this.source_audio[this.count];
       this.titele.innerHTML = this.names_radio[this.count];
       this.audio.play();
       this.Player.src = "pause.png";
       this.isplayed = true;
       localStorage.setItem("slider",this.count);
    }play_takafe(){
      this.count = 5;
      this.audio.src = this.source_audio[this.count];
       this.titele.innerHTML = this.names_radio[this.count];
       this.audio.play();
       this.Player.src = "pause.png";
       this.isplayed = true;
       localStorage.setItem("slider",this.count);
    }play_jilFM(){
      this.count = 6;
      this.audio.src = this.source_audio[this.count];
       this.titele.innerHTML = this.names_radio[this.count];
       this.audio.play();
       this.Player.src = "pause.png";
       this.isplayed = true;
       localStorage.setItem("slider",this.count);
    }play_bahdja(){
      this.count = 7;
      this.audio.src = this.source_audio[this.count];
       this.titele.innerHTML = this.names_radio[this.count];
       this.audio.play();
       this.Player.src = "pause.png";
       this.isplayed = true;
       localStorage.setItem("slider",this.count);
    }
    
    

    playSlider(){
        if(this.source_audio.length-1 > this.count){
          this.count++;
        }else{
          this.count = 0;
        }
        if(this.isplayed == true){
       this.audio.src = this.source_audio[this.count];
       this.titele.innerHTML = this.names_radio[this.count];
       this.audio.play();
        }else{
            this.audio.src = this.source_audio[this.count];
            this.titele.innerHTML = this.names_radio[this.count];
        }
       
    }

    playB(){
        if(this.count > 0){
          this.count--;
        }else if(this.count == 0){
          this.count = this.source_audio.length-1;
        }
        if(this.isplayed == true){ 
       this.audio.src = this.source_audio[this.count];
       this.titele.innerHTML = this.names_radio[this.count];
       this.audio.play();
        }else{
            this.audio.src = this.source_audio[this.count];
            this.titele.innerHTML = this.names_radio[this.count];
        }

    }

    play_pause(){
        if(this.isplayed == false){
          this.Player.src = "pause.png";
          this.audio.play();
          this.isplayed = true;
        }else{
            this.Player.src = "play.png"; 
            this.audio.pause();
            this.isplayed = false;
        }
    }
}
onload = new Pl();
