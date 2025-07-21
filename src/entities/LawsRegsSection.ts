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
import { LawsRegsFiles } from "./LawsRegsFiles";
import { LawsRegsType } from "./LawsRegsType";

@Entity("laws_regs_sections")
export class LawsRegsSection {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  type_id!: number;

  @Column()
  section_name!: string;

  @ManyToOne(() => LawsRegsType, (type) => type.sections)
  @JoinColumn({ name: "type_id" })
  type!: LawsRegsType;

  @OneToMany(() => LawsRegsFiles, (file) => file.section)
  files!: LawsRegsFiles[];

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
