import * as riot from '../../src/riot'
import {expect} from 'chai'

describe('Riot core api', () => {
  it('riot exports properly its public api', () => {
    expect(riot).to.be.ok
    expect(riot).to.have.all.keys([
      'register',
      'unregister',
      'mount',
      'unmount',
      'mixin',
      'install',
      'version',
      '__'
    ])
  })
})