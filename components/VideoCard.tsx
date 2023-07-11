import React, {useState, useEffect, useRef} from 'react'
import { Video } from '../types';
import Image from 'next/image';
import Link from 'next/link';
import {HiVolumeUp, HiVolumeOff} from 'react-icons/hi'
import { BsPlay, BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import { NextPage } from 'next';

interface IProps {
    post: Video;
}

const VideoCard: NextPage<IProps> = ({post}) => {

    const [isHover, setIsHover] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [isVideoMuted, setIsVideoMuted] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const onVideoPress = () => {
        if(playing){
            videoRef.current?.pause();
            setPlaying(false);
        } else {
            videoRef.current?.play();
            setPlaying(true);
        }
    }

  return (
    <div className='flex flex-col justify-start border-b-2 border-gray-200 pb-6'>
        <div className=' flex gap-3 p-2 cursor-pointer font-semibold rounded'>
            <div className='lg:w-16 lg:h-16 w-10 h-10'>
                <Link href={`/profile/${post.postedBy._id}`}>
                    <>
                        <Image 
                        width={62}
                        height={62}
                        className='rounded-full'
                        src={post.postedBy.image}
                        alt='Profile Photo'
                        layout='responsive'
                        />
                    </>
                </Link>
            </div>
            <div className='flex '>
                <Link href={`/profile/${post.postedBy._id}`}>
                    <div className='flex lg:flex-row flex-col lg:items-center items-start justify-center lg:gap-2 gap-1'>
                        <p className='flex lg:gap-2 gap-1 items-center lg:text-lg text-[12px] font-bold text-primary'>
                            {post.postedBy.userName}
                            <GoVerified className='text-blue-400 text-md' />
                        </p>
                        <p className='capitalize font-medium lg:text-[15px] text-[10px] text-gray-500 md:block'>{post.postedBy.userName}</p>
                    </div>
                </Link>
            </div>
        </div>
        <div className='flex gap-4 relative'>
            <div 
            onMouseEnter={()=> setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className='rounded-3xl'>
                <Link href={`/detail/${post._id}`}>
                    <video 
                    loop
                    muted={isVideoMuted ? true : false}
                    ref={videoRef}
                    className='lg:w-[600px] h-[300px] md:h-[400px] lg:h-[530px] w-[200px] rounded-2xl cursor-pointer bg-gray-100'
                    src={post.video.asset.url} />
                </Link>

                {isHover && (
                    <div className='absolute bottom-0 cursor-pointer left-12 md:left-14 lg:left-0 flex gap-10 lg:justify-between w-[100px] md:w-[50px] p-3'>
                        {playing ? (
                        <button onClick={onVideoPress}>
                            <BsFillPauseFill className='bg-white rounded-full text-black text-2xl lg:text-4xl'/>
                        </button>
                        ) : (
                            <button onClick={onVideoPress}>
                                <BsFillPlayFill className='bg-white rounded-full text-black text-2xl lg:text-4xl'/>
                            </button>
                        )}
                        {isVideoMuted ? (
                        <button onClick={() => setIsVideoMuted(false)}>
                            <HiVolumeOff className='bg-white rounded-full text-black text-2xl lg:text-4xl'/>
                        </button>
                        ) : (
                            <button onClick={() => setIsVideoMuted(true)}>
                                <HiVolumeUp className='bg-white rounded-full text-black text-2xl lg:text-4xl'/>
                            </button>
                        )}

                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default VideoCard