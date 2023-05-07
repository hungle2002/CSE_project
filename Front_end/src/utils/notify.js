import Notify from 'simple-notify'
import 'simple-notify/dist/simple-notify.min.css'

function pushNotify( {title, message}) {
  new Notify({
    status: 'success',
    title: title,
    text: message,
    effect: 'fade',
    speed: 300,
    customClass: null,
    customIcon: null,
    showIcon: true,
    showCloseButton: true,
    autoclose: true,
    autotimeout: 3000,
    gap: 20,
    distance: 20,
    type: 1,
    position: 'left bottom'
  })
}

export default pushNotify;
