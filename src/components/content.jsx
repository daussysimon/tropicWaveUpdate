import React from "react";

export const Content = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);
