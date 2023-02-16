import React, { useState, useRef, useEffect }  from "react";
import * as faceApi from "face-api.js";



function Webcam() {

    const expressionMap = {
        neutral: "😶",
        happy: "😄",
        sad: "😞",
        angry: "🤬",
        fearful: "😖",
        disgusted: "🤢",
        surprised: "😲"
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
        <div>
            <p id="emotion" style={{
              fontSize: "42px",
              paddingTop: "20px",
            }}>{expression}</p>
        </div>
        <div style={{
              position: "relative",
              width: "334px",
              height: "250px"
            }}>
          <video
            ref={video}
            autoPlay
            muted
            onPlay={onPlay}
            style={{
              position: "relative",
              width: "auto",
              height: "250px"
            }}

          />
        </div>
        


      </div>
    )
  }

export default Webcam
