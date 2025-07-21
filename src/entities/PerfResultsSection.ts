import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { PerfResultsType } from "./PerfResultsType";
import { PerfResultsSubTopic } from "./PerfResultsSubTopic";

@Entity("perf_results_sections")
export class PerfResultsSection {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  type_id!: number;

  @Column()
  section_name!: string;

  @Column({ type: "date" })
  date!: Date;

  @ManyToOne(() => PerfResultsType, (type) => type.sections)
  @JoinColumn({ name: "type_id" })
  type!: PerfResultsType;

  @OneToMany(() => PerfResultsSubTopic, (subTopic) => subTopic.section)
  subTopics!: PerfResultsSubTopic[];

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}