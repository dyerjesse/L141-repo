/* Copyright (c) 2021, ARTCOMPILER INC */
import * as React from 'react';
import * as d3 from 'd3';
import './style.css';

function renderAttr(attr) {
  Object.keys(attr).forEach(key => {
    if (key.indexOf('on') === 0) {
      attr[key] = new Function('e', attr[key]);
    }
  });
  return attr;
}

function renderElts(data) {
  data = [].concat(data);
  const elts = [];
  let key = 1;
  data.forEach(d => {
    switch(d.type) {
    case 'input':
      elts.push(<input key={key++} {...renderAttr(d.attr)} />);
      break;
    case 'button':
      elts.push(<button key={key++} {...renderAttr(d.attr)}>{renderElts(d.elts)}</button>);
      break;
    case 'svg':
      elts.push(<svg key={key++} {...renderAttr(d.attr)}>{renderElts(d.elts)}</svg>);
      break;
    case 'img':
      elts.push(<img key={key++} {...renderAttr(d.attr)}/>);
      break;
    case 'path':
      elts.push(<path key={key++} {...renderAttr(d.attr)}>{renderElts(d.elts)}</path>);
      break;
    case 'code':
      elts.push(<code key={key++} {...renderAttr(d.attr)}>{renderElts(d.elts)}</code>);
      break;
    case 'a':
      elts.push(<a key={key++} {...renderAttr(d.attr)}>{renderElts(d.elts)}</a>);
      break;
    case 'ol':
      elts.push(<ol key={key++} {...renderAttr(d.attr)}>{renderElts(d.elts)}</ol>);
      break;
    case 'ul':
      elts.push(<ul key={key++} {...renderAttr(d.attr)}>{renderElts(d.elts)}</ul>);
      break;
    case 'li':
      elts.push(<li key={key++} {...renderAttr(d.attr)}>{renderElts(d.elts)}</li>);
      break;
    case 'title':
      document.title = renderElts(d.elts);
      break;
    case 'div':
      elts.push(<div key={key++} {...renderAttr(d.attr)}>{renderElts(d.elts)}</div>);
      break;
    case 'span':
      elts.push(<span key={key++} {...renderAttr(d.attr)} >{renderElts(d.elts)}</span>);
      break;
    case 'h3':
      elts.push(<h3 key={key++}>{renderElts(d.elts)}</h3>);
      break;
    case 'p':
      elts.push(<p key={key++} {...renderAttr(d.attr)}>{renderElts(d.elts)}</p>);
      break;
    default:
      elts.push(d);
      break;
    }
  });
  return elts;
}

window.transition = (action) => {
  alert(JSON.stringify(action));
  window.gcexports.dispatcher.dispatch({[window.gcexports.id]: {
    data: {
      action,
    },
    recompileCode: true,
    dontUpdateID: false
  }});
}

export class Viewer extends React.Component {
  componentDidMount() {
    d3.select('#graff-view').append('div').classed('done-rendering', true);
  }
  
  render() {
    const props = this.props;
    const data = props.obj && [].concat(props.obj) || [];
    const elts = renderElts(data);
    return (
      <div>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
        {elts}
      </div>
    );
  }
};

window.gcexports.viewer = (function () {
  return {
    Viewer: Viewer,
  };
})();
