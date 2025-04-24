import React from 'react';

export default function VideoIdeaCard({ idea }) {
  return (
    <div className="border-l-4 border-indigo-500 pl-4 mb-4">
      <p className="italic">{idea}</p>
    </div>
  );
}