import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdMic, MdClose } from 'react-icons/md';
import useSpeechRecognition from '../../hooks/useSpeechRecognition';
import { toggleVoiceModalDisplay } from '../../store/slices/appSlice';

const Modal = () => {
  const displayModal = useSelector(state => state.app.displayModal);
  const dispatch = useDispatch();

  const { isListening, transcript, startListening, stopListening, error } = useSpeechRecognition({
    continuous: false,
    lang: 'en-IN',
    interimResults: false,
  });

  const startStopListening = () => {
    isListening ? stopListening() : startListening();
  };

  console.log({ transcript });

  return createPortal(
    <div className={`fixed inset-0 ${displayModal ? 'block' : 'hidden'} bg-[#000] bg-opacity-30`}>
      <div className='fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-lg p-10 w-4/12'>
        <div className='flex items-center my-6 justify-between'>
          <h2 className='text-xl font-semibold'>Search with your voice</h2>
          <MdClose
            size='24px'
            className='cursor-pointer'
            onClick={() => dispatch(toggleVoiceModalDisplay())}
          />
        </div>
        {error && <p className='text-red-500 text-sm mb-3'>{error}</p>}
        {isListening && <p className='text-gray-900 text-lg'>Listening... {transcript}</p>}
        <div
          className={`bg-slate-100 hover:bg-slate-200 rounded-full px-2 py-3 cursor-pointer w-16 mt-28 mb-10 mx-auto flex justify-center ${
            isListening ? 'bg-red-500' : 'bg-slate-100'
          }`}
          onClick={startStopListening}
        >
          <MdMic size='36px' color={isListening ? 'white' : ''} />
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default Modal;
