import React, { useState, useRef, useEffect }  from "react";
import * as faceApi from "face-api.js";

import VideoUrl from './alien.mp4'

function App() {

    const expressionMap = {
        neutral: ["neutral","😶"],
        happy: ["happy","😄"],
        sad: ["sad","😞"],
        angry: ["angry","🤬"],
        fearful: ["fearful","😖"],
        disgusted: ["disgusted","🤢"],
        surprised: ["surprised","😲"]
      };


    const [expression, setExpression] = useState([]);

    /* const [seconds, setSeconds] = useState(0);
    const [interval, setInterville] = useState(0); */

    const video = useRef();

    const log = (...args) => {
        console.log(...args);
      };

      useEffect(() => {
        run()
        /* timer() */
      });
    

      /* const timer = () => {
        interval = setInterval(() => {
          setSeconds(seconds => seconds + 1);
        }, 1000);
      } */

        const run = async () => {

                try {
                    await faceApi.nets.tinyFaceDetector.load("/models/");
                    await faceApi.loadFaceExpressionModel(`/models/`);
                    const mediaStream = await navigator.mediaDevices.getUserMedia({
                    video: { facingMode: "user" }
                    });
            
                    video.current.srcObject = mediaStream;

                } catch (e) {
                    log(e.name, e.message, e.stack);
                }
            };

        const onPlay = async () => {
            if (
            video.current.ended ||
            !faceApi.nets.tinyFaceDetector.params
            ) {
                setTimeout(() => onPlay());
                return;
            }

        const options = new faceApi.TinyFaceDetectorOptions({
            inputSize: 512,
            scoreThreshold: 0.5
        });

        const result = await faceApi
        .detectSingleFace(video.current, options)
        .withFaceExpressions();
        if (result) {
            const Expressions = result.expressions.asSortedArray();
            const expressions = Expressions.reduce(
            (acc, { expression, probability }) => {
                acc.push([expression]);
                return acc;
            },
            []
            );
            let a = expressions.shift();
            setExpression(expressionMap[a])
        }
    
        setTimeout(() => onPlay(), 1000);
      }

    return (
      <div>
        <h1>Face Recognition Webcam</h1>
        <div>
          <p id="emotion" style={{ display: "none" }}>{expression[0]}</p>
          <p>{expression[1]}</p>
        </div>
        <div style={{ width: "200px", height: "300px", position: "relative" }}>
          <video
            ref={video}
            autoPlay
            muted
            onPlay={onPlay}
            style={{
              position: "absolute",
              opacity: 0
            }}

          />
          <video
            width="auto"
            height="auto"
            autoPlay
            controls
            
            style={{
              position: "absolute"
          }}>
            <source src={VideoUrl} type="video/mp4"/>
          </video>
        </div>
        


      </div>
    )
  }

export default App
