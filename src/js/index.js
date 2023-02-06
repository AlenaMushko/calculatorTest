import { refs } from './refs';
import { formHandler } from './formHandler';

let storage = 0;
let transfer = 0;

let sizeBackblazeColum = 0;
let sizeBunnyColum = 0;
let sizeScalewayColum = 0;
let sizeVultrColum = 0;

refs.calcFform.addEventListener('input', onHendlerChangeCalcForm);
refs.formBunny.addEventListener('input', e => bunnyColum(e.currentTarget));
refs.formScaleway.addEventListener('input', e =>
  scalewayColum(e.currentTarget)
);

function onHendlerChangeCalcForm(e) {
  refs.text.children.innerHTML = '';
  refs.column.classList.remove("orangered");
  storage = Number(refs.calcFform.elements.storage.value);
  transfer = Number(refs.calcFform.elements.transfer.value);

  formHandler(e.currentTarget);
  backblazeColum();
  bunnyColum();
  scalewayColum();
  vultrColum();
  minColum(e.currentTarget);

  const colums = {
    backblaze: refs.columnBackblaze,
    bunny: refs.columnBunny,
    scaleway: refs.columnScaleway,
    vultr: refs.columnVultr,
  };

  let columsKey = Object.entries(colums)
  for (let i = 0; i < columsKey.length; i+=1) {
     const columArr = minColum(e.currentTarget);
    if (columArr === columsKey[i][0]) {
       console.log(columsKey[i][1]);
      return columsKey[i][1].classList.add("orangered");
    } 
}
  
}

function backblazeColum() {
  let backblaze = refs.columnBackblaze;
  sizeBackblazeColum = (storage * 0.005 + transfer * 0.01).toFixed(2);
  sizeBackblazeColum <= 7 ? (sizeBackblazeColum = '7') : sizeBackblazeColum;
  backblaze.style.height = `${sizeBackblazeColum * 10}px`;
  refs.text.children[0].insertAdjacentHTML(
    'afterbegin',
    `${sizeBackblazeColum}$`
  );
}

function bunnyColum(form) {
  let bunny = refs.columnBunny;
  const inputHDD = refs.inputHDD;
  const inputSSD = refs.inputSSD;

  inputSSD.classList.contains('checked')
    ? inputSSD.classList.remove('checked')
    : inputSSD.classList.add('checked');

  inputHDD.classList.contains('checked')
    ? inputHDD.classList.remove('checked')
    : inputHDD.classList.add('checked');

  inputHDD.classList.contains('checked')
    ? (sizeBunnyColum = (storage * 0.01 + transfer * 0.01).toFixed(2))
    : (sizeBunnyColum = (storage * 0.02 + transfer * 0.01).toFixed(2));

  sizeBunnyColum <= 10 ? sizeBunnyColum : (sizeBunnyColum = '10');
  bunny.style.height = `${sizeBunnyColum * 10}px`;
  refs.text.children[1].insertAdjacentHTML('afterbegin', `${sizeBunnyColum}$`);
}

function scalewayColum(form) {
  let scaleway = refs.columnScaleway;
  const inputMulti = refs.inputMulti;
  const inputSingle = refs.inputSingle;

  inputMulti.classList.contains('checked')
    ? inputMulti.classList.remove('checked')
    : inputMulti.classList.add('checked');

  inputSingle.classList.contains('checked')
    ? inputSingle.classList.remove('checked')
    : inputSingle.classList.add('checked');

  inputMulti.classList.contains('checked')
    ? (sizeScalewayColum = (
        (storage - 75) * 0.06 +
        (transfer - 75) * 0.02
      ).toFixed(2))
    : (sizeScalewayColum = (
        (storage - 75) * 0.03 +
        (transfer - 75) * 0.02
      ).toFixed(2));

  storage <= 75 ? (sizeScalewayColum = 0) : sizeScalewayColum;
  scaleway.style.height = `${sizeScalewayColum * 10}px`;
  refs.text.children[2].insertAdjacentHTML(
    'afterbegin',
    `${sizeScalewayColum}$`
  );
}

function vultrColum() {
  let vultr = refs.columnVultr;
  sizeVultrColum = (storage * 0.01 + transfer * 0.01).toFixed(2);
  sizeVultrColum <= 5 ? (sizeVultrColum = 5) : sizeVultrColum;
  vultr.style.height = `${sizeVultrColum * 10}px`;
  refs.text.children[3].insertAdjacentHTML('afterbegin', `${sizeVultrColum}$`);
}

function minColum(colum) {
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
// fff.style.backgroundColor = "orangered";
