import React from "react";
import ReactAudioPlayer from "react-audio-player";

const index = ({ name, artist, music }) => {
  return (
    <div className="shadow-xl  w-[300px] h-[200px] p-2 m-2 bg-white rounded-2xl">
      <p className="p-2">
        <span className="text-[#f46242]">Music: </span>
        {name}{" "}
      </p>
      <p className="p-2 pb-[30px]">
        <span className="text-[#f46242]">Artist: </span> {artist}
      </p>
      <ReactAudioPlayer controls src={music} className="w-[100%] " />
    </div>
  );
};

export default index;
