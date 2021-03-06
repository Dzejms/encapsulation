import { Component, OnInit } from "@angular/core";
import * as Tone from "tone";

@Component({
  selector: "app-noise",
  templateUrl: "noise.page.html",
  styleUrls: ["noise.page.scss"]
})
export class NoisePage implements OnInit {

  public muteicon: string;
  private muted: boolean;

  private noise: Tone.Noise;

  constructor() {
    this.noise = new Tone.Noise({
      type : "brown"
    });
    this.setVolume(-10);
    this.noise.toMaster();
  }

  ngOnInit(): void {
    this.noise.start();
    this.muteicon = "volume-off";
  }

  changeNoiseColor($event): void {
    this.noise.type = $event.detail.value;
  }

  changeVolume($event): void {
    this.setVolume($event.detail.value);
  }

  muteClick(): void {
    this.muted = !this.muted;
    if (this.muted) {
      this.noise.stop();
      this.muteicon = "volume-high";
    } else {
      this.noise.start();
      this.muteicon = "volume-off";
    }
  }

  private setVolume(value: number): void {
    this.noise.volume.value = value;
  }

}
