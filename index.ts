
//nhỏ đến lớn
function selectionSort(arr:number[]) {
   for (let i = 0; i < arr.length-1; i++) {
        let min=i
        for (let j = i+1; j < arr.length; j++) {
            if(arr[j]<arr[min]){
                min=j
            }
        }
        let temp =arr[min]
        arr[min]=arr[i]
        arr[i]=temp
    }
   return arr

}
// lớn đến nhỏ
function selectionSort1(arr:number[]) {
    for (let i = 0; i < arr.length-1; i++) {
        let max=i
        for (let j = i+1; j < arr.length; j++) {
            if(arr[j]>arr[max]){
                max=j
            }
        }
        let temp =arr[max]
        arr[max]=arr[i]
        arr[i]=temp
    }
     return arr
}

let arr=[64,25,12,22,11]
console.log(selectionSort(arr))
console.log(selectionSort1(arr))