import { refs } from './refs';
import { formHandler } from './formHandler';
import { minColum } from './minColum';


 let storage = 0;
 let transfer = 0;

export let sizeBackblazeColum = 0;
export let sizeBunnyColum = 0;
export let sizeScalewayColum = 0;
export let sizeVultrColum = 0;

refs.calcFform.addEventListener('input', onHendlerChangeCalcForm);
refs.formBunny.addEventListener('input', e => {
  bunnyColum(e.currentTarget);
  minColum(e.currentTarget);
});

refs.formScaleway.addEventListener('input', e => {
  scalewayColum(e.currentTarget);
  minColum(e.currentTarget);
});

function onHendlerChangeCalcForm(e) {
  refs.column.classList.remove('orangered');

  storage = Number(refs.calcFform.elements.storage.value);
  transfer = Number(refs.calcFform.elements.transfer.value);

  formHandler(e.currentTarget);
  backblazeColum();
  bunnyColum();
  scalewayColum();
  vultrColum();
  minColum(e.currentTarget);

  const minHeigthColum = minColum(e.currentTarget);
  const columItems = refs.columList.children;

  for (let i = 0; i < columItems.length; i += 1) {
    columItems[i].classList.contains(`${minHeigthColum}`)
      ? columItems[i].classList.add('orangered')
      : columItems[i].classList.remove('orangered');
  }
}

function backblazeColum() {
sizeBackblazeColum = (storage * 0.005 + transfer * 0.01).toFixed(2);
  sizeBackblazeColum <= 7 ? (sizeBackblazeColum = '7') : sizeBackblazeColum;

  const murkup = `
  <div class = "column__box">
     <div class="column column-backblaze" style="height :${
       sizeBackblazeColum * 10
     }px"></div>
     <p class="column__text">${sizeBackblazeColum}$</p>
    </div>
     `;
  refs.columList.children[0].innerHTML = murkup;
}

function bunnyColum(form) {
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

  const murkup = `
 <div class = "column__box">
    <div class="column" style="height :${sizeBunnyColum * 10}px"></div>
    <p class="column__text">${sizeBunnyColum}$</p>
 </div>
  `;
  refs.columList.children[1].innerHTML = murkup;
}

function scalewayColum(form) {
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

  const murkup = `
  <div class = "column__box">
    <div class="column column-scaleway" style="height :${
      sizeScalewayColum * 10
    }px"></div>
    <p class="column__text">${sizeScalewayColum}$</p>
  </div>
    `;
  refs.columList.children[2].innerHTML = murkup;
}

function vultrColum() {
 sizeVultrColum = (storage * 0.01 + transfer * 0.01).toFixed(2);
  sizeVultrColum <= 5 ? (sizeVultrColum = 5) : sizeVultrColum;

  const murkup = `
  <div class = "column__box">
    <div class="column column-vultr" style="height :${
      sizeVultrColum * 10
    }px"></div>
    <p class="column__text">${sizeVultrColum}$</p>
  </div>
    `;
  refs.columList.children[3].innerHTML = murkup;
}


