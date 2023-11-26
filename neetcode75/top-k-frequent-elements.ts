function topKFrequent(nums: number[], k: number): number[] {
  let map = new Map<number, number>();
  let bucket: number[][] = [];
  let result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  for (let [key, value] of map) {
    if (!bucket[value]) {
      bucket[value] = [];
    }

    bucket[value].push(key);
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) {
      result.push(...bucket[i]);
    }

    if (result.length === k) {
      break;
    }
  }

  return result;
}

function topKFrequent2(nums: number[], k: number): number[] {
  const map: { [key: number]: number } = {};

  nums.forEach((num) => {
    map[num] = map[num] ? map[num] + 1 : 1;
  });

  return Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((num) => Number(num[0]));
}
