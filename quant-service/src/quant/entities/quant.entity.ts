import { Table, Column, Model } from 'sequelize-typescript';
@Table
export class Quant extends Model {

  @Column
  name: string;
  @Column
  api_key?: string;

  @Column
  role?: string;
}
