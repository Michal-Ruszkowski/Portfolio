import { Component, ElementRef, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';

class Ball {
  startTime = Date.now();
  size = 2;
  radius = 1;
  constructor(
    public x: number,
    public y: number,
    public dx: number,
    public dy: number,
    public color: string,
    public theta: number,
    public dtheta: number = Math.PI / 180,
  ) {}

  grow() {
    this.radius += 10;
  }
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements AfterViewInit {
  @Output() welcomeCompleted = new EventEmitter();
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  private context!: CanvasRenderingContext2D;
  private balls: Ball[] = [];
  private startTime = 0;
  

  ngAfterViewInit() {
    this.context = this.canvas.nativeElement.getContext('2d')!;
    if (!this.context) {
      throw new Error('Failed to get 2D context for canvas.');
    }
    this.balls.push(new Ball(50, 50, 20, 2, 'white', 1, 0.05));
    this.balls.push(new Ball(25, 40, -8, -20, 'white', 1, 0.05));
    this.balls.push(new Ball(55, 150, -12, 9, 'white', 1, 0.05));
    this.animate();
  }

  animate() {
    if (!this.startTime) {
      this.startTime = Date.now();
    }
  
    this.context.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    const centerX = this.canvas.nativeElement.width / 2;
    const centerY = this.canvas.nativeElement.height / 2;
    const timeElapsed = (Date.now() - this.startTime) / 1000;
  
    for (let ball of this.balls) {
      if (timeElapsed >= 2.5) {
        const targetX = centerX;
        const targetY = centerY;
        const distanceX = targetX - ball.x;
        const distanceY = targetY - ball.y;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
  
        if (distance > 2) {
          ball.x += distanceX / 20;
          ball.y += distanceY / 20;
        } else {
          ball.grow(); // powiększ kulki
          if (ball.radius >= Math.max(this.canvas.nativeElement.width, this.canvas.nativeElement.height)) {
            ball.radius = Math.max(this.canvas.nativeElement.width, this.canvas.nativeElement.height);
            if (this.balls.every(b => b.radius >= Math.max(this.canvas.nativeElement.width, this.canvas.nativeElement.height))) {
              sessionStorage.setItem("isWelcomeDisplayed", "true");
              this.welcomeCompleted.emit();
            }
          }
        }
      } else {
        ball.x += ball.dx * Math.cos(ball.theta);
        ball.y += ball.dy * Math.sin(ball.theta);
        ball.theta += ball.dtheta;
  
        if (ball.x > this.canvas.nativeElement.width || ball.x < 0) {
          ball.dx = -ball.dx;
        }
        if (ball.y > this.canvas.nativeElement.height || ball.y < 0) {
          ball.dy = -ball.dy;
        }
      }
  
      this.drawBall(ball.x, ball.y, ball.radius, ball.color);
    }
  
    requestAnimationFrame(() => this.animate());
  }
  
  


  drawBall(x: number, y: number, r: number, color: string) {
    this.context.beginPath();
    this.context.arc(x, y, r, 0, Math.PI * 2);
    this.context.fillStyle = color;
    this.context.fill();
    this.context.closePath();
  }
}