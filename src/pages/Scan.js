import React, { Component } from 'react';
import '../css/Scan.css'
import { BrowserMultiFormatReader, NotFoundException } from '@zxing/library';
var codeReader
var firstDeviceId
class Scan extends Component {
  state = {
    screenHeight: 0,
    screenWidth: 0
  }
  componentDidMount() {
    this.setState({
      screenHeight: document.body.clientHeight,
      screenWidth: document.body.clientWidth
    })
    // screenWidth=document.body.clientWidth
    // screenHeight=document.body.clientHeight
    // Quagga.init({
    //   inputStream: {
    //     name: "Live",
    //     type: "LiveStream",
    //     target: document.querySelector('#interactive'),   // Or '#yourElement' (optional)
    //     constraints: {
    //       width: "100%",
    //       height: "100%",
    //   }
    //   },
    //   decoder: {
    //     readers: ["code_128_reader"]
    //   }
    // }, function (err) {
    //   if (err) {
    //     console.log(err);
    //     return
    //   }
    //   console.log("Initialization finished. Ready to start");
    //   Quagga.start();
    //   Quagga.onDetected(function(data){
    //     console.log(data)
    //     alert(data.codeResult.code)
    // })
    // });
    codeReader = new BrowserMultiFormatReader();

    codeReader
      .getVideoInputDevices()
      .then(videoInputDevices => {
        firstDeviceId = videoInputDevices[0].deviceId;
        codeReader
          .decodeFromInputVideoDeviceContinuously(firstDeviceId, 'video', (result, err) => {
            if (result) {
              console.log(result)
              alert(result.text)
            }
            if (err && !(err instanceof NotFoundException)) {
              console.error(err)
            }
          })
      })
      .catch(err => console.error(err));
  }
  render() {
    return (
      <div className="mains">
        <video className="scanView" id="video" height={this.state.screenHeight} width={this.state.screenWidth} ></video>
      </div>)
  }
}

export default Scan;