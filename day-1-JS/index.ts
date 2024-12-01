const mainPart1 = async () => {
    const path = "input.txt";
    const file = Bun.file(path);
    const text = await file.text();
    const lines = text.split("\n").map(l => l.split("   "));
    const list1Sorted = lines.map(l => +l[0]).sort();
    const list2Sorted = lines.map(l => +l[1]).sort();

    let distanceSum = 0;
    for (let i = 0; i < list1Sorted.length; i++) {
        distanceSum += Math.abs(list1Sorted[i] - list2Sorted[i]);
    }

    console.log(distanceSum);
}


const mainPart2 = async () => {
    const path = "input.txt";
    const file = Bun.file(path);
    const text = await file.text();
    const lines = text.split("\n").map(l => l.split("   "));
    const list1Sorted = lines.map(l => +l[0]).sort();
    const list2Dic = lines.map(l => +l[1]).reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
      }, {});
    
    let similarity = 0;

    for (let i = 0; i < list1Sorted.length; i++) {
        if (list2Dic[list1Sorted[i]]) {
            similarity += list2Dic[list1Sorted[i]] * list1Sorted[i];
        }
    }

    console.log(similarity);
}

mainPart2();