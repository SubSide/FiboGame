import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  // We cache the fibonacci numbers because calculating this 2500 times
  // because calculating this ~ 99 * 9 times every time you click could be an issue.
  public fibCache: number[] = [];
  public checkingNumber = 0;

  ngOnInit() {
  }

  getFibIndex(num: number): number {
    // If we've already cached the number, we'll just return that
    if (typeof this.fibCache[num] !== 'undefined') {
      return this.fibCache[num];
    }

    // We first check if our number is a fibonacci number
    // This is true if and only if 5x²+4 or 5x²-4 is a perfect square
    const check1: number = 5 * num * num - 4;
    const check2: number = check1 + 8;

    if(this.isPerfectSquare(check1) || this.isPerfectSquare(check2)){
      this.fibCache[num] = this.calculateFibonacciIndex(num);
    } else {
      // Else we define it and set it as NULL
      this.fibCache[num] = null;
    }

    return this.fibCache[num];
  }

  private isPerfectSquare(num: number): boolean {
    return Math.sqrt(num) % 1 === 0;
  }

  private calculateFibonacciIndex(num: number): number {
    // We can calculate the index for any number > 1
    // by taking the phi log of (num * sqrt(5) + 1/2) and then flooring it
    // At least, that's what Wikipedia says. And it seems to work!
    return Math.floor(
      Math.log(num * Math.sqrt(5) + 0.5) /
      Math.log((1 + Math.sqrt(5)) / 2)
      );
  }
}
