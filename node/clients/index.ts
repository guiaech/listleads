import { IOClients } from '@vtex/api'
import {Catalog} from '@vtex/clients'

export class Clients extends IOClients {
    public get status() {
      return this.getOrSet('catalog', Catalog)
    }
  }
