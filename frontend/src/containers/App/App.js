import Header from '../../components/Header';
import GoodsTable from '../GoodsTable';

import AuthController from '../AuthController';

function App() {
  return (
    <div>
      <Header />
       { /*<GoodsTable /> */ }
      
      <AuthController />
    </div>
  );
}

export default App;
