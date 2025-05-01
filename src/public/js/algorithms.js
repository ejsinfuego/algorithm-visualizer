const algorithms = {
    bubbleSort: function(array, visualCallback) {
        const arr = [...array];
        const animations = [];
        
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                animations.push([j, j + 1, false]);
                
                if (arr[j] > arr[j + 1]) {
                    
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                   
                    animations.push([j, j + 1, true]);
                }
            }
        }
        
        return animations;
    },
    insertionSort : function(array, visualCallback) {
        const arr = [...array];
        const animations = [];
        
        for (let i = 1; i < arr.length; i++) {
            let key = arr[i];
            let j = i - 1;
            
            //push comparison for visualization
            animations.push([i, j, false]);
            
            while (j >= 0 && arr[j] > key) {
               //push swap for visualization
                animations.push([j, j + 1, true]);
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
        
        return animations;
    },
    
    selectionSort: function(array) {
        const arr = [...array];
        const animations = [];
        
        for (let i = 0; i < arr.length - 1; i++) {
            // find the minimum element in the unsorted part of the array
            let minIndex = i;
            
            for (let j = i + 1; j < arr.length; j++) {
                // record comparison animation
                animations.push([minIndex, j, false]);
                
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            
            // swap the found minimum element with the first element of unsorted part
            if (minIndex !== i) {
                animations.push([i, minIndex, true]);
                [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            }
        }
        
        return animations;
    }
};