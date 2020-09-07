import { PersonAvailability } from '@postedhere/api-interfaces'

export function avail(): string {
  return "avail";
}

export function processAvail(avail: PersonAvailability): PersonAvailability {
  avail.startTime = new Date(avail.startTime);
  avail.endTime = new Date(avail.endTime)
  return avail
}