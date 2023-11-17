// Runtime efficient
function containsDuplicate1(nums: number[]): boolean {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return true;
    }
    map.set(nums[i], i);
  }
  return false;
}

// Memory efficient
function containsDuplicate2(nums: number[]): boolean {
  const set = new Set<number>(nums);
  return set.size !== nums.length;
}
