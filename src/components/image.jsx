import React from "react";

export default function Image({ path, size = 200 }) {
  // let obj = {title: 'hi'}
  // obj.title
  // const { age = 34 } = obj;

  return <img src={path} style={{ height: `${size}px`, width: `${size}px` }} />;
}
