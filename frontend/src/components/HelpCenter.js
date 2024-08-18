import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../store/cardsSlice';
import { FaLongArrowAltRight } from "react-icons/fa";

const HelpCenter = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards.cards);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSections, setFilteredSections] = useState([]);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  useEffect(() => {
    setFilteredSections(
      cards.filter(section =>
        section.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, cards]);

  return (
    <div className=''>
      <div className='flex flex-col items-center py-12 sm:py-24 gap-5 bg-[#dadbf0]'>
        <p className='font-semibold text-4xl sm:text-6xl text-center'>How can we help?</p>
        <form className="w-[80%] sm:w-[60%] lg:w-[40%]">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-4 text-sm text-gray-900 border border-gray-600 outline-none rounded-lg"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              required
            />
            <FaLongArrowAltRight className="absolute top-5 right-4 cursor-pointer" />
          </div>
        </form>
      </div>

      <div className='py-12 sm:py-24 grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20 w-[80%] sm:w-[80%] lg:w-[60%] mx-auto'>
        {filteredSections.map((section, index) => (
          <div key={index} className='flex flex-col items-start p-5 bg-[#f4f6f8] rounded-lg shadow-lg'>
            <p className='font-bold text-lg text-[#413d47]'>{section.title}</p>
            <hr className="border-t-2 border-[#e0e6eb] w-full my-2" />
            <p className='text-[#6b7174] text-lg font-normal'>{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpCenter;

