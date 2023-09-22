import React, { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import { ReactSortable } from 'react-sortablejs';
import data from '../../data';

function Gallery({searchQuery}) {
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState([]); 
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
        setLoading(false);
    }, 2000);
    return () => clearTimeout(delay);
}, []);
useEffect(() => {
    onSearch(searchQuery);
}, [searchQuery]);
const onSearch = (query) => {
    const filtered = query
        ? data.filter((image) =>
                image.tag.toLowerCase().includes(query?.toLowerCase())
          )
        : data;
    setSearchResults(filtered);
    setNoResults(filtered.length === 0);
};

  return (
    <>
      <div className='gallery-drag-container'>
                {loading ? (
                    <TailSpin
                        color='blue'
                        height={80}
                        width={80}
                        radius={1}
                    />
                ) : (
                    <ReactSortable
                        list={searchResults}
                        setList={setSearchResults}
                        className='gallery-container'
                    >
                        {searchResults?.map((data, index) => (
                            <div
                                className='grid-image-container'
                                key={data.id}
                            >
                                <img
                                    src={data.image}
                                    alt={` ${index}`}
                                    className='image'
                                />
                                <div className='tags'>
                                    <span className='tag'>{data.tag}</span>
                                </div>
                            </div>
                        ))}
                    </ReactSortable>
                )}
                {noResults && <p>No results found.</p>}
            </div>
    </>
  );
}

export default Gallery;