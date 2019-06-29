function md5 (s) { return hex_md5(s).toLowerCase() }



const app = new Vue({
  el: '#main',
  data: Object.assign({
    rawPasswords: {},
    tempAnswer: {},
    toRemove: {},
    currentUserIndex: -1,
    packNames: [
      '40pt. pack',
      '60pt. pack',
      '80pt. pack'
    ]
  }, data())
})

$('.export').click(function () {
  const obj = {}
  obj.users = app.users
  obj.rounds = app.rounds
  const data = JSON.stringify(obj)
  const dataBlob = new Blob([data], {type: "text/plain;charset=utf-8"})
  saveAs(dataBlob, 'data.json')
})