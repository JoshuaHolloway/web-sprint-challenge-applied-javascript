import {ce, qs, ac} from '../../lib/~';

const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  //  <div class="header">
  const div_header = ce('div');
  ac(div_header, 'header');

  //    <span class="date">{ date }</span>
  const span_date = ce('span');
  ac(span_date, 'date');
  span_date.textContent = date;

  //    <h1>{ title }</h1>
  const h1 = ce('h1');
  h1.textContent = title;

  //    <span class="temp">{ temp }</span>
  const span_temp = ce('span');
  ac(span_temp, 'temp');
  span_temp.textContent = temp;

  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  div_header.appendChild(span_date);
  div_header.appendChild(h1);
  div_header.appendChild(span_temp);

  return div_header;
}


const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  

  const header = Header('TITLE', 'DATE', 'TEMP');
  const element = qs(selector);
  element.appendChild(header);
}

export { Header, headerAppender }
