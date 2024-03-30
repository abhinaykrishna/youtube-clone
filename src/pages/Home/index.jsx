import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import Modal from '../../components/Modal';

const Home = () => {
  const displayModal = useSelector(state => state.app.displayModal);
  return (
    <div>
      <Header />
      {displayModal && <Modal />}
    </div>
  );
};

export default Home;
