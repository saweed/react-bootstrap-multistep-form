import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  return (
    // <!-- MultiStep Form -->
    <div className="container-fluid" id="grad1">
      <div className="row justify-content-center mt-0">
        <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
          <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
            <Header />
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
