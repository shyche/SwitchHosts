/**
 * @author oldj
 * @blog https://oldj.net
 */

'use strict'

const {ipcMain} = require('electron')
const actions = require('./actions')

ipcMain.on('x', (e, d) => {
  let sender = e.sender
  let action = d.action
  if (typeof actions[action] === 'function') {
    actions[action](...(d.args || []))
      .then(v => {
        sender.send(d.callback, [null, v])
      })
      .catch(e => {
        console.log(e)
        sender.send(d.callback, [e])
      })
  }
})
