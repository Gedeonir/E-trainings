import React from 'react'
import PropTypes from "prop-types";
import { useLocation } from 'react-router-dom';

const YoutubeEmbed = ({ embedId }) => {
  const location=useLocation()

  return(
    <div className={`${!location.pathname.includes("users/admin/courses")?'w-4/5 mx-auto':'w-full'} py-4`}>
      <iframe
        className='w-full lg:h-96 h-56'
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  )};
  
  YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
  };
  
  export default YoutubeEmbed;

