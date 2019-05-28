import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  private noise;

  constructor() {
    this.noise = new Tone.Noise({
      volume : -10,
      type : 'pink'
    }).toMaster();
  }

  ngOnInit(): void {
  }

  start(): void {
    this.noise.start();
  }

  stop(): void {
    this.noise.stop();
  }

  changeNoiseColor($event): void {
    this.noise.type = $event.detail.value;
  }

  changeVolume($event): void {
    this.setVolume($event.detail.value);
  }

  muteClick(): void {
    // todo: I think this should do it, but it has not effect :/
    this.noise.volume.mute = !this.noise.volume.mute;
  }

  private setVolume(value: number): void {
    this.noise.volume.value = value;
  }

}
