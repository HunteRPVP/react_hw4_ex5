import React from "react";
import Scooter from "./components/scooter";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scooters: [
        {
          marked: false,
          name: "Midway i-One",
          battery: "https://image.flaticon.com/icons/png/128/42/42077.png",
          batteryPerc: 100,
          price: 500,
          img: "https://msk.gyro-cult.ru/upload/iblock/429/4297b78890c1366c01a18366cfdff890.jpg",
        },
        {
          marked: false,
          name: "Kugoo S1 Plus",
          battery: "https://image.flaticon.com/icons/png/128/42/42247.png",
          batteryPerc: 75,
          price: 400,
          img: "https://msk.gyro-cult.ru/upload/iblock/bd1/bd123b750827feb52135edcf8ecd91dd.jpg",
        },
        {
          marked: false,
          name: "Ninebot Max G30",
          battery: "https://image.flaticon.com/icons/png/128/41/41412.png",
          batteryPerc: 25,
          price: 800,
          img: "https://msk.gyro-cult.ru/upload/iblock/fa0/fa078367e05102c1caef2d67a4885935.jpg",
        },
        {
          marked: false,
          name: "Xiaomi Mijia M365",
          battery: "https://image.flaticon.com/icons/png/128/41/41405.png",
          batteryPerc: 50,
          price: 100,
          img: "https://msk.gyro-cult.ru/upload/iblock/780/780d4e95ae2c56ab5db692368a529d06.jpg",
        },
      ],
    };
  }

  handleMarked(name) {
    const scooters = this.state.scooters.concat();
    const scooter = scooters.find((s) => s.name === name);
    scooter.marked = !scooter.marked;
    this.setState({ scooters });
  }

  renderScooters() {
    return this.state.scooters.map((scooter) => {
      return (
        <Scooter
          onMark={this.handleMarked.bind(this, scooter.name)}
          scooter={scooter}
          key={scooter.name + Math.random()}
        />
      );
    });
  }

  render() {
    return (
      <div className="app">
        <div className="list">{this.renderScooters()}</div>
      </div>
    );
  }
}

export default App;
