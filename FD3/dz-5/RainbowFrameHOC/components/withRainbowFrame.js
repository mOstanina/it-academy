import React from 'react';

function withRainbowFrame(colors) {
  if (colors.length === 0) {
    return function (Component) {
      return props => (
        <Component {...props} />
      );
    };
  } else {
    var el = colors.shift();
    <div style={{ border: "solid 3px " + el, padding: "10px" }}> {withRainbowFrame(colors)}</div>
  }

  // let code = function (Component) {
  //   return props => (
  //     <Component {...props} />
  //   );
  // };
  // let fr;
  // colors.forEach(element =>
  //   fr = <div style={{ border: "solid 3px " + element, padding: "10px" }} >{code}</div>)

  // return fr


  // return function (Component) {
   
  //     colors.forEach(element =>
  //       fr = <div style={{ border: "solid 3px " + element, padding: "10px" }} >{<Component {...props} />}</div>)

  // };
}

export { withRainbowFrame };