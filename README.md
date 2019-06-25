浏览器使用摄像头扫描条码或者二维码的demo

### `npm start`

在开发模式下运行应用程序。
打开http//localhost:3000以在浏览器中查看它。

## 该演示demo介绍
基于[zxing-js](https://github.com/zxing-js/library).实现的扫码，本demo使用react框架
在浏览器调用摄像头，实时的扫描条码二维码，支持类型参考zxing-js官方说明。由于调用摄像头需要较高权限，所以只能再localhost或者https下使用。就在本demo开发完成的前几天，官方才实现了连续扫描和混合扫描。

## zxing-js使用方法
js部分
```js
 codeReader = new BrowserMultiFormatReader();

    codeReader
      .getVideoInputDevices()
      .then(videoInputDevices => {
        //这个id为摄像头的id，对于pc可能只有一个摄像头，对于手机，则对应前后摄像头
        firstDeviceId = videoInputDevices[0].deviceId;
        //'video'这个对应布局中video组件的id
        codeReader
          .decodeFromInputVideoDeviceContinuously(firstDeviceId, 'video', (result, err) => {
            if (result) {
            //这里返回扫描结果，text为扫描到的值，其他的值可以自行打印观看
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
 布局
 这里需要一个video组件作为载体进行预览
 ```html
 <div className="mains">
   <video className="scanView" id="video" height={this.state.screenHeight} width={this.state.screenWidth} ></video>
 </div>
```
其中
```js
BrowserMultiFormatReader
```
为扫描用工具类，使用这个可以实现连续混合的扫描
该框架还可以直接用网络视频进行扫描，或者图片扫描，分别对应不同的工具类，可以参考官方文档
完成以上之后就可以进行扫描了


