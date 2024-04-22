function dijkstra(graph, start) {
    const distances = {};
    const visited = {};
    const queue = [];

    // Initialize distances with Infinity for all vertices except the start vertex
    for (let vertex in graph) {
        distances[vertex] = vertex === start ? 0 : Infinity;
        queue.push(vertex);
    }

    while (queue.length > 0) {
        // Sort the queue based on distances
        queue.sort((a, b) => distances[a] - distances[b]);

        // Extract the vertex with the smallest distance
        const current = queue.shift();
        visited[current] = true;

        // Explore neighbors of the current vertex
        for (let neighbor in graph[current]) {
            if (!visited[neighbor]) {
                const distanceToNeighbor = distances[current] + graph[current][neighbor];
                // Update distance if shorter path found
                if (distanceToNeighbor < distances[neighbor]) {
                    distances[neighbor] = distanceToNeighbor;
                }
            }
        }
    }

    return distances;
}

const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
};

const shortestDistances = dijkstra(graph, 'A');
console.log(shortestDistances);
