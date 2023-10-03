import { FaCalendar } from 'react-icons/fa';
import Card1 from '../../assets/1.png'
import Card2 from '../../assets/2.png'
import Card3 from '../../assets/3.png'

const Cards = () => {
    return (
        <div className='space-y-2'>
            <div className="card card-compact w-full bg-base-100 shadow-xl rounded-b-none">
                <img src={Card1} alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <div className='flex gap-10 items-center'>
                        <h2 className='text-lg font-medium'>Sports</h2>
                        <FaCalendar></FaCalendar>
                        <p>Jan 4, 2022</p>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-full bg-base-100 shadow-xl rounded-b-none">
                <img src={Card2} alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <div className='flex gap-10 items-center'>
                        <h2 className='text-lg font-medium'>Sports</h2>
                        <FaCalendar></FaCalendar>
                        <p>Jan 4, 2022</p>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-full bg-base-100 shadow-xl rounded-b-none">
                <img src={Card3} alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <div className='flex gap-10 items-center'>
                        <h2 className='text-lg font-medium'>Sports</h2>
                        <FaCalendar></FaCalendar>
                        <p>Jan 4, 2022</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;