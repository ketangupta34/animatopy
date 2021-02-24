import { useState } from "react";
import css from "css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import "../stylesheets/body.css";

import animateData from "../data/animateData";

function Body() {
  const [curAnimation, setCurAnimation] = useState("bounce");
  const [titleClass, setTitleClass] = useState("siteTitle");
  const [codeStyle, setCodeStyle] = useState({ opacity: "0" });
  const [innerHTML, setInnerHTML] = useState("");
  const [innerCSS, setInnerCSS] = useState("");

  const testAnimate = (x) => {
    setTitleClass(`siteTitle animate__animated animate__${curAnimation}`);
    setTimeout(() => {
      setTitleClass("siteTitle");
    }, 1000);
  };

  const showCssHtml = (x) => {
    let cssObject = JSON.parse(JSON.stringify(animateData));

    cssObject.stylesheet.rules = cssObject.stylesheet.rules
      .map((e) => {
        if (e.name === curAnimation) return e;
        if (e.selectors && e.selectors.indexOf("." + curAnimation) > -1)
          return e;
        if (e.selectors && e.selectors.indexOf(".animated") > -1) return e;
        else return undefined;
      })
      .filter((e) => e !== undefined);

    setInnerCSS(css.stringify(cssObject));
    setInnerHTML(`<div className="animated ${curAnimation}">Example</div>`);
    setCodeStyle({ opacity: "1" });
  };

  const animateItButton = (e) => {
    e.preventDefault();
    testAnimate();
    showCssHtml();
  };

  const callCopied = () => {
    console.log("a");
    const tag = document.querySelector(".copiedTag");
    tag.style.top = "10%";
    setTimeout(() => {
      tag.style.top = "-10%";
    }, 1200);
  };

  const copyHTML = () => {
    const elem = document.createElement("textarea");
    elem.value = innerHTML;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    callCopied();
  };
  const copyCSS = () => {
    const elem = document.createElement("textarea");
    elem.value = innerCSS;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    callCopied();
  };

  return (
    <div className="body">
      <div className="copiedTag">
        <h3>Copied!!</h3>
        <img
          style={{ marginLeft: "5px" }}
          width="25"
          height="25"
          alt="accept"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNBNUVCNzg7IiBkPSJNNDMzLjEzOSw2Ny4xMDhMMjAxLjI5NCwyOTguOTUzYy02LjI0OSw2LjI0OS0xNi4zODEsNi4yNDktMjIuNjMsMEw3OC44NjEsMTk5LjE1TDAsMjc4LjAxMQ0KCWwxNTAuNTQ3LDE1MC41NDljMTAuNDU4LDEwLjQ1OCwyNC42NDIsMTYuMzMzLDM5LjQzMSwxNi4zMzNsMCwwYzE0Ljc4OCwwLDI4Ljk3My01Ljg3NiwzOS40My0xNi4zMzNMNTEyLDE0NS45NjhMNDMzLjEzOSw2Ny4xMDh6Ig0KCS8+DQo8ZyBzdHlsZT0ib3BhY2l0eTowLjE7Ij4NCgk8cGF0aCBkPSJNNDg1LjkyMSwxMTkuODg4TDE4Ny41OSw0MTguMjJjLTguMjU0LDguMjUzLTE4LjYzMywxMy44ODItMjkuODQ3LDE2LjM5MWM5LjM2Myw2LjYzNSwyMC42MDgsMTAuMjgsMzIuMjM1LDEwLjI4bDAsMA0KCQljMTQuNzg4LDAsMjguOTczLTUuODc2LDM5LjQzLTE2LjMzM0w1MTIsMTQ1Ljk2Nkw0ODUuOTIxLDExOS44ODh6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
        />
      </div>

      <div className="bodyHeader">
        <h1 className={titleClass}>Animatopy</h1>
        <p className="siteTagLine">Just-add-water CSS animations snippets 😜</p>
      </div>

      <div className="bodyMain">
        <form>
          <select
            className="input"
            onChange={(e) => {
              setCurAnimation(e.target.value);
            }}
          >
            <optgroup label="Attention Seekers">
              <option value="bounce">bounce</option>
              <option value="flash">flash</option>
              <option value="pulse">pulse</option>
              <option value="rubberBand">rubberBand</option>
              <option value="shake">shake</option>
              <option value="swing">swing</option>
              <option value="tada">tada</option>
              <option value="wobble">wobble</option>
              <option value="jello">jello</option>
              <option value="heartBeat">heartBeat</option>
            </optgroup>

            <optgroup label="Bouncing Entrances">
              <option value="bounceIn">bounceIn</option>
              <option value="bounceInDown">bounceInDown</option>
              <option value="bounceInLeft">bounceInLeft</option>
              <option value="bounceInRight">bounceInRight</option>
              <option value="bounceInUp">bounceInUp</option>
            </optgroup>

            <optgroup label="Bouncing Exits">
              <option value="bounceOut">bounceOut</option>
              <option value="bounceOutDown">bounceOutDown</option>
              <option value="bounceOutLeft">bounceOutLeft</option>
              <option value="bounceOutRight">bounceOutRight</option>
              <option value="bounceOutUp">bounceOutUp</option>
            </optgroup>

            <optgroup label="Fading Entrances">
              <option value="fadeIn">fadeIn</option>
              <option value="fadeInDown">fadeInDown</option>
              <option value="fadeInDownBig">fadeInDownBig</option>
              <option value="fadeInLeft">fadeInLeft</option>
              <option value="fadeInLeftBig">fadeInLeftBig</option>
              <option value="fadeInRight">fadeInRight</option>
              <option value="fadeInRightBig">fadeInRightBig</option>
              <option value="fadeInUp">fadeInUp</option>
              <option value="fadeInUpBig">fadeInUpBig</option>
            </optgroup>

            <optgroup label="Fading Exits">
              <option value="fadeOut">fadeOut</option>
              <option value="fadeOutDown">fadeOutDown</option>
              <option value="fadeOutDownBig">fadeOutDownBig</option>
              <option value="fadeOutLeft">fadeOutLeft</option>
              <option value="fadeOutLeftBig">fadeOutLeftBig</option>
              <option value="fadeOutRight">fadeOutRight</option>
              <option value="fadeOutRightBig">fadeOutRightBig</option>
              <option value="fadeOutUp">fadeOutUp</option>
              <option value="fadeOutUpBig">fadeOutUpBig</option>
            </optgroup>

            <optgroup label="Flippers">
              <option value="flip">flip</option>
              <option value="flipInX">flipInX</option>
              <option value="flipInY">flipInY</option>
              <option value="flipOutX">flipOutX</option>
              <option value="flipOutY">flipOutY</option>
            </optgroup>

            <optgroup label="Lightspeed">
              <option value="lightSpeedIn">lightSpeedIn</option>
              <option value="lightSpeedOut">lightSpeedOut</option>
            </optgroup>

            <optgroup label="Rotating Entrances">
              <option value="rotateIn">rotateIn</option>
              <option value="rotateInDownLeft">rotateInDownLeft</option>
              <option value="rotateInDownRight">rotateInDownRight</option>
              <option value="rotateInUpLeft">rotateInUpLeft</option>
              <option value="rotateInUpRight">rotateInUpRight</option>
            </optgroup>

            <optgroup label="Rotating Exits">
              <option value="rotateOut">rotateOut</option>
              <option value="rotateOutDownLeft">rotateOutDownLeft</option>
              <option value="rotateOutDownRight">rotateOutDownRight</option>
              <option value="rotateOutUpLeft">rotateOutUpLeft</option>
              <option value="rotateOutUpRight">rotateOutUpRight</option>
            </optgroup>

            <optgroup label="Sliding Entrances">
              <option value="slideInUp">slideInUp</option>
              <option value="slideInDown">slideInDown</option>
              <option value="slideInLeft">slideInLeft</option>
              <option value="slideInRight">slideInRight</option>
            </optgroup>
            <optgroup label="Sliding Exits">
              <option value="slideOutUp">slideOutUp</option>
              <option value="slideOutDown">slideOutDown</option>
              <option value="slideOutLeft">slideOutLeft</option>
              <option value="slideOutRight">slideOutRight</option>
            </optgroup>

            <optgroup label="Zoom Entrances">
              <option value="zoomIn">zoomIn</option>
              <option value="zoomInDown">zoomInDown</option>
              <option value="zoomInLeft">zoomInLeft</option>
              <option value="zoomInRight">zoomInRight</option>
              <option value="zoomInUp">zoomInUp</option>
            </optgroup>

            <optgroup label="Zoom Exits">
              <option value="zoomOut">zoomOut</option>
              <option value="zoomOutDown">zoomOutDown</option>
              <option value="zoomOutLeft">zoomOutLeft</option>
              <option value="zoomOutRight">zoomOutRight</option>
              <option value="zoomOutUp">zoomOutUp</option>
            </optgroup>

            <optgroup label="Specials">
              <option value="hinge">hinge</option>
              <option value="jackInTheBox">jackInTheBox</option>
              <option value="rollIn">rollIn</option>
              <option value="rollOut">rollOut</option>
            </optgroup>
          </select>

          <button className="button" onClick={animateItButton}>
            Animate it
          </button>
        </form>
      </div>

      <div className="hr"></div>

      <div className="bodyFooter">
        <p className="siteTagLine2">
          No need to Download Animate.css, Just copy the code.
        </p>
      </div>

      <div style={codeStyle}>
        <div className="htmlCode">
          <div className="codeHead">
            <h2>HTML:</h2>
            <button className="copyButton" onClick={copyHTML}>
              Copy!
            </button>
          </div>
          <pre>
            <SyntaxHighlighter style={materialDark} language="javascript">
              {innerHTML}
            </SyntaxHighlighter>
          </pre>
        </div>

        <div className="cssCode">
          <div className="codeHead">
            <h2>CSS:</h2>
            <button className="copyButton" onClick={copyCSS}>
              Copy!
            </button>
          </div>
          <pre>
            <SyntaxHighlighter style={materialDark} language="javascript">
              {innerCSS}
            </SyntaxHighlighter>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default Body;
