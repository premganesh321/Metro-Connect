// Delhi Metro stations graph representation (adjacency list with travel time in minutes)
const delhiMetroGraph = {
    'Rohini West': { 'Rohini East': 4 },
    'Rohini East': { 'Rohini West': 4, 'Pitampura': 4 },
    'Pitampura': { 'Rohini East': 4, 'Kohat Enclave': 4 },
    'Kohat Enclave': { 'Pitampura': 4, 'Netaji Subhash Place': 4 },
    'Netaji Subhash Place': { 'Kohat Enclave': 4, 'Keshav Puram': 4 },
    'Keshav Puram': { 'Netaji Subhash Place': 4, 'Kanhaiya Nagar': 4 },
    'Kanhaiya Nagar': { 'Keshav Puram': 4, 'Inderlok': 4 },
    'Inderlok': { 'Kanhaiya Nagar': 4, 'Shastri Nagar': 4 },
    'Shastri Nagar': { 'Inderlok': 4, 'Pratap Nagar': 4 },
    'Pratap Nagar': { 'Shastri Nagar': 4, 'Pulbangash': 4 },
    'Pulbangash': { 'Pratap Nagar': 4, 'Tis Hazari': 4 },
    'Tis Hazari': { 'Pulbangash': 4, 'Kashmere Gate': 4 },
    'Kashmere Gate': { 'Tis Hazari': 4, 'Shastri Park': 4, 'Chandni Chowk': 4 },
    'Shastri Park': { 'Kashmere Gate': 4, 'Seelampur': 4 },
    'Seelampur': { 'Shastri Park': 4, 'Welcome': 4 },
    'Welcome': { 'Seelampur': 4, 'Shahdara': 4 },
    'Shahdara': { 'Welcome': 4, 'Mansarovar Park': 4 },
    'Mansarovar Park': { 'Shahdara': 4, 'Jhilmil': 4 },
    'Jhilmil': { 'Mansarovar Park': 4, 'Dilshad Garden': 4 },
    'Dilshad Garden': { 'Jhilmil': 4, 'New Bus Adda': 4 },
    'New Bus Adda': { 'Dilshad Garden': 4 },
    'Samaypur Badli': { 'Rohini Sector 18 19': 4 },
    'Rohini Sector 18 19': { 'Samaypur Badli': 4, 'Haiderpur Badli Mor': 4 },
    'Haiderpur Badli Mor': { 'Rohini Sector 18 19': 4, 'Jahangirpuri': 4 },
    'Jahangirpuri': { 'Haiderpur Badli Mor': 4, 'Adarsh Nagar': 4 },
    'Adarsh Nagar': { 'Jahangirpuri': 4, 'Azadpur': 4 },
    'Azadpur': { 'Adarsh Nagar': 4, 'Model Town': 4 },
    'Model Town': { 'Azadpur': 4, 'GTB Nagar': 4 },
    'GTB Nagar': { 'Model Town': 4, 'Vishwavidyalaya': 4 },
    'Vishwavidyalaya': { 'GTB Nagar': 4, 'Vidhan Sabha': 4 },
    'Vidhan Sabha': { 'Vishwavidyalaya': 4, 'Civil Lines': 4 },
    'Civil Lines': { 'Vidhan Sabha': 4, 'Kashmere Gate': 4 },
    'Chandni Chowk': { 'Kashmere Gate': 4, 'Chawri Bazar': 4 },
    'Chawri Bazar': { 'Chandni Chowk': 4, 'New Delhi': 4 },
    'New Delhi': { 'Chawri Bazar': 4, 'Rajiv Chowk': 4 },
    'Rajiv Chowk': { 'New Delhi': 4, 'Patel Chowk': 4, 'RK Ashram Marg': 4, 'Barakhamba Road': 4 },
    'Patel Chowk': { 'Rajiv Chowk': 4, 'Central Secretariat': 4 },
    'Central Secretariat': { 'Patel Chowk': 4, 'Udyog Bhawan': 4, 'Janpath': 4 },
    'Udyog Bhawan': { 'Central Secretariat': 4, 'Lok Kalyan Marg': 4 },
    'Lok Kalyan Marg': { 'Udyog Bhawan': 4, 'Jorbagh': 4 },
    'Jorbagh': { 'Lok Kalyan Marg': 4, 'INA': 4 },
    'INA': { 'Jorbagh': 4, 'AIIMS': 4 },
    'AIIMS': { 'INA': 4, 'Green Park': 4 },
    'Green Park': { 'AIIMS': 4, 'Hauz Khas': 4 },
    'Hauz Khas': { 'Green Park': 4, 'Malviya Nagar': 4 },
    'Malviya Nagar': { 'Hauz Khas': 4, 'Saket': 4 },
    'Saket': { 'Malviya Nagar': 4, 'Qutab Minar': 4 },
    'Qutab Minar': { 'Saket': 4, 'Chhatarpur': 4 },
    'Chhatarpur': { 'Qutab Minar': 4, 'Sultanpur': 4 },
    'Sultanpur': { 'Chhatarpur': 4, 'Ghitorni': 4 },
    'Ghitorni': { 'Sultanpur': 4, 'Arjan Garh': 4 },
    'Arjan Garh': { 'Ghitorni': 4, 'Guru Dronacharya': 4 },
    'Guru Dronacharya': { 'Arjan Garh': 4, 'Sikanderpur': 4 },
    'Sikanderpur': { 'Guru Dronacharya': 4, 'MG Road': 4 },
    'MG Road': { 'Sikanderpur': 4, 'IFFCO Chowk': 4 },
    'IFFCO Chowk': { 'MG Road': 4, 'Huda City Centre': 4 },
    'Huda City Centre': { 'IFFCO Chowk': 4 },
    'Dwarka Sector 21': { 'Dwarka Sector 8': 4 },
    'Dwarka Sector 8': { 'Dwarka Sector 21': 4, 'Dwarka Sector 9': 4 },
    'Dwarka Sector 9': { 'Dwarka Sector 8': 4, 'Dwarka Sector 10': 4 },
    'Dwarka Sector 10': { 'Dwarka Sector 9': 4, 'Dwarka Sector 11': 4 },
    'Dwarka Sector 11': { 'Dwarka Sector 10': 4, 'Dwarka Sector 12': 4 },
    'Dwarka Sector 12': { 'Dwarka Sector 11': 4, 'Dwarka Sector 13': 4 },
    'Dwarka Sector 13': { 'Dwarka Sector 12': 4, 'Dwarka Sector 14': 4 },
    'Dwarka Sector 14': { 'Dwarka Sector 13': 4, 'Dwarka': 4 },
    'Dwarka': { 'Dwarka Sector 14': 4, 'Dwarka Mor': 4 },
    'Dwarka Mor': { 'Dwarka': 4, 'Nawada': 4 },
    'Nawada': { 'Dwarka Mor': 4, 'Uttam Nagar West': 4 },
    'Uttam Nagar West': { 'Nawada': 4, 'Uttam Nagar East': 4 },
    'Uttam Nagar East': { 'Uttam Nagar West': 4, 'Janakpuri West': 4 },
    'Janakpuri West': { 'Uttam Nagar East': 4, 'Janakpuri East': 4 },
    'Janakpuri East': { 'Janakpuri West': 4, 'Tilak Nagar': 4 },
    'Tilak Nagar': { 'Janakpuri East': 4, 'Subhash Nagar': 4 },
    'Subhash Nagar': { 'Tilak Nagar': 4, 'Tagore Garden': 4 },
    'Tagore Garden': { 'Subhash Nagar': 4, 'Rajouri Garden': 4 },
    'Rajouri Garden': { 'Tagore Garden': 4, 'Ramesh Nagar': 4 },
    'Ramesh Nagar': { 'Rajouri Garden': 4, 'Maharani Bagh': 4 },
    'Maharani Bagh': { 'Ramesh Nagar': 4, 'Sarai Rohilla': 4 },
    'Sarai Rohilla': { 'Maharani Bagh': 4, 'Lajpat Nagar': 4 },
    'Lajpat Nagar': { 'Sarai Rohilla': 4, 'Moolchand': 4 },
    'Moolchand': { 'Lajpat Nagar': 4, 'Kailash Colony': 4 },
    'Kailash Colony': { 'Moolchand': 4, 'Greater Kailash': 4 },
    'Greater Kailash': { 'Kailash Colony': 4, 'Nehru Place': 4 },
    'Nehru Place': { 'Greater Kailash': 4, 'Okhla': 4 },
    'Okhla': { 'Nehru Place': 4, 'Kalindi Kunj': 4 },
    'Kalindi Kunj': { 'Okhla': 4, 'Sarai Rohilla': 4 },
    'Sarai Rohilla': { 'Kalindi Kunj': 4, 'Hazrat Nizamuddin': 4 },
    'Hazrat Nizamuddin': { 'Sarai Rohilla': 4, 'Lajpat Nagar': 4 },
};

// Dijkstra's Algorithm for finding the shortest path
function dijkstra(graph, start, end) {
    const distances = {};
    const visited = {};
    const previous = {};
    const queue = [];

    for (let node in graph) {
        distances[node] = Infinity;
        visited[node] = false;
        previous[node] = null;
    }

    distances[start] = 0;
    queue.push(start);

    while (queue.length > 0) {
        const currentNode = queue.sort((a, b) => distances[a] - distances[b]).shift();

        if (currentNode === end) {
            let path = [];
            let current = end;

            while (current) {
                path.unshift(current);
                current = previous[current];
            }

            return {
                path,
                distance: distances[end]
            };
        }

        if (visited[currentNode]) continue;
        visited[currentNode] = true;

        for (let neighbor in graph[currentNode]) {
            const newDistance = distances[currentNode] + graph[currentNode][neighbor];
            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
                previous[neighbor] = currentNode;
                queue.push(neighbor);
            }
        }
    }

    return null; // No path found
}

// Function to calculate fare based on travel time
function calculateFare(travelTime) {
    const farePer4Minutes = 10; // ₹10 for every 4 minutes
    return Math.ceil(travelTime / 4) * farePer4Minutes;
}

// Example of finding the shortest path between two stations
const startStation = 'Rohini West';
const endStation = 'Dwarka Sector 21';
const result = dijkstra(delhiMetroGraph, startStation, endStation);

if (result) {
    console.log(`Shortest path from ${startStation} to ${endStation}: ${result.path.join(' -> ')}`);
    console.log(`Total travel time: ${result.distance} minutes`);
    const fare = calculateFare(result.distance);
    console.log(`Estimated fare: ₹${fare}`);
} else {
    console.log(`No path found from ${startStation} to ${endStation}`);
}

// Function to render the graph (if necessary)
function renderGraph(graph) {
    // Implementation to visualize the graph (optional)
}

// Function to animate the shortest path (if necessary)
function animateShortestPath(path) {
    // Implementation to visualize the shortest path (optional)
}
