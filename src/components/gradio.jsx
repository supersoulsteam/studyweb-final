import React, { useEffect } from 'react';

function GradioComponent() {
  useEffect(() => {
    // Load Gradio script dynamically
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://gradio.s3-us-west-2.amazonaws.com/4.16.0/gradio.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <gradio-app src="https://supersouls2-programming-mentor.hf.space"></gradio-app>
  );
}

export default GradioComponent;