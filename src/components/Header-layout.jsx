import React from 'react';

// This wrapper is deliberately unstyled: it has no stylesheet, and the
// layer list in App.css notes the absence. It does not carry the shared
// --content-width measure either, because Portada's header bar is
// position:fixed (zero height in normal flow) and Hero's inner container
// already carries that measure, so constraining this section too would
// change nothing.
function headerLayout(props) {
  return (
    <section className="header-layout">
      {props.children}
    </section>
  );
}

export default headerLayout;
