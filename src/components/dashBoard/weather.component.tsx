import { ChangeEvent, useState } from "react";
import "./weather.component.css";

export const WeatherApp = (): JSX.Element => {
  const [location, setLocation] = useState<string>("");
  const [options, setOptions] = useState<[]>([]);

  const getSearchOptions = async (value: string) => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${
          process.env.REACT_APP_API_KEY
        }`
      );
      const data = await response.json();
      setOptions(data);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();
    setLocation(value);

    if (value === "") return;

    getSearchOptions(value);
  };

  return (
    <div className="dashboard col-md-6">
      <div className="card">
        <h1>
          Weather <span className="font-bold">ForeCast</span>
        </h1>
        <p>
          Enter below a place you want to know the weather of and select an
          option from the dropdown
        </p>
        <div className="flex">
          <input
            type="text"
            placeholder="Enter City"
            value={location}
            onChange={onInputChange}
          />
          <ul>
            {options.map((option: { name: string }, index: number) => (
              <li key={option.name + "-" + index}>
                {" "}
                <button>{option.name}</button>
              </li>
            ))}
          </ul>
          <button>Search</button>
        </div>
      </div>
      <div className="rectangle"></div>
    </div>
  );
};
