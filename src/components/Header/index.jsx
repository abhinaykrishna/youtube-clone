import { useRef } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GoSearch } from 'react-icons/go';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdMic } from 'react-icons/md';
import youtubeLogo from '../../assets/logo.png';

const Header = () => {
  const searchRef = useRef(null);
  const handleSearch = () => {
    console.log(searchRef.current?.value);
  };

  return (
    <div className='p-4 flex items-center justify-between'>
      <div className='flex items-center gap-6'>
        <RxHamburgerMenu size='21px' className='cursor-pointer' />
        <img src={youtubeLogo} alt='youtube-logo' className='w-28' />
      </div>
      <div className='flex w-3/5 justify-center'>
        <input
          type='text'
          placeholder='Search'
          className='px-5 py-2.5 text-md border rounded-tl-3xl rounded-bl-3xl text-sm w-1/2 text-gray-500'
          autoFocus
          ref={searchRef}
        />
        <button
          className='px-5 py-2 bg-slate-50 hover:bg-slate-200 border rounded-tr-3xl rounded-br-3xl'
          onClick={handleSearch}
        >
          <GoSearch size='20px' />
        </button>
        <div className='flex items-center bg-slate-100 hover:bg-slate-200 rounded-3xl px-2.5 ml-3 cursor-pointer'>
          <MdMic size='24px' />
        </div>
      </div>
      <div className='flex items-center'>
        <BiDotsVerticalRounded size='24px' className='cursor-pointer' />
        <button className='border border-gray-300 rounded-2xl ml-4 px-3.5 py-2 text-sm text-[#065fd4] flex item-center justify-center gap-2 hover:bg-blue-400 hover:bg-opacity-20'>
          <FaRegUserCircle size='20px' color='#065fd4' />
          <span className='font-bold'>Sign in</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
