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
import { PerfResultsFile } from "./PerfResultsFile";
import { PerfResultsSection } from "./PerfResultsSection";

@Entity("perf_results_sub_topics")
export class PerfResultsSubTopic {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  section_id!: number;

  @Column()
  topic_name!: string;

  @Column({ type: "date" })
  date!: Date;

  @ManyToOne(() => PerfResultsSection, (section) => section.subTopics)
  @JoinColumn({ name: "section_id" })
  section!: PerfResultsSection;

  @OneToMany(() => PerfResultsFile, (file) => file.subTopic)
  files!: PerfResultsFile[];

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}