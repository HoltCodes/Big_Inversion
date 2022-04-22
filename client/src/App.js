import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      < PersonCard 
          firstName={"Rogan"}
          lastName={"Holt"}
          age={29}
          hairColor={"Blonde"}
      />
      < PersonCard 
          firstName={"Ian"}
          lastName={"Black"}
          age={23}
          hairColor={"Black"}
      />
      < PersonCard 
          firstName={"Sara"}
          lastName={"Smith"}
          age={32}
          hairColor={"Brown"}
      />
      < PersonCard 
          firstName={"Zack"}
          lastName={"Harris"}
          age={28}
          hairColor={"Red"}
      />
    </div>
  );
}

export default App;
