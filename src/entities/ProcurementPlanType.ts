import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { ProcurementPlanFile } from "./ProcurementPlanFile";

@Entity("procurement_plan_types")
export class ProcurementPlanType {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  type_name!: string;

  @OneToMany(() => ProcurementPlanFile, (file) => file.type)
  files!: ProcurementPlanFile[];

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}