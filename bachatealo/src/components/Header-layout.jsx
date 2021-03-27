import React from 'react';

function headerLayout(props) {
  return (
    <section className="header-layout">
      {props.children}
    </section>
  );
}

export default headerLayout;
