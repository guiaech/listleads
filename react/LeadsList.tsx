import React from 'react';

import { useState, useEffect } from 'react';

import api from './api';

//import 'vtex-tachyons'


interface LeadsList {}

interface Leads{
  leads: string
  empresa: string
  id: string
  name: string
  number: string
  recado: string
  compra: string
}


const LeadsList: StorefrontFunctionComponent<LeadsList> = ({}) => {


  const [leads, setLeads] = useState<Leads[]>([]);

  async function getLeads(){
    const response = await api.get('/items')

    setLeads(response.data.Items)
    
    console.log(response.data.Items)
  }

  useEffect( () => {
    getLeads();   
  });


  return (
    <div className="w-80 center pt4">
      <div className="">
        <div className="">
        <div>
          <h1 className="f1">Lista de Leads</h1>
        </div>

        <div className="">
          <table className="f6 mb5 w-100 center">
            <thead className="">
              <tr className="stripe-dark">
              <th className="bg-white fw6 tl bb b--black-20 pt2">E-mail</th>
              <th className="bg-white fw6 tl bb b--black-20 pt2">Nome</th>
              <th className="bg-white fw6 tl bb b--black-20 pt2">Telefone</th>
              <th className="bg-white fw6 tl bb b--black-20 pt2">Empresa</th>
              <th className="bg-white fw6 tl bb b--black-20 pt2">Data de Cadastro</th>
              <th className="bg-white fw6 tl bb b--black-20 pt2">recado</th>
              <th className="bg-white fw6 tl bb b--black-20 pt2">Compra</th>
              </tr>
            </thead>

            <tbody className="lh-copy">
            {leads.length > 0 ?
              leads.map(lead => (
                <tr className="stripe-dark bb b--black-20"  key={lead.id}>
                  <td className="tl bb b--black-20 pt2">{lead.id}</td>
                  <td className="tl bb b--black-20 pt2">{lead.name}</td>
                  <td className="tl bb b--black-20 pt2">{lead.number}</td>
                  <td className="tl bb b--black-20 pt2">{lead.empresa}</td>
                  <td className="tl bb b--black-20 pt2">{lead.leads}</td>
                  <td className="tl bb b--black-20 pt2">{lead.recado}</td>
                  <td className="tl bb b--black-20 pt2">{lead.compra}</td>
                </tr>
              )) : ''}
            </tbody>
          </table>
        </div>
        </div>
      </div>

  </div>
)}


LeadsList.schema = {
  title: 'editor.leadslist.title',
  description: 'editor.leadslist.description',
  type: 'object',
  properties: {},
}

export default LeadsList;
