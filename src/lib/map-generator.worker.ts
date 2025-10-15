import DottedMapImport from 'dotted-map';

const DottedMap = (DottedMapImport as any).default || DottedMapImport;

addEventListener('message', ({data}) => {
  const map = new DottedMap({height: 100, grid: 'diagonal'});
  const svg = map.getSVG(data.options);
  postMessage(svg);
});
