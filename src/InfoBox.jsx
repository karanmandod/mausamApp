import { dividerClasses } from "@mui/material/Divider";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1599059021750-82716ae2b661?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://media.istockphoto.com/id/533292615/photo/alley-in-snowy-morning.jpg?s=2048x2048&w=is&k=20&c=Bk3suOKOiKC1gyNbFjlHqYrGB-OyHUwyJu_7Ncujcd8=";
    const HOT_URL="https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.jpg?s=2048x2048&w=is&k=20&c=vs-wMhpIBhtgOfVrwVCGOIqto--JCLnYkunCXaq0F7c=";
    const RAIN_URL="https://media.istockphoto.com/id/1476190237/photo/summer-rain-raindrops-bad-weather-depression.jpg?s=2048x2048&w=is&k=20&c=ky5JTM-ZpKr0zoDfB4jnatyATQ-5ZG7kdg9vU8ndrww=";
    
    return (<div className="InfoBox" >
        <h1>Weather Info</h1>
        <div className="cardContainer">
            <Card className="Icard" sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity>85? RAIN_URL: info.temp >25? HOT_URL : COLD_URL }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} {info.humidity>85? <ThunderstormIcon/>: info.temp >25? <SunnyIcon/> : <AcUnitIcon/> }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    </Typography>
                    <p>Temperature: {info.temp}&deg;C</p>
                    <p>FeelsLike: {info.feelsLike}&deg;C</p>
                    <p>Humidity: {info.humidity}</p>
                    <p>SeaLevel: {info.seaLevel}</p>
                    <p>TempMax: {info.tempMax}&deg;C</p>
                    <p>TempMin: {info.tempMin}&deg;C</p>
                    <p>The Weather can be discribed as "{info.weather}"</p>

                </CardContent>
            </Card>
        </div>
    </div>)
}