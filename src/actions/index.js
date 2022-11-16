export function addClass(classL) {
  return {
    type: 'ADD_CLASS',
    payload: {
      classL,
    },
  };
}
