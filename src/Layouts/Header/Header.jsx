import Marquee from 'react-fast-marquee';
import Logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div>
            <div className='text-center'>
                <img className='mx-auto' src={Logo} alt="" />
                <p className='text-lg mt-4'>Journalism Without Fear or Favour</p>
                <p className='text-xl mt-3'>Sunday, November 27, 2022</p>
            </div>
            <div className='bg-gray-100 p-4 flex items-center gap-4 mt-8 mb-8'>
                <button className=' bg-red-600 text-white px-6 py-2'>Latest</button>
                <Marquee pauseOnHover={true} speed={100}>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                    The prosecutor has asked the judge to ban the ex-president from doing business in New York. Trump’s voluntary appearance shows he views it as significant !!  Why Putin wants a ‘forever war’...
                </Marquee>
            </div>
        </div>
    );
};

export default Header;