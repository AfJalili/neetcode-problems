function isAnagram(s: string, t: string): boolean {
  const arrayS = s.split("").sort();
  const arrayT = t.split("").sort();
  return arrayS.join("") === arrayT.join("");
}

