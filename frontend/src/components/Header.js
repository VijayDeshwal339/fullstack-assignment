import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../store/cardsSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assests/Logo.png'

const Header = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const card = { title, description };
    dispatch(addCard(card));
    setTitle('');
    setDescription('');
    toggleModal();
    toast.success('Request submitted successfully!');
  };

  return (
    <div>
      <div className='flex items-center justify-between text-white bg-black py-4 px-4 sm:py-5 sm:px-[5%]'>
        <div className='flex items-center gap-2'>
          <img src={Logo} alt='' className='w-[30px]' />
          <p className='text-lg font-medium sm:text-xl'>Abstract | Help Center</p>
        </div>

        <div className='flex items-center md:mr-[10%]'>
          <button
            onClick={toggleModal}
            className='hidden sm:block px-3 py-2 border border-white rounded-md sm:px-4 sm:py-2 '>
            Submit a request
          </button>
          <button onClick={toggleSidebar} className='text-white sm:hidden ml-4'>
            {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      
      {isSidebarOpen && (
        <div className='fixed inset-0 z-50 bg-black bg-opacity-50 sm:hidden '>
          <div className='fixed top-0 right-0 w-64 h-full bg-[#dadbf0] shadow-lg p-4'>
            <button onClick={toggleSidebar} className=' mb-4'>
              <FaTimes size={24} />
            </button>
            <div className='flex items-center gap-2'>
            <img src={Logo} alt='' className='w-[30px]' />
            <p className='text-lg font-medium'>Abstract | Help Center</p>
            </div>
            <button
              onClick={toggleModal}
              className='mt-4 px-3 py-2 border border-black rounded-md'>
              Submit a request
            </button>
          </div>
        </div>
      )}

      
      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50'>
          <div className='bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-sm sm:max-w-md w-full'>
            <h2 className='text-xl font-bold mb-4 sm:text-2xl'>Submit a Request</h2>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label htmlFor='title' className='block text-sm font-medium text-gray-700'>
                  Title
                </label>
                <input
                  type='text'
                  id='title'
                  className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='description' className='block text-sm font-medium text-gray-700'>
                  Description
                </label>
                <textarea
                  id='description'
                  className='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className='flex justify-end'>
                <button
                  type='button'
                  onClick={toggleModal}
                  className='px-4 py-2 bg-gray-500 text-white rounded-md mr-2'>
                  Cancel
                </button>
                <button
                  type='submit'
                  className='px-4 py-2 bg-blue-600 text-white rounded-md'>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default Header;
