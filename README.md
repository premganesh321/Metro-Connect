# Metro-Connect: Delhi Metro Route Finder

### Overview

**Metro-Connect** is an intuitive web-based application that helps users find the shortest path between two stations on the **Delhi Metro** network. By utilizing **Dijkstra's algorithm**, it efficiently calculates the optimal route, while also providing crucial travel information such as **total travel time** and an **estimated fare**. The application aims to streamline the commuter experience by offering a seamless, real-time solution for route planning in Delhi's extensive metro system.

> **Live Demo**: [Metro-Connect Website](https://metro-connect.vercel.app/)

---

### Features

- **Interactive Station Selection**: Users can conveniently pick source and destination stations from a dropdown menu.
- **Shortest Path Calculation**: Employs **Dijkstra's algorithm** to determine the fastest route between stations.
- **Travel Information**: Provides both the total travel time and an estimate of the fare based on the journey duration.
- **Optional Visual Representation**: A graphical visualization of the metro network enhances the user experience by clearly showing the route.
- **User-Friendly Interface**: Clean, responsive, and easy-to-navigate design ensures a smooth experience for both first-time and returning users.

---

### Screenshots

Here are some visuals to give you a sneak peek of Metro-Connect in action:

![Metro-Connect](https://github.com/user-attachments/assets/8ab473cc-1d63-44d0-b840-ab259500584c)

[Watch the Video Demo](https://github.com/user-attachments/assets/a788d891-1dee-4b09-8b90-a9af09a69da7)

---

### Technologies Used

The project leverages the following technologies:

- **HTML5**: For creating the structure and layout of the web application.
- **CSS3**: To enhance visual presentation and styling.
- **JavaScript**: Core logic for implementing the interactive features.
- **Graph Data Structures**: To represent the Delhi Metro network for efficient pathfinding.
- **Dijkstra's Algorithm**: The backbone of the shortest path calculation.

---

### How It Works

1. **Graph Representation**: The Delhi Metro network is modeled as a graph using an adjacency list, where each station is a node and each connection is an edge with associated weights (travel time).
2. **Station Selection**: Users choose a starting and ending station from easy-to-navigate dropdown lists.
3. **Algorithm Execution**: Upon hitting "Find Shortest Path", **Dijkstra's algorithm** is applied to compute the optimal route between the two stations.
4. **Results Display**: The application presents the user with:
    - A **list of stations** to traverse.
    - The **total travel time** for the journey.
    - An **estimated fare** based on the distance.
5. **Visual Route Representation**: The path is dynamically visualized in a graphical format, showcasing stations and connections.

---

### Project Structure

- **index.html**: This is the main HTML file containing the user interface elements.
- **script.js**: Core JavaScript logic that includes graph representation, pathfinding algorithms, and interactive functionality.
- **style.css**: Responsible for the styling and layout of the web application, ensuring a clean and responsive design.

---


### License

Metro-Connect is licensed under the [MIT License](LICENSE). Feel free to use and modify the code for your own projects.
