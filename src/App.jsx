import PopularPlace from './components/PopularPlace';

function App() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-slate-50">
      <PopularPlace city="monterrey" />
      <PopularPlace city="guadalajara" />
      <PopularPlace city="cdmx" />
    </div>
  );
}

export default App;
