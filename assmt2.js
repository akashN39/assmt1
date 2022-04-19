console.log('WELCOME TO CULTFIT');
class firework {
    constructor(){
        this.x = window.innerwidth / 2;
        this.y = window.innerheight - 10;
        this.speed=5;
        this.angle = (Math.random() * Math.PI / 2) + Math.PI / 4;
        this.vx = Math.cos( this.angle) * this.speed;
        this.vx = -Math.sin(this.angle) * this.speed;

        this.el = document.createElement('div');
        this.el.className = 'firework';
        this.el.style.left = this.x + 'px';
        this.el.style.top = this.y + 'px';
        document.body.appendChild(this.el);
    }
    update(){
        this.x += this.vx;
        this.y += this.vy;
        this.el.style.left = this.x + 'px';
        this.el.style.top = this.y + 'px';
    }
}
 const firework = new firework();
  setInterval(() => {
firework.update();
  }, interval);