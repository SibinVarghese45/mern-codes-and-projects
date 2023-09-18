import './Tours.css';
import Card from './Card';


function Tours({tours, removeTour}){

    return (
        <div>
            {
                tours.map((tour) => {
                    return <Card {...tour} removeTour={removeTour}></Card>
                })
            }
        </div>
    )

}

export default Tours;