import { refs } from './refs';

export function formHandler(form) {
  const {
    elements: { storage, transfer },
  } = form;

  refs.storageSpan.innerHTML = Number(storage.value);
  refs.transferSpan.innerHTML = Number(transfer.value);
}
