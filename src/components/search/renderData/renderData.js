import { getLocalStorage } from "../../../utils/localStorage";
import { OneData } from "../OneData/OneData";

export function RenderData() {
  const data = getLocalStorage("recentSearch");
  //   console.log(Array.from(data.lenght));
  //   console.log(Array.from({ length: data.length }));
  const renderDataRecent = data.map((item) => OneData(item));
  return renderDataRecent;
  //   Array.from(data.lenght)
  //   console.log([...data].lenght);
  // if(data.le)
}
