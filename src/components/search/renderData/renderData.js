import { getLocalStorage } from "../../../utils/localStorage";
import { oneData } from "../oneData/oneData";

export function renderData() {
  const data = getLocalStorage("recentSearch");
  //   console.log(Array.from(data.lenght));
  //   console.log(Array.from({ length: data.length }));
  const renderDataRecent = data.map((item) => oneData(item));
  return renderDataRecent;
  //   Array.from(data.lenght)
  //   console.log([...data].lenght);
  // if(data.le)
}
