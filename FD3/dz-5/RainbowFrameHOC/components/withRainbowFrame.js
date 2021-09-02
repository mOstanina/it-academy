import React from 'react';
function withRainbowFrame(colors) {

  return function (Component) {
    return function (props) {

      let code = <Component {...props} />
      colors.forEach(element =>
        code = <div style={{ border: "solid 3px " + element, padding: "10px" }} >{code}</div>)

      return code
    }
  };

}
export { withRainbowFrame };