import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import bgImg from './../../assets/bg.webp';
import { FaRegHeart } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import google from './../../assets/g.png'
import microsoft from './../../assets/m.webp'
import amazone from './../../assets/a.jpg'
import apple from './../../assets/apple.jpg'
import twitter from './../../assets/t.jpg'
import meta from './../../assets/meta.webp'
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    const apply = () => {
        navigate('/login');
    }
    return (
        <div>
            <div
                className='h-screen pl-20 -mt-16 pt-20'
                style={{
                    backgroundImage: `url(${bgImg})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}>
                <div className='mt-20 text-6xl font-sans font-bold'>
                    <h1 className='mb-2'>Find world’s</h1>
                    <h1 className='text-5xl'>
                        Best <ReactTypingEffect
                            text={["Job", "Remote Job", "Offer"]}
                            eraseDelay={2000}
                            typingDelay={200}
                            speed={100}
                            eraseSpeed={100}
                            cursor={' '}
                            className={'text-primary'}
                        />
                    </h1>
                    <p className='text-lg mt-4 font-normal'>
                        Discover the best remote and work from <br /> home jobs at top remote companies.
                    </p>
                </div>

                <div className='mt-10 font-sans flex gap-5'>
                    <div className='text-center border-r border-gray-400 pr-5'>
                        <h1 className='font-bold text-primary text-3xl'>60K+</h1>
                        <h3 className='text-gray-500'>Jobs submited</h3>
                    </div>
                    <div className='text-center'>
                        <h1 className='font-bold text-primary text-3xl'>30K+</h1>
                        <h3 className='text-gray-500'>Monthly Users</h3>
                    </div>
                </div>
            </div>
            {/* Fresher Jobs */}
            <div className='max-w-7xl mx-auto py-28 text-center'>
                <h1 className='font-bold text-4xl mb-10'>Fresher Jobs</h1>
                <div className='grid grid-cols-2 gap-5'>
                    <div className='border px-8 py-6 rounded-xl'>
                        <div className='flex gap-4'>
                            <div className='w-14'>
                                <img className='w-full' src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="" />
                            </div>
                            <div className='flex grow justify-between items-top'>
                                <div className='text-left'>
                                    <h2 className='font-semibold text-lg'>Front End Developer</h2>
                                    <p>by Happy Tech</p>
                                </div>
                                <div className='text-xl pt-1'>
                                    <FaRegHeart></FaRegHeart>
                                </div>
                            </div>
                        </div>
                        <div className='flex mt-3 justify-between items-end'>
                            <div className='flex gap-3'>
                                <div className='text-primary bg-primary/10 flex items-center gap-1 px-4 py-2 rounded-full'>
                                    <GoLocation></GoLocation>
                                    <span className='text-primary text-xs'>California</span>
                                </div>
                                <div className='text-primary bg-primary/10 flex items-center gap-1 px-4 py-2 rounded-full'>
                                    <span className='text-primary text-xs'>$100 - $200/month</span>
                                </div>
                            </div>
                            <button onClick={()=>apply()} className='btn btn-sm rounded-full btn-primary'>Apply Now</button>
                        </div>
                    </div>
                    <div className='border px-8 py-6 rounded-xl'>
                        <div className='flex gap-4'>
                            <div className='w-14'>
                                <img className='w-full rounded-full' src="https://civi.uxper.co/wp-content/uploads/2022/10/netomi-logo.webp" alt="" />
                            </div>
                            <div className='flex grow justify-between items-top'>
                                <div className='text-left'>
                                    <h2 className='font-semibold text-lg'>Full Stack Developer</h2>
                                    <p>by Netomi</p>
                                </div>
                                <div className='text-xl pt-1'>
                                    <FaRegHeart></FaRegHeart>
                                </div>
                            </div>
                        </div>
                        <div className='flex mt-3 justify-between items-end'>
                            <div className='flex gap-3'>
                                <div className='text-primary bg-primary/10 flex items-center gap-1 px-4 py-2 rounded-full'>
                                    <GoLocation></GoLocation>
                                    <span className='text-primary text-xs'>California</span>
                                </div>
                                <div className='text-primary bg-primary/10 flex items-center gap-1 px-4 py-2 rounded-full'>
                                    <span className='text-primary text-xs'>$100 - $200/month</span>
                                </div>
                            </div>
                            <button onClick={()=>apply()} className='btn btn-sm rounded-full btn-primary'>Apply Now</button>
                        </div>
                    </div>
                    <div className='border px-8 py-6 rounded-xl'>
                        <div className='flex gap-4'>
                            <div className='w-14'>
                                <img className='w-full rounded-full' src="https://civi.uxper.co/wp-content/uploads/2022/10/superside-logo.webp" alt="" />
                            </div>
                            <div className='flex grow justify-between items-top'>
                                <div className='text-left'>
                                    <h2 className='font-semibold text-lg'>React Js Developer</h2>
                                    <p>by Softonic</p>
                                </div>
                                <div className='text-xl pt-1'>
                                    <FaRegHeart></FaRegHeart>
                                </div>
                            </div>
                        </div>
                        <div className='flex mt-3 justify-between items-end'>
                            <div className='flex gap-3'>
                                <div className='text-primary bg-primary/10 flex items-center gap-1 px-4 py-2 rounded-full'>
                                    <GoLocation></GoLocation>
                                    <span className='text-primary text-xs'>California</span>
                                </div>
                                <div className='text-primary bg-primary/10 flex items-center gap-1 px-4 py-2 rounded-full'>
                                    <span className='text-primary text-xs'>$100 - $200/month</span>
                                </div>
                            </div>
                            <button onClick={()=>apply()} className='btn btn-sm rounded-full btn-primary'>Apply Now</button>
                        </div>
                    </div>
                    <div className='border px-8 py-6 rounded-xl'>
                        <div className='flex gap-4'>
                            <div className='w-14'>
                                <img className='w-full rounded-full' src="https://civi.uxper.co/wp-content/uploads/2022/10/10up-logo.webp" alt="" />
                            </div>
                            <div className='flex grow justify-between items-top'>
                                <div className='text-left'>
                                    <h2 className='font-semibold text-lg'>Front End Developer</h2>
                                    <p>by Q-Tech</p>
                                </div>
                                <div className='text-xl pt-1'>
                                    <FaRegHeart></FaRegHeart>
                                </div>
                            </div>
                        </div>
                        <div className='flex mt-3 justify-between items-end'>
                            <div className='flex gap-3'>
                                <div className='text-primary bg-primary/10 flex items-center gap-1 px-4 py-2 rounded-full'>
                                    <GoLocation></GoLocation>
                                    <span className='text-primary text-xs'>California</span>
                                </div>
                                <div className='text-primary bg-primary/10 flex items-center gap-1 px-4 py-2 rounded-full'>
                                    <span className='text-primary text-xs'>$100 - $200/month</span>
                                </div>
                            </div>
                            <button onClick={()=>apply()} className='btn btn-sm rounded-full btn-primary'>Apply Now</button>
                        </div>
                    </div>
                    <div className='border px-8 py-6 rounded-xl'>
                        <div className='flex gap-4'>
                            <div className='w-14'>
                                <img className='w-full rounded-full' src="https://civi.uxper.co/wp-content/uploads/2022/10/10up-logo.webp" alt="" />
                            </div>
                            <div className='flex grow justify-between items-top'>
                                <div className='text-left'>
                                    <h2 className='font-semibold text-lg'>Back End Developer</h2>
                                    <p>by Q-Tech</p>
                                </div>
                                <div className='text-xl pt-1'>
                                    <FaRegHeart></FaRegHeart>
                                </div>
                            </div>
                        </div>
                        <div className='flex mt-3 justify-between items-end'>
                            <div className='flex gap-3'>
                                <div className='text-primary bg-primary/10 flex items-center gap-1 px-4 py-2 rounded-full'>
                                    <GoLocation></GoLocation>
                                    <span className='text-primary text-xs'>California</span>
                                </div>
                                <div className='text-primary bg-primary/10 flex items-center gap-1 px-4 py-2 rounded-full'>
                                    <span className='text-primary text-xs'>$100 - $200/month</span>
                                </div>
                            </div>
                            <button onClick={()=>apply()} className='btn btn-sm rounded-full btn-primary'>Apply Now</button>
                        </div>
                    </div>
                    <div className='border px-8 py-6 rounded-xl'>
                        <div className='flex gap-4'>
                            <div className='w-14'>
                                <img className='w-full' src="https://civi.uxper.co/wp-content/uploads/2022/11/avatar_uxper.png" alt="" />
                            </div>
                            <div className='flex grow justify-between items-top'>
                                <div className='text-left'>
                                    <h2 className='font-semibold text-lg'>Full Stach Developer</h2>
                                    <p>by Happy Tech</p>
                                </div>
                                <div className='text-xl pt-1'>
                                    <FaRegHeart></FaRegHeart>
                                </div>
                            </div>
                        </div>
                        <div className='flex mt-3 justify-between items-end'>
                            <div className='flex gap-3'>
                                <div className='text-primary bg-primary/10 flex items-center gap-1 px-4 py-2 rounded-full'>
                                    <GoLocation></GoLocation>
                                    <span className='text-primary text-xs'>California</span>
                                </div>
                                <div className='text-primary bg-primary/10 flex items-center gap-1 px-4 py-2 rounded-full'>
                                    <span className='text-primary text-xs'>$100 - $200/month</span>
                                </div>
                            </div>
                            <button onClick={()=>apply()} className='btn btn-sm rounded-full btn-primary'>Apply Now</button>
                        </div>
                    </div>

                </div>
            </div>
            
            {/* Experience Jobs */}
            <div className='max-w-7xl mx-auto pb-28 text-center'>
                <h1 className='font-bold text-4xl mb-10'>Experienced Jobs</h1>
                <div className='grid grid-cols-2 gap-5'>
                    <div className='border px-8 py-6 rounded-xl'>
                        <div className='flex gap-4'>
                            <div className='w-14'>
                                <img className='w-full' src={google} alt="" />
                            </div>
                            <div className='flex grow justify-between items-top'>
                                <div className='text-left'>
                                    <h2 className='font-semibold text-lg'>Front End Developer</h2>
                                    <p>by Google</p>
                                </div>
                                <div className='text-xl pt-1'>
                                    <FaRegHeart></FaRegHeart>
                                </div>
                            </div>
                        </div>
                        <div className='flex mt-3 justify-between items-end'>
                            <div className='flex gap-3'>
                                <div className='text-primary bg-primary/10 flex items-center gap-1 px-4 py-2 rounded-full'>
                                    <GoLocation></GoLocation>
                                    <span className='text-primary text-xs'>California</span>
                                </div>
                                <div className='text-primary bg-primary/10 flex items-center gap-1 px-4 py-2 rounded-full'>
                                    <span className='text-primary text-xs'>$100 - $200/month</span>
                                </div>
                            </div>
                            <button onClick={()=>apply()} className='btn btn-sm rounded-full btn-primary'>Apply Now</button>
                        </div>
                    </div>
                    <div className='border px-8 py-6 rounded-xl'>
                        <div className='flex gap-4'>
                            <div className='w-14'>
                                <img className='w-full rounded-full' src={microsoft} alt="" />
                            </div>
                            <div className='flex grow justify-between items-top'>
                                <div className='text-left'>
                                    <h2 className='font-semibold text-lg '>React Js Developer</h2>
                                    <p>by Microsoft</p>
                                </div>
                                <div className='text-xl pt-1'>
                                    <FaRegHeart></FaRegHeart>
                                </div>
                            </div>
                        </div>
                        <div className='flex mt-3 justify-between items-end'>
                            <div className='flex gap-3'>
                                <div className='text-primary bg-primary/10 flex items-center gap-1 px-4 py-2 rounded-full'>
                                    <GoLocation></GoLocation>
                                    <span className='text-primary text-xs'>California</span>
                                </div>
                                <div className='text-primary bg-primary/10 flex items-center gap-1 px-4 py-2 rounded-full'>
                                    <span className='text-primary text-xs'>$100 - $200/month</span>
                                </div>
                            </div>
                            <button onClick={()=>apply()} className='btn btn-sm rounded-full btn-primary'>Apply Now</button>
                        </div>
                    </div>
                    <div className='border px-8 py-6 rounded-xl'>
                        <div className='flex gap-4'>
                            <div className='w-14'>
                                <img className='w-full' src={amazone} alt="" />
                            </div>
                            <div className='flex grow justify-between items-top'>
                                <div className='text-left'>
                                    <h2 className='font-semibold text-lg'>Back End Developer</h2>
                                    <p>by Amazone</p>
                                </div>
                                <div className='text-xl pt-1'>
                                    <FaRegHeart></FaRegHeart>
                                </div>
                            </div>
                        </div>
                        <div className='flex mt-3 justify-between items-end'>
                            <div className='flex gap-3'>
                                <div className='text-primary bg-primary/10 flex items-center gap-1 px-4 py-2 rounded-full'>
                                    <GoLocation></GoLocation>
                                    <span className='text-primary text-xs'>California</span>
                                </div>
                                <div className='text-primary bg-primary/10 flex items-center gap-1 px-4 py-2 rounded-full'>
                                    <span className='text-primary text-xs'>$100 - $200/month</span>
                                </div>
                            </div>
                            <button onClick={()=>apply()} className='btn btn-sm rounded-full btn-primary'>Apply Now</button>
                        </div>
                    </div>
                    <div className='border px-8 py-6 rounded-xl'>
                        <div className='flex gap-4'>
                            <div className='w-14'>
                                <img className='w-full rounded-full' src={apple} alt="" />
                            </div>
                            <div className='flex grow justify-between items-top'>
                                <div className='text-left'>
                                    <h2 className='font-semibold text-lg'>Front End Developer</h2>
                                    <p>by Apple</p>
                                </div>
                                <div className='text-xl pt-1'>
                                    <FaRegHeart></FaRegHeart>
                                </div>
                            </div>
                        </div>
                        <div className='flex mt-3 justify-between items-end'>
                            <div className='flex gap-3'>
                                <div className='text-primary bg-primary/10 flex items-center gap-1 px-4 py-2 rounded-full'>
                                    <GoLocation></GoLocation>
                                    <span className='text-primary text-xs'>California</span>
                                </div>
                                <div className='text-primary bg-primary/10 flex items-center gap-1 px-4 py-2 rounded-full'>
                                    <span className='text-primary text-xs'>$100 - $200/month</span>
                                </div>
                            </div>
                            <button onClick={()=>apply()} className='btn btn-sm rounded-full btn-primary'>Apply Now</button>
                        </div>
                    </div>
                    <div className='border px-8 py-6 rounded-xl'>
                        <div className='flex gap-4'>
                            <div className='w-14'>
                                <img className='w-full' src={meta} alt="" />
                            </div>
                            <div className='flex grow justify-between items-top'>
                                <div className='text-left'>
                                    <h2 className='font-semibold text-lg'>Front End Developer</h2>
                                    <p>by Google</p>
                                </div>
                                <div className='text-xl pt-1'>
                                    <FaRegHeart></FaRegHeart>
                                </div>
                            </div>
                        </div>
                        <div className='flex mt-3 justify-between items-end'>
                            <div className='flex gap-3'>
                                <div className='text-primary bg-primary/10 flex items-center gap-1 px-4 py-2 rounded-full'>
                                    <GoLocation></GoLocation>
                                    <span className='text-primary text-xs'>California</span>
                                </div>
                                <div className='text-primary bg-primary/10 flex items-center gap-1 px-4 py-2 rounded-full'>
                                    <span className='text-primary text-xs'>$100 - $200/month</span>
                                </div>
                            </div>
                            <button onClick={()=>apply()} className='btn btn-sm rounded-full btn-primary'>Apply Now</button>
                        </div>
                    </div>
                    <div className='border px-8 py-6 rounded-xl'>
                        <div className='flex gap-4'>
                            <div className='w-14'>
                                <img className='w-full rounded-full' src={twitter} alt="" />
                            </div>
                            <div className='flex grow justify-between items-top'>
                                <div className='text-left'>
                                    <h2 className='font-semibold text-lg'>Front End Developer</h2>
                                    <p>by Google</p>
                                </div>
                                <div className='text-xl pt-1'>
                                    <FaRegHeart></FaRegHeart>
                                </div>
                            </div>
                        </div>
                        <div className='flex mt-3 justify-between items-end'>
                            <div className='flex gap-3'>
                                <div className='text-primary bg-primary/10 flex items-center gap-1 px-4 py-2 rounded-full'>
                                    <GoLocation></GoLocation>
                                    <span className='text-primary text-xs'>California</span>
                                </div>
                                <div className='text-primary bg-primary/10 flex items-center gap-1 px-4 py-2 rounded-full'>
                                    <span className='text-primary text-xs'>$100 - $200/month</span>
                                </div>
                            </div>
                            <button onClick={()=>apply()} className='btn btn-sm rounded-full btn-primary'>Apply Now</button>
                        </div>
                    </div>

                </div>
            </div>
            {/* Top IT Companies */}
            <div className='max-w-7xl mx-auto mb-20'>
                <h1 className='font-bold text-4xl mb-10 text-center'>Top IT Companies</h1>
                <div className='grid grid-cols-3 gap-7'>
                    <div className='border p-5 rounded-lg'>
                        <img className='w-full' src="https://res.cloudinary.com/dteeny3pa/image/upload/v1676550964/kaj_qcq2kr.png" alt="" />
                        <a href="https://kaz.com.bd/" className='btn btn-primary mt-5 w-full'>View Details</a>
                    </div>
                    <div className='border p-5 rounded-lg'>
                        <img className='w-full' src="https://res.cloudinary.com/dteeny3pa/image/upload/v1676550964/bkash-logo-white_ihi6pl.webp" alt="" />
                        <a href="https://www.bkash.com/" className='btn btn-primary mt-5 w-full'>View Details</a>
                    </div>
                    <div className='border p-5 rounded-lg'>
                        <img className='w-full' src="https://res.cloudinary.com/dteeny3pa/image/upload/v1676550964/chaldal_vqzuwa.png" alt="" />
                        <a href="https://chaldal.com/" className='btn btn-primary mt-5 w-full'>View Details</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;