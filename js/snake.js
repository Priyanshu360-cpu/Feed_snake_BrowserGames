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
        let previous = {
           "x": 680,
           "y": 40,
           "z":40,
        }
        let food={
            "x": 920,
            "y": 90,
            "z":20,
        }
        setInterval(()=>{
            ctx.clearRect(previous.x, previous.y,previous.z,40);
            if(previous.x>=(680+320)){
                previous.x=320;
                ctx.strokeRect(320, 50, 680, 680);
            }
if(previous.x==food.x && previous.y==food.y){
    let points=document.getElementById("points");
    points.innerHTML=parseInt(points.innerHTML)+1;
    previous.z=previous.z+40;
    ctx.clearRect(food.x, food.y,food.z,food.z);
    food.x=Math.floor(Math.random()*(1000-320))+320;
    food.y=Math.floor(Math.random()*(730-50))+50;
    ctx.fillStyle="yellow";
    ctx.fillRect(food.x, food.y,food.z,food.z);
}
            previous.x=previous.x+10;
           
            console.log(previous.x)
            
            ctx.fillStyle="green";
            ctx.fillRect(previous.x, previous.y, previous.z,40);
            
        },100)
        keyDown = ()=>{
            console.log("down")
        }
        window.addEventListener('keydown', keyDown);
        previous.y=previous.y+50;
        
    }
}