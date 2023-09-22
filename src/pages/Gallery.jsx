import React, { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Deer from "../assets/deer.jpg";
import Wolf from "../assets/wolves.jpg";
import Petals from "../assets/petals.jpg";
import Rose from "../assets/rose.jpg";
import Lily from "../assets/lily.jpg";
import Orange from "../assets/strawberries.jpg";
import Apple from "../assets/apple.jpg";
import SunsetRock from "../assets/sunset-rock.jpg";
import Sunset from "../assets/sunset.jpg";
import Cobweb from "../assets/cobweb-dew.jpg";
import Milkyway from "../assets/milkyway.jpg";
import Bird from "../assets/owl.jpg";
import Logout from "./Logout";

function Gallery() {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState([]); 
  const [imageOrder, setImageOrder] = useState([]); 
  const [noResults, setNoResults] = useState(false);


  const Imagedata = [
    {
      id: 1,
      image: Apple,
      tag: "Fruit",
    },

    {
      id: 2,
      image: Cobweb,
      tag: "Nature",
    },

    {
      id: 3,
      image: Lily,
      tag: "Flower",
    },

    {
      id: 4,
      image: Milkyway,
      tag: "Nature",
    },

    {
      id: 5,
      image: Orange,
      tag: "Fruit",
    },

    {
      id: 6,
      image: Bird,
      tag: "Bird",
    },

    {
      id: 7,
      image: Petals,
      tag: "Flower",
    },

    {
      id: 8,
      image: Rose,
      tag: "Flower",
    },

    {
      id: 9,
      image: Sunset,
      tag: "Sunset",
    },

    {
      id: 10,
      image: SunsetRock,
      tag: "Sunset",
    },

    {
      id: 11,
      image: Wolf,
      tag: "Nature",
    },

    {
      id: 12,
      image: Deer,
      tag: "Nature",
    },
  ];

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
    const filtered = Imagedata.filter((image) =>
      image.tag.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
    setNoResults(filtered.length === 0); 
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  useEffect(() => {
    setImageOrder([...Imagedata]);
  }, []);


  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const items = Array.from(...imageOrder);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setImageOrder(items);
  };
  
  const displayImages = searchResults.length > 0 ? searchResults : imageOrder;

  return (
    <>
      <div className="nav-container remove-container">
        <div className="logo remove-h1">
          <h1>
            IMG<span>allery</span>
          </h1>
        </div>
        <div className="search-container">
          <input
            className="search-bar"
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <Logout />
      </div>

      <div className="gallery-drag-container">
        {loading ? (
          <TailSpin color="blue" height={80} width={80} radius={1} />
        ) : (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="images">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="gallery-container"
                >
                  {displayImages.map((ImageData, index) => (
                    <Draggable
                      key={ImageData.id}
                      draggableId={ImageData.id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="grid-image-container"
                        >
                          <img
                            src={ImageData.image}
                            alt={` ${index}`}
                            className="image"
                          />
                          <div className="tags">
                            <span className="tag">{ImageData.tag}</span>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        )}
         {noResults && <p>No results found.</p>}
      </div>
    </>
  );
}

export default Gallery;