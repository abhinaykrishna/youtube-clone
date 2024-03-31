import { useState, useEffect, useRef } from 'react';

const useSpeechRecognition = options => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState('');
  const speechRef = useRef(null);

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) {
      setError('Web Speech API is not supported');
      return;
    }

    speechRef.current = new window.webkitSpeechRecognition();
    const recognition = speechRef.current;
    recognition.interimResults = options.interimResults || false;
    recognition.lang = options.lang || 'en-US';
    recognition.continuous = options.continuous || false;

    recognition.onresult = event => {
      let text = '';
      for (let i = 0; i < event.results.length; i++) {
        text += event.results[i][0].transcript;
      }
      setTranscript(text);
    };

    recognition.onerror = event => {
      console.log(event);
      setError(
        `Speech recognition error: ${
          event.error === 'not-allowed'
            ? 'To search by voice, go to your browser settings and allow access to microphone.'
            : event.error
        }`
      );
    };

    recognition.onend = () => {
      setIsListening(false);
      setTranscript('');
    };

    return () => {
      recognition.stop();
    };
  }, []);

  const startListening = () => {
    if (speechRef.current && !isListening) {
      speechRef.current.start();
      setIsListening(true);
    }
  };

  const stopListening = () => {
    if (speechRef.current && isListening) {
      speechRef.current.stop();
      setIsListening(false);
    }
  };

  return { isListening, transcript, error, startListening, stopListening };
};

export default useSpeechRecognition;
