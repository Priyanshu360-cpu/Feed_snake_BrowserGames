function draw(){
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.strokeRect(320, 50, 680, 680);
        ctx.strokeRect(320, 50, 680, 680);
        ctx.fillStyle="green";
        ctx.fillRect(680, 90, 40, 40);
        ctx.fillStyle="yellow";
        ctx.fillRect(920, 90, 20, 20);
        var l=0;
        let previous = {
           "x": 680,
           "y": 90,
           "z":40,
              "w":40
        }
        let food={
            "x": 920,
            "y": 90,
            "z":20,
        }
        setInterval(()=>{
            ctx.clearRect(previous.x, previous.y,previous.z,previous.w);
            if(previous.x>=(680+320)){
                previous.x=320;
                ctx.clearRect(680, 680, 680, 680)
                ctx.strokeRect(320, 50, 680, 680);
            }
            if(previous.y>=(680+50)){
                previous.y=50;
                ctx.clearRect(680, 680, 680, 680)
                ctx.strokeRect(320, 50, 680, 680);
            }
if(previous.x>=food.x-20&&previous.x<=food.x+20&& previous.y>=food.y-20&&previous.y<=food.y+20){
    let points=document.getElementById("points");
    points.innerHTML=parseInt(points.innerHTML)+1;
    if(l==0){
    previous.z=previous.z+40;
    }else{
        console.log("l=1");
        previous.w=previous.w+40;
    }
    ctx.clearRect(food.x, food.y,food.z,food.z);
    food.x=Math.floor(Math.random()*(1000-320))+320;
    food.y=Math.floor(Math.random()*(730-50))+50;
    ctx.fillStyle="yellow";
    ctx.fillRect(food.x, food.y,food.z,food.z);
}
if(l==0){
            previous.x=previous.x+10;
}else if(l==1){
    previous.y=previous.y+10;
}else if(l==2){
    previous.y=previous.y-10;
}else {
    previous.x=previous.x-10;
}
            console.log(previous.x)
            
            ctx.fillStyle="green";
            ctx.fillRect(previous.x, previous.y, previous.z,previous.w);
            
        },100)
        function keyDown (){
            if(l!=2&&l!=1){
            let x=previous.z;
            previous.z=previous.w;
            previous.w=x;
            ctx.clearRect(320, 50, 680, 680) 
            ctx.strokeRect(320, 50, 680, 680);      
            ctx.fillStyle="yellow";
            ctx.fillRect(food.x, food.y,food.z,food.z);
            console.log("down")
            l=1;
            }
        }
        function keyRight(){
            if(l!=3&&l!=0){
            let x=previous.w;
            previous.w=previous.z;
            previous.z=x;
            console.log("right")
            ctx.clearRect(320, 50, 680, 680) 
            ctx.strokeRect(320, 50, 680, 680);
            ctx.fillStyle="yellow";
            ctx.fillRect(food.x, food.y,food.z,food.z);
            l=0;
            }
        }
        function keyUp(){
            if(l!=1&&l!=2){
            let x=previous.z;
            previous.z=previous.w;
            previous.w=x;
            ctx.clearRect(320, 50, 680, 680) 
            ctx.strokeRect(320, 50, 680, 680);      
            ctx.fillStyle="yellow";
            ctx.fillRect(food.x, food.y,food.z,food.z);
            console.log("up")
            l=2;
            }
        }
        function keyleft(){
            if(l!=0&&l!=3){
            let x=previous.w;
            previous.w=previous.z;
            previous.z=x;
            console.log("right")
            ctx.clearRect(320, 50, 680, 680) 
            ctx.strokeRect(320, 50, 680, 680);
            ctx.fillStyle="yellow";
            ctx.fillRect(food.x, food.y,food.z,food.z);
            console.log("up")
            l=3;
            }
        }
        let KEY_CODE = {
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40
         };
        
        window.addEventListener('keydown', function (event) {
            switch (event.keyCode) {
               case KEY_CODE.LEFT:
                keyleft();
                  console.log('Left');
                  break;
               case KEY_CODE.RIGHT:
                  console.log('Right');
                  keyRight()
                  break;
               case KEY_CODE.DOWN:
                  console.log('Down');
                  keyDown()
                  break;
               case KEY_CODE.UP:
                keyUp();
                  console.log('Up');
                  break;
               default:
                  break;
            }
         });
     
        
    }
}