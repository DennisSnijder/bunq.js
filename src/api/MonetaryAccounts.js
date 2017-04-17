/* @flow */
import Api from './Api'
import MonetaryAccount from './MonetaryAccount'

export default class MonetaryAccounts extends Api {
  async list (): Array<MonetaryAccount> | Promise<any> {
    const data: { [any]: any } = await this.get(`user/${this.client.user.id}/monetary-account`)

    const monetaryAccounts: Array<MonetaryAccount> = []
    data.Response.forEach((monetary) => {
      monetaryAccounts.push(new MonetaryAccount(this.client, monetary.MonetaryAccountBank))
    })
    return monetaryAccounts
  }
}