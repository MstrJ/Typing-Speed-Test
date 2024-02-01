const GetWords = async (): Promise<string[]> => {
  const res = await fetch("https://random-word-api.vercel.app/api?words=300");
  const json = await res.json();
  return json as string[];
  // return [
  //   "woda",
  //   "kawa",
  //   "telewizor",
  //   "kubek",
  //   "dom",
  //   "pudełko",
  // ];
};
export default GetWords;
