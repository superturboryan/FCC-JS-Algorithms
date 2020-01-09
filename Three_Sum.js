/*
Three Sum
Given an array of integers, find all unique triplets whose sum is 0, return an array of arrays.
*/

function threeSum(input) {

    input.sort((a,b)=>a-b);

    console.log("Sorted: " + input)

    const result = [];

    for (let indexA = 0; indexA < input.length-2; indexA++) {

        const a = input[indexA];

        if (a > 0) return result;

        if (a === -3) {
            console.log("Stop")
        }

        if (a === input[indexA-1]) continue;

        let indexB = indexA+1;

        let indexC = input.length-1;

        console.log

        while (indexB < indexC) {

            const b = input[indexB];
            const c = input[indexC];

            let sum = a + b + c
            console.log("Sum: " + sum)
            if (sum === 0) {
                console.log("Adding nums " + a + " " + b + " and " + c)
                result.push([a,b,c]);
            }

            if (sum >= 0) {
                while (input[indexC - 1] === c) { 
                    indexC-- 
                }
                indexC--
            }

            if (sum <= 0) {
                while (input[indexB + 1] === b) { 
                    indexB ++ 
                }
                indexB++
            }
            
        }
    }
    
    return result
}

let result = threeSum([-1,0,1,2,-1,-4])

console.log("Three sum result: " + result)
