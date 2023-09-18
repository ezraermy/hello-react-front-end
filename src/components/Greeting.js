import React, { useEffect, useState } from 'react';

function Greeting() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    
  }, []);

  return (
    <div>
      <h1>Random Greeting</h1>
      <p>{greeting}</p>
    </div>
  );
}

export default Greeting;
