import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

//membuat elemen dengan function.
//Clock merupakan komponen (memakai hurup besar)
function Clock1(props) {
  return (
    <div>
      <h3>Membuat elemen dengan fuction</h3>
      <h1>Hello World!</h1>
      <h2>it is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

//membuat elemen dengan class
//contoh dari statefull karena memanggil
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  //lokasi yang tepat untuk mengeset interval
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  //mengumount mengclearkan komponen yang tidak digunakan
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h3>Membuat elemen dengan class</h3>
        <h1>Hello World!</h1>
        <h2>it is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

class Organisasi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOrganisasi: [],
    };
  }

  ambilDataDariServerAPI = () => {
    fetch("https://my-json-server.typicode.com/bellasoniadwi/kelas3e/organisasi") // alamat URL API yang ingin kita ambil datanya
      .then((response) => response.json()) // ubah response data dari URL API menjadi sebuah data json
      .then((jsonHasilAmbilDariAPI) => {
        this.setState({
          listOrganisasi: jsonHasilAmbilDariAPI,
        });
      });
  };
  //lokasi yang tepat untuk mengeset interval
  componentDidMount() {
    this.ambilDataDariServerAPI();
  }
  //mengumount mengclearkan komponen yang tidak digunakan
  componentWillUnmount() {}

  // render() {
  //   return (
  //     <div>
  //       <h3>Membuat elemen dengan class</h3>
  //       <h1>Hello World!</h1>
  //       <h2>it is {this.state.date.toLocaleTimeString()}.</h2>
  //     </div>
  //   );
  // }
  render() {
    return (
      <div class="list-group w-auto">
        {this.state.listOrganisasi.map((organisasi) => {
          return (
            <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
              <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0" />
              <div class="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <h6 class="mb-0">{organisasi.nama}</h6>
                  <p class="mb-0 opacity-75">{organisasi.sekretariat}</p>
                </div>
                <small class="opacity-50 text-nowrap">now</small>
              </div>
            </a>
          );
        })}
      </div>
    );
  }
}

function Upp() {
  return (
    <div>
      <Clock />
      <Organisasi />
    </div>
  );
}

root.render(<Upp />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();