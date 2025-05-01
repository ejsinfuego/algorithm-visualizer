document.addEventListener('DOMContentLoaded', () => {
    const visualizer = new Visualizer('#arrayContainer');
    visualizer.generateRandomArray();

    document.getElementById('generateArray').addEventListener('click', () => {
        visualizer.generateRandomArray();
    });
    
    document.getElementById('startSort').addEventListener('click', () => {
        const algorithm = document.getElementById('algorithmSelect').value;
        let animations;
        
        switch(algorithm) {
            case 'bubble':
                animations = algorithms.bubbleSort(visualizer.array);
                break;
            case 'insertion':
                animations = algorithms.insertionSort(visualizer.array);
                break;
            case 'selection':
                animations = algorithms.selectionSort(visualizer.array);
            default:
                animations = algorithms.bubbleSort(visualizer.array);
        }
        
        visualizer.visualize(animations);
    });
});