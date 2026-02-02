import React from "react";

export default function Card(props) {
  return (
    <div
      className="border border-gray-700 bg-black text-white p-4 rounded-lg shadow-sm
     hover:shadow-md transition-shadow max-w-sm mx-auto duration-200"
    >
      <p className="text-xl font-semibold mb-2">{props.projectName}</p>
      <p className="text-gray-300 mb-4">{props.description}</p>
      <p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={props.projectLink}
          className="text-white underline hover:text-green-300"
        >
          {props.projectLink}
        </a>
      </p>
    </div>
  );
}
