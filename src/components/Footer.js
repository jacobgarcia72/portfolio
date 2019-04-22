import React from 'react';

var dt = new Date();

export default () => (
  <div className="Footer">
    <div className="copyright">
      <div>© {dt.getYear()+1900} Jacob Garcia.</div>
      <div>&nbsp;All rights reserved.</div>
    </div>
  </div>
)

