import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import Qzone1 from '../../assets/qZone1.png'
import Qzone2 from '../../assets/qZone2.png'
import Qzone3 from '../../assets/qZone3.png'

const RightSideBar = () => {
    return (
        <div>
            <h2 className="text-xl font-bold p-4">Login with</h2>
            <div className="p-4 space-y-2">
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>

            <h2 className="text-xl font-bold p-4">Find us on</h2>
            <div className="p-4">
                <div className='flex text-xl p-2 font-semibold border rounded-t-lg items-center gap-4'>
                    <FaFacebook></FaFacebook>
                    Facebook
                </div>
                <div className='flex text-xl p-2 font-semibold border-x items-center gap-4'>
                    <FaTwitter></FaTwitter>
                    Twitter
                </div>
                <div className='flex text-xl p-2 font-semibold border rounded-b-lg items-center gap-4'>
                    <FaInstagram></FaInstagram>
                    Instagram
                </div>
            </div>

            <div className='bg-gray-200 rounded-lg m-4'>
                <h2 className="text-xl font-bold p-4">Q Zone</h2>

                <div >
                    <img className='mx-auto' src={Qzone1} alt="" />
                    <img className='mx-auto' src={Qzone2} alt="" />
                    <img className='mx-auto' src={Qzone3} alt="" />
                </div>
            </div>

        </div>
    );
};

export default RightSideBar;