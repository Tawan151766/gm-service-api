import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { PerfResultsSection } from "./PerfResultsSection";

@Entity("perf_results_types")
export class PerfResultsType {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  type_name!: string;

  @OneToMany(() => PerfResultsSection, (section) => section.type)
  sections!: PerfResultsSection[];

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}