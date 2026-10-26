"use client";

class SoundManager {
private ctx: AudioContext | null = null;
private isMuted: boolean = true;

constructor() {
// AudioContext is initialized on first user interaction to comply with browser autoplay policies
}

private initContext() {
if (!this.ctx && typeof window !== "undefined") {
const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
if (AudioCtx) {
this.ctx = new AudioCtx();
}
}
}

public setMuted(muted: boolean) {
this.isMuted = muted;
if (!muted) {
this.initContext();
if (this.ctx && this.ctx.state === "suspended") {
this.ctx.resume();
}
}
}

public getIsMuted(): boolean {
return this.isMuted;
}

public playClick() {
if (this.isMuted) return;
this.initContext();
if (!this.ctx) return;

try {
const osc = this.ctx.createOscillator();
const gain = this.ctx.createGain();

osc.type = "sine";
osc.frequency.setValueAtTime(800, this.ctx.currentTime);
osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.04);

gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

osc.connect(gain);
gain.connect(this.ctx.destination);

osc.start();
osc.stop(this.ctx.currentTime + 0.04);
} catch {
// Graceful fallback if audio fails
}
}

public playLaunchWhoosh() {
if (this.isMuted) return;
this.initContext();
if (!this.ctx) return;

try {
const osc = this.ctx.createOscillator();
const gain = this.ctx.createGain();

osc.type = "sine";
osc.frequency.setValueAtTime(120, this.ctx.currentTime);
osc.frequency.exponentialRampToValueAtTime(600, this.ctx.currentTime + 0.35);

gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);

osc.connect(gain);
gain.connect(this.ctx.destination);

osc.start();
osc.stop(this.ctx.currentTime + 0.4);
} catch {
// Graceful fallback
}
}
}

export const soundManager = new SoundManager();​‌
