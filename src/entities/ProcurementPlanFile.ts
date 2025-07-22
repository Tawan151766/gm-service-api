import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { ProcurementPlanType } from "./ProcurementPlanType";

@Entity("procurement_plan_files")
export class ProcurementPlanFile {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  type_id!: number;

  @Column()
  files_path!: string;

  @Column()
  files_type!: string;

  @ManyToOne(() => ProcurementPlanType, (type) => type.files, {
    onDelete: "SET NULL",
    onUpdate: "RESTRICT"
  })
  @JoinColumn({ name: "type_id" })
  type!: ProcurementPlanType;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}