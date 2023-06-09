import ErrorAlert from '@/components/error-alert/error-alert';
import EventContent from '@/components/event-detail/event-content';
import EventLogistics from '@/components/event-detail/event-logistics';
import EventSummary from '@/components/event-detail/event-summary';
import { getEventById } from '@/dummy-data';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react'

const EventDetailPage = () => {

  const router = useRouter();
  const eventid = router.query.eventId;
  const event = getEventById(eventid);

  if (!event) {
    return <ErrorAlert> <p>No event found!</p> </ErrorAlert>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      /> 
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  )
}

export default EventDetailPage