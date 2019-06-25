浏览器使用摄像头扫描条码或者二维码的demo

### `npm start`

在开发模式下运行应用程序。
打开http//localhost:3000以在浏览器中查看它。

## 该演示demo介绍
基于[zxing-js](https://github.com/zxing-js/library).实现的扫码，本demo使用react框架
在浏览器调用摄像头，实时的扫描条码二维码，支持类型参考zxing-js官方说明。由于调用摄像头需要较高权限，所以只能再localhost或者https下使用。就在本demo开发完成的前几天，官方才实现了连续扫描和混合扫描。

## zxing-js使用方法
```js
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
 ```



