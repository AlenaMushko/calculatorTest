
import {
  sizeBackblazeColum,
  sizeBunnyColum,
  sizeScalewayColum,
  sizeVultrColum,
} from './index';

export function minColum(colum) {
  const sizes = {
    backblaze: Number(sizeBackblazeColum),
    bunny: Number(sizeBunnyColum),
    scaleway: Number(sizeScalewayColum),
    vultr: Number(sizeVultrColum),
  };

  let objSizes = Object.entries(sizes);
  for (let i = 0; i < objSizes.length; i += 1) {
    if (objSizes[i][1] < objSizes[i + 1][1]) {
      let minColumName = objSizes[i][0];
      return minColumName;
    }
  }
}
