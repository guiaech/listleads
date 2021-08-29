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
      <div>
        <div >
          <div>
          <div>
            <h1 >Lista de Leads</h1>
          </div>

          <div>
            <table >
              <thead>
                <tr >
                <th>empresa</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Telefone</th>
                <th>Data de Cadastro</th>
                <th>recado</th>
                </tr>
              </thead>

              <tbody >
              {leads.length> 0 ?
                leads.map(lead => (
                  <tr key={lead.id}>
                    <td>{lead.id}</td>
                    <td>{lead.name}</td>
                    <td>{lead.number}</td>
                    <td>{lead.empresa}</td>
                    <td>{lead.leads}</td>
                    <td>{lead.recado}</td>
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
