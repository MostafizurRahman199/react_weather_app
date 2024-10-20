import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

export default function ResultBox({ searchResults }) {
  // Function to determine the image based on temperature
  const getTemperatureImage = (temperature) => {
    if (temperature > 30) {
      return "https://img.freepik.com/free-photo/closeup-shot-thermometer-beach-sand_181624-12367.jpg?w=996&t=st=1728456996~exp=1728457596~hmac=2d73c2436375fa80db8e8228920b386293f965f18dc338839eb12321eaa07197"; // Replace with actual image URL for hot weather
    } else if (temperature >= 20 && temperature <= 30) {
      return "https://img.freepik.com/free-photo/sun-shining-dark-clouds-green-field_181624-26064.jpg?t=st=1728457079~exp=1728460679~hmac=3e612bc236220c5e17edfc2b313e683e6fc58bd0d00b7577433f34e6900ee988&w=996"; // Replace with actual image URL for warm weather
    } else if (temperature >= 10 && temperature < 20) {
      return "https://img.freepik.com/free-photo/girl-walks-umbrella-rainy-weather-bridge-forest_169016-11473.jpg?t=st=1728457106~exp=1728460706~hmac=32a794ca81b788b3403237e887348b04430cbdfe75151b6d11c9b667493ba3e6&w=996"; // Replace with actual image URL for cool weather
    } else {
      return "https://img.freepik.com/free-photo/bare-trees-daytime_395237-139.jpg?t=st=1728457163~exp=1728460763~hmac=ac4feedf8601529ef64fa31d49a7e657acc4306045c1ce825c6ebd07b5d59a18&w=1060"; // Replace with actual image URL for cold weather
    }
  };

  return (
    <div className="p-4 flex flex-col md:grid grid-cols-2 my-8 rounded-xl shadow-lg md:w-[800px]">
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="City Icon"
              src={`https://cdn-icons-png.flaticon.com/512/4781/4781517.png`}
            />
          </ListItemAvatar>
          <ListItemText
            primary={`${searchResults.city}, ${searchResults.country}`}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: "text.primary", display: "inline" }}
                >
                  City & Country
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar
              alt="Temperature Icon"
              src="https://img.icons8.com/color/48/temperature.png"
            />
          </ListItemAvatar>
          <ListItemText
            primary={`Temperature: ${searchResults.temperature}°C`}
          />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar
              alt="Feels Like Icon"
              src="https://static-00.iconduck.com/assets.00/face-with-thermometer-emoji-256x242-wwm3cwyc.png"
            />
          </ListItemAvatar>
          <ListItemText primary={`Feels Like: ${searchResults.feelsLike}°C`} />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar
              alt="Humidity Icon"
              src="https://img.icons8.com/color/48/humidity.png"
            />
          </ListItemAvatar>
          <ListItemText primary={`Humidity: ${searchResults.humidity}%`} />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar
              alt="Pressure Icon"
              src="https://img.icons8.com/color/48/pressure.png"
            />
          </ListItemAvatar>
          <ListItemText primary={`Pressure: ${searchResults.pressure} hPa`} />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar
              alt="Wind Speed Icon"
              src="https://img.icons8.com/color/48/wind.png"
            />
          </ListItemAvatar>
          <ListItemText
            primary={`Wind Speed: ${searchResults.windSpeed} m/s`}
          />
        </ListItem>
      </List>
      <Card sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{ width: "100%" }} // Set full width for the image
          image={getTemperatureImage(searchResults.temperature)}
          alt="Temperature Condition"
        />
      </Card>
    </div>
  );
}
