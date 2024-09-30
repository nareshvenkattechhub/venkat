import React, { useState, useRef, useEffect } from 'react';
import '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [modelLoaded, setModelLoaded] = useState(false);
  const [videoStream, setVideoStream] = useState(null);
  const [model, setModel] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [loadingText, setLoadingText] = useState(false);

  useEffect(() => {
    async function loadModel() {
      setLoadingText(true);
      const loadedModel = await cocoSsd.load();
      setModel(loadedModel);
      setModelLoaded(true);
      setLoadingText(false);
    }
    loadModel();
  }, []);

  const startVideoStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setVideoStream(stream);
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    } catch (err) {
      console.error('Error accessing camera:', err);
    }
  };

  const stopVideoStream = () => {
    if (videoStream) {
      const tracks = videoStream.getTracks();
      tracks.forEach(track => track.stop());
      setVideoStream(null);
    }
  };

  const takePicture = async () => {
    const canvas = canvasRef.current;
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    if (model) {
      const predictions = await model.detect(canvas);
      displayResults(predictions);
    }
  };

  const displayResults = (predictions) => {
    const outputDiv = document.getElementById('output');
    
    outputDiv.innerHTML = '';

    predictions.forEach(prediction => {
      const p = document.createElement('p');
      p.textContent = `${prediction.class}: ${Math.round(prediction.score * 100)}%`;
      outputDiv.appendChild(p);

      const resultCanvas = document.createElement('canvas');
      console.log(predictions);
      resultCanvas.id = 'result-canvas';
      resultCanvas.width = canvasRef.current.width;
      resultCanvas.height = canvasRef.current.height;
      const ctx = resultCanvas.getContext('2d');

      ctx.drawImage(canvasRef.current, 0, 0);
      ctx.strokeStyle = 'red';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.rect(prediction.bbox[0], prediction.bbox[1], prediction.bbox[2], prediction.bbox[3]);
      ctx.stroke();

      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = '';
      resultDiv.appendChild(resultCanvas);
    });

    document.getElementById('clear-results-btn').style.display = 'inline-block';
    document.querySelector('.progress').style.display = 'none';
  };

  const clearResults = () => {
    document.getElementById('output').innerHTML = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('clear-results-btn').style.display = 'none';
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadstart = () => {
      document.querySelector('.progress').style.display = 'block';
    };

    reader.onload = async (event) => {
      const imageElement = document.createElement('img');
      imageElement.src = event.target.result;
      imageElement.onload = async () => {
        if (model) {
          await detectObjects(imageElement);
        }
      };
    };

    reader.readAsDataURL(file);
  };

  const detectObjects = async (imageElement) => {
    const canvas = document.createElement('canvas');
    canvas.width = imageElement.width;
    canvas.height = imageElement.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(imageElement, 0, 0);

    if (model) {
      const predictions = await model.detect(canvas);
      displayResults(predictions);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Accessing the Interface:</h2>
          <ul>
            <li>
              <h3>When the page loads, users will see buttons for "Live Video" and "Upload Image".</h3>
            </li>
            <ul>
              <li><span style={{ fontWeight: 'bold' }}>Live Video:</span> Click "Live Video" to detect objects via camera. Access granted triggers video stream.</li>
              <li><span style={{ fontWeight: 'bold' }}>Upload Image:</span> Click "Upload Image" to select image for detection.</li>
              <li><span style={{ fontWeight: 'bold' }}>Object Detection:</span> Detect objects with confidence scores, outlined on image.</li>
              <li><span style={{ fontWeight: 'bold' }}>Clear Results:</span> After detection, click "Clear Results" to hide detected objects.</li>
              <li><span style={{ fontWeight: 'bold' }}>Understanding Results:</span> List objects with names and confidence scores. Bounding boxes show object location.</li>
            </ul>
          </ul>

          <div className="text-center text-danger">
            Try now 
          </div>

          <div className="text-center">
            <button onClick={startVideoStream} className="btn btn-primary me-5">Live Video</button>
            <button onClick={stopVideoStream} className="btn btn-danger me-2" style={{ display: videoStream ? 'inline-block' : 'none' }}>Stop</button>
            <button onClick={clearResults} className="btn btn-secondary me-2" id="clear-results-btn" style={{ display: 'none' }}>Clear Results</button>
            <button className="btn btn-primary" onClick={() => document.getElementById('image-upload').click()}>Upload Image</button>
          </div>
          <input type="file" id="image-upload" accept="image/*" style={{ display: 'none' }} onChange={handleImageUpload} />
          <div id="video-container" style={{ display: videoStream ? 'block' : 'none' }}>
            <video ref={videoRef} autoPlay playsInline></video>
            <button onClick={takePicture} className="btn btn-primary mt-2">Take Picture</button>
          </div>
          <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
          <div id="output" className="text-center mb-3"></div>
          <div id="result"></div>
          <div className="progress" style={{ display: 'none' }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          {loadingText && <div id="loading-text" className="text-center text-danger">Model loading and processing...</div>}
        </div>
      </div>
    </div>
  );
}

export default App;
