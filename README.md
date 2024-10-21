# Metro-Connect: Delhi Metro Route Finder

## Overview

Metro-Connect is a web-based application that helps users find the shortest path between two stations in the Delhi Metro network. Using Dijkstra's algorithm, it calculates the optimal route, providing information on travel time and estimated fare.

Visit the live application: [Metro-Connect Website](https://metro-connect.vercel.app/)

## Screenshots

Here are some screenshots of the Metro-Connect application in action:

![image](https://github.com/user-attachments/assets/8

[Screencast from 2024-10-21 12-56-04.webm](https://github.com/user-attachments/assets/81382d10-7419-4d68-8d9e-a7fad3f93fd1)
72d7829-fe7a-4c32-baf2-f0900bcab114)

## Features

- Interactive selection of source and destination stations
- Calculation of the shortest path between selected stations
- Display of total travel time
- Estimation of fare based on travel duration
- Visual representation of the Delhi Metro network (optional)

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Graph data structures
- Dijkstra's algorithm for shortest path finding

## Project Structure

- `index.html`: Main HTML file containing the user interface
- `script.js`: JavaScript file with the core logic, including the graph representation and pathfinding algorithm
- `style.css`: CSS file for styling the application

## How It Works

1. The Delhi Metro network is represented as a graph using an adjacency list.
2. Users select their source and destination stations from dropdown menus.
3. Upon clicking "Find Shortest Path", Dijkstra's algorithm is applied to find the optimal route.
4. The application displays the path, total travel time, and estimated fare.
5. A graph visualization of the route is dynamically generated, showing the stations and connections along the path.

## Future Enhancements

- Real-time data integration
- Mobile application development
- Multi-language support
- Accessibility features
- Integration with map services for visual route display
