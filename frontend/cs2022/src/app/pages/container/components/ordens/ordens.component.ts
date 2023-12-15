import { Component, OnInit } from '@angular/core';
import { OrdemService } from '../services/ordem.service';
import { statusCor } from '../status';

@Component({
  selector: 'app-ordens',
  templateUrl: './ordens.component.html',
  styleUrls: ['./ordens.component.scss']
})
export class OrdensComponent implements OnInit {

  constructor(
    private ordemSvc: OrdemService,
  ) { }

  statusCor = statusCor;

  meses : any[] = [{ nome: 'Janeiro', valor: 1, ordens: null }, { nome: 'Fevereiro', valor: 2, ordens: null }, { nome: 'Março', valor: 3, ordens: null }, { nome: 'Abril', valor: 4, ordens: null }, { nome: 'Maio', valor: 5, ordens: null }, { nome: 'Junho', valor: 6, ordens: null }, { nome: 'Julho', valor: 7, ordens: null }, { nome: 'Agosto', valor: 8, ordens: null }, { nome: 'Setembro', valor: 9, ordens: null }, { nome: 'Outubro', valor: 10, ordens: null }, { nome: 'Novembro', valor: 11, ordens: null }, { nome: 'Dezembro', valor: 12, ordens: null }]
  busca: any = null;
  ordemShow = true;
  anos: any = [new Date().getFullYear()];
  anoSel: any;
  ordens: any;

  ngOnInit() {
    this.anoSel = this.anos[0];
    this.meses = this.meses.reverse();
    this.atualizaOrdens();

  }

  buscarOrdem() {
    let ordensTemp = this.ordens.filter((o:any) => (o?.cliente_nome.toLowerCase()).includes(this.busca.toLowerCase()) ||
     (o?.id_ordem.toString()).includes(this.busca.toLowerCase()) || (o?.valor.toString()).includes(this.busca.toLowerCase()))
     this.meses.forEach((mes: any) => {
      let ordem_mes = ordensTemp.filter((o:any)=> (new Date(o.data)).getMonth() == mes.valor);
      mes.ordens = ordem_mes;
      return mes;
    })

  }

  atualizaOrdens() {

    this.ordemSvc.listarOrdens(this.anoSel).subscribe(r => {
      if (r.status) {
        this.ordens = r.dados;
        this.meses.forEach((mes: any) => {
          let ordem_mes = this.ordens.filter((o:any)=> (new Date(o.data)).getMonth() == mes.valor);
          mes.ordens = ordem_mes;
          return mes;
        })
      }
    })
  }

}
