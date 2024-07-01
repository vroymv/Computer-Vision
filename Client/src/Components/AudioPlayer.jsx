import React, { useState } from 'react';

const AudioPlayer = ({ audioBuffer }) => {
    return (
    <div>
      {audioBuffer && (
        <audio src={audioBuffer} controls={true} autoPlay={false} />
      )}

    </div>
  );
};

export default AudioPlayer;
