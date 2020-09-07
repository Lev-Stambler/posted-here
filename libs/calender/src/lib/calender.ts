import { PersonAvailability, AvailableWhen, MarkerInfo, MarkerInfoAPI } from '@postedhere/api-interfaces'
import { processAvail } from '@postedhere/avail'

/**
 * If one person is available right now, then present is returned
 * If one person is available in the future and no one is available now, the future is returned
 * Otherwise the past is returned
 */
export function markerAvail(marker: MarkerInfo | MarkerInfoAPI): AvailableWhen {
  if ((marker.availabilities as PersonAvailability[]).some(avail => availableTime(avail) === AvailableWhen.PRESENT))
    return AvailableWhen.PRESENT
  else if ((marker.availabilities as PersonAvailability[]).some(avail => availableTime(avail) === AvailableWhen.FUTURE))
    return AvailableWhen.FUTURE
  else
    return AvailableWhen.PAST
}

export function availableTime(avail: PersonAvailability): AvailableWhen {
  if (typeof avail.startTime === 'string' || typeof avail.endTime === 'string')
    avail = processAvail(avail)
  if (avail.startTime.getTime() + 0 <= Date.now() && Date.now() <= avail.endTime.getTime() + 0)
    return AvailableWhen.PRESENT
  else if (avail.startTime.getTime() + 0 > Date.now())
    return AvailableWhen.FUTURE
  else
    return AvailableWhen.PAST
}
