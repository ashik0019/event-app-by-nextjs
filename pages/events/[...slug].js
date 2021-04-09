import React from 'react'
import {useRouter} from 'next/router'
import EventList from '../../components/events/event-list';
import { getFilteredEvents } from '../../dummy-data';

function FilteredEventPage() {
    const router = useRouter();
    const filterData = router.query.slug;
    console.log(filterData);
    if(!filterData){
        return <p className='center'>Loading....</p>
    }

    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];
    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if(isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12){
        return <p>Invalid Filter. Please adjust your values!</p>
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
    })

    if(!filteredEvents || filteredEvents.length === 0){
        return <p>No Events found for the chosen filter!</p>
    }

    return (
        <div>
           <EventList items={filteredEvents}/>
        </div>
    )
}

export default FilteredEventPage