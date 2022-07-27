import React, { useState, useEffect } from 'react';
import sunImage from "../../asset/images/icon_sun.gif";
import cloudImage from "../../asset/images/icon_cloud.png";
import manyCloudImage from "../../asset/images/icon_cloud_many.png";
import rainImage from "../../asset/images/icon_rain.gif";
import snowImage from "../../asset/images/icon_snow.gif";
import nightImage from "../../asset/images/icon_night.gif";
import DayHelper from "../../Helper/DayHelper.js";

const WeatherImage = ({ data, width, height }) => {

    const { sky, precipitation, time } = data;


    useEffect(() => {
        // console.log(sky, precipitation, time);
    }, [sky])

    return (
        <div>
            {data && printClassificationWeather(sky, precipitation, parseInt(time), width, height)}
        </div>
    );
};
// 값을 분류하여 Image리턴
function printClassificationWeather(sky, precipitation, time, width, height) {
    const Day = new DayHelper();
    let times = parseInt(time);
    const hour = Day.getEvent(times);
    const skyCode = parseInt(sky);
    const precipitationCode = parseInt(precipitation);
    console.log(`printClassificationWeather hour ::: ${hour} ${skyCode} ${precipitationCode}`)
    // 날씨 맑음일때는 sky값으로 출력
    if (precipitationCode === 0 && hour === "morning") {
        // console.log("skyCode === 1 && hour === morning")
        switch (skyCode) {
            case 1:
                return (<img src={sunImage} alt="날씨 맑음" width={width} height={height} />);
            case 3:
                return (<img src={cloudImage} alt="날씨 흐림" width={width} height={height} />);
            case 4:
                return (<img src={manyCloudImage} alt="구름 많음" width={width} height={height} />);
            default:
                alert('날씨 값이 들어오지 않았습니다.')
                break;
        }
    } else if (precipitationCode !== 0 && hour === "morning") {
        // console.log("skyCode !== 1 hour === morning")
        switch (precipitationCode) {
            case 0:
                return (<img src={sunImage} alt="날씨 맑음" width={width} height={height} />);
            case 1:
                return (<img src={rainImage} alt="날씨 비" width={width} height={height} />)
            case 2:
                return (<img src={snowImage} alt="날씨 비와 눈" width={width} height={height} />)
            case 3:
                return (<img src={snowImage} alt="날씨 눈" width={width} height={height} />)
            case 4:
                return (<img src={rainImage} alt="날씨 소나기" width={width} height={height} />);
            case 5:
                return (<img src={rainImage} alt="날씨 빗방울" width={width} height={height} />)
            case 6:
                return (<img src={snowImage} alt="날씨 빗방울눈날림" width={width} height={height} />)
            case 7:
                return (<img src={snowImage} alt="날씨 눈날림" width={width} height={height} />)
            default:
                return;
        }
        // 저녁일때
    } else if (precipitationCode === 0 && hour === "night") {
        // console.log("skyCode === 1 hour === night");
        switch (skyCode) {
            case 1:
                return (<img src={nightImage} alt="밤 날씨 맑음" width={width} height={height} />);
            case 3:
                return (<img src={cloudImage} alt="밤 날씨 흐림" width={width} height={height} />);
            case 4:
                return (<img src={manyCloudImage} alt="밤 구름 많음" width={width} height={height} />);
            default:
                alert('날씨 값이 들어오지 않았습니다.')
                break;
        }
    } else if (precipitationCode !== 0 && hour === "night") {
        // console.log("skyCode !== 1 && hour === night");
        switch (precipitationCode) {
            case 0:
                return (<img src={nightImage} alt="밤 날씨 맑음" width={width} height={height} />);
            case 1:
                return (<img src={rainImage} alt="밤 날씨 비" width={width} height={height} />)
            case 2:
                return (<img src={snowImage} alt="밤 날씨 비와 눈" width={width} height={height} />)
            case 3:
                return (<img src={snowImage} alt="밤 날씨 눈" width={width} height={height} />)
            case 5:
                return (<img src={rainImage} alt="밤 날씨 빗방울" width={width} height={height} />)
            case 6:
                return (<img src={snowImage} alt="밤 날씨 빗방울눈날림" width={width} height={height} />)
            case 7:
                return (<img src={snowImage} alt="밤 날씨 눈날림" width={width} height={height} />)
            default:
                return;
        }
    }
}


WeatherImage.defaultProps = {
    width: "50",
    height: "50",
}


export default WeatherImage;