import React, { useEffect, useState } from 'react';

const ConsoleAnimation = () => {
  const [consoleText, setConsoleText] = useState('');
  const lines = [
    'Welcome to our site!',
    'We offer courses for beginners to learn JavaScript. Click on the Menus on the left to Access the courses and challenges.',
    'Contact Us for more information or Questions.',
  ];

  useEffect(() => {
    const animateConsole = (lines, lineIndex = 0, charIndex = 0) => {
      if (lineIndex === lines.length) {
        setTimeout(() => {
          setConsoleText('');
        }, 3000);
        return;
      }

      const line = lines[lineIndex];
      if (charIndex === 0) {
        setConsoleText((prevText) => prevText + '<br/>');
      }
      setConsoleText((prevText) => prevText + line.charAt(charIndex));

      charIndex++;
      if (charIndex === line.length) {
        lineIndex++;
        charIndex = 0;
      }

      setTimeout(() => animateConsole(lines, lineIndex, charIndex), 45);
    };

    animateConsole(lines);
  }, []);

  return (
    <div id="console" dangerouslySetInnerHTML={{ __html: consoleText }} />
  );
};

export default ConsoleAnimation;
