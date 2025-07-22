import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { LawsRegsSection } from "./LawsRegsSection";

@Entity("laws_regs_files")
export class LawsRegsFiles {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  section_id!: number;

  @Column()
  files_path!: string;

  @Column()
  files_type!: string;

  @ManyToOne(() => LawsRegsSection, (section) => section.files, {
    onDelete: "SET NULL",
    onUpdate: "RESTRICT"
  })
  @JoinColumn({ name: "section_id" })
  section!: LawsRegsSection;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}