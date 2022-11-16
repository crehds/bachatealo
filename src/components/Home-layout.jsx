import React from 'react';

function HomeLayout(props) {
  return (
    <section className="home-layout">
      {props.children}
    </section>
  );
}

export default HomeLayout;
