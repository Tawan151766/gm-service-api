import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { PerfResultsSubTopic } from "./PerfResultsSubTopic";

@Entity("perf_results_files")
export class PerfResultsFile {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  sub_topic_id!: number;

  @Column()
  files_path!: string;

  @Column()
  files_type!: string;

  @ManyToOne(() => PerfResultsSubTopic, (subTopic) => subTopic.files, {
    onDelete: "SET NULL",
    onUpdate: "RESTRICT"
  })
  @JoinColumn({ name: "sub_topic_id" })
  subTopic!: PerfResultsSubTopic;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}