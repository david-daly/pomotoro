import { EventBus } from '@/Shared/EventBus';

export class Timer {

  constructor(minutes) {
    this.time = 0
    this.totalSeconds = minutes * 60
  }

  start() {
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.time += 1
        if (this.time >= this.totalSeconds) {
          this.pause()
          EventBus.$emit('timer-completed')
        }
      }, 1000)
      EventBus.$emit('timer-started')
    }
  }

  pause() {
    clearInterval(this.interval)
    delete this.interval
    EventBus.$emit('timer-paused')
  }

  reset() {
    clearInterval(this.interval)
    delete this.interval
    this.time = 0
    EventBus.$emit('timer-reset')
  }

  resume() {
    if (!this.interval) {
      this.start()
      EventBus.$emit('timer-resumed')
    }
  }
}