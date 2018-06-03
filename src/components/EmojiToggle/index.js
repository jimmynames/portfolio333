import React from 'react'
import styled from 'react-emotion'

const Emoji = styled.div`
width: 100%;
min-height: 60px;
height: auto;

.kitty-switch {
width: auto;
width: 100%;
display: block;
position: relative;
}
.kitty-switch .prompt {
display: inline-block;
margin-top: 10px;
}
.kitty-switch .well {
background: ${props => props.theme.black};
height: 20px;
width: 65px;
position: absolute;
right: 90px;
top: 7px;
border-radius: 10px;
box-shadow: inset 0 2px 0 rgba(0, 0, 0, 0.1);
border: 2px solid ${props => props.theme.blue};
cursor: pointer;
}
.kitty-switch #toggle {
opacity: 0;
border: none;
border-radius: 0;
outline: none;
appearance: none;
-moz-appearance: none;
-webkit-appearance: none;
height: 29px;
width: 140px;
width: 100%;
background: transparent;
position: absolute;
left: 0px;
top: 3px;
cursor: pointer;
z-index: 100;
color: tranparent;
}
.kitty-switch #toggle:after {
content: '';
background-color: transparent;
height: 40px;
width: 80px;
position: absolute;
left: 30px;
top: -5px;
}
.kitty-switch #toggle ~ div.kitty:before {
${'' /* content: "⚫️"; */}
content: '👽';
position: absolute;
right: 133.666px;
top: 11px;
font-size: 17px;
z-index: 1;
transition: all 1s ease-out;
}
.kitty-switch #toggle:checked {
right: 0px;
}
.kitty-switch #toggle:checked:after {
left: -80px;
}
.kitty-switch #toggle:checked ~ div.kitty:before {
  ${'' /* content: '⚪️'; */}
  content: '👔';
  top: 11px;
  right: 88px;
}
.kitty-switch #toggle:checked ~ div.visible {
opacity: 1;
max-height: 900px;
overflow: visible;
}
`

const EmojiToggle = () => (
  //onClick={() => this.HandleColorChange()}
  <Emoji>
    <div className="kitty-switch">
      <input type="checkbox" id="toggle" tabIndex="1"></input>
      <div className="kitty"></div>
      <label htmlFor="toggle" className="well"></label>
    </div>
  </Emoji>
)

export default EmojiToggle
