import { FaBookmark, FaEye, FaShareAlt } from 'react-icons/fa';
import Image from '../../assets/editorsInsight1.png'
import user from '../../assets/user.png'

const MainContent = ({data}) => {
    const {image_url,title, details, author, total_view, rating} = data;

    return (
        <div>
            <div className='flex justify-between p-3 bg-gray-200 rounded-t-lg'>
                <div className='flex items-center gap-3'>
                    <div>
                        <img className='w-10' src={author.img} alt="" />
                    </div>
                    <div>
                        <h2>{author.name}</h2>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <FaBookmark></FaBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-xl p-2">
                <h2 className='text-xl font-bold mt-4 mb-5'>{title}</h2>
                <img src={image_url} alt="" />
                    <p className='mt-5 text-lg'>{details}</p>
                
            <div className='flex justify-between p-3'>
                <div>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <p className='ml-3'>{rating.number}</p>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-2'>
                        <FaEye></FaEye>
                        <p>{total_view}</p>
                    </div>
                </div>
            </div>
            </div>

        </div>
    );
};

export default MainContent;