import "./weather.component.css";

export const WeatherApp = () => {
  return (
    <div className="dashboard col-md-6">
      <div className="card col-md-6">
        <h1 className="font-thin">
          Weather <span className="font-bold">ForeCast</span>
        </h1>
        <p>
          Enter below a place you want to know the weather of and select an
          option from the dropdown
        </p>
        <div className="flex">
          <input type="text" placeholder="Enter City" />
          <button>Search</button>
        </div>
      </div>
      <div className="rectangle"></div>
    </div>
  );
};
