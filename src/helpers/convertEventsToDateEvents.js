import { parseISO } from 'date-fns';


export const convertEventsToDateEvents = ( prestamo = []) => {

    return prestamo.map( prestamo => {

        prestamo.end = parseISO( prestamo.end );
        prestamo.start = parseISO( prestamo.start );

        return prestamo;
    })

}