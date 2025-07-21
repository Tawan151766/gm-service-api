import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { LawsRegsSection } from "./LawsRegsSection";

@Entity("laws_regs_types")
export class LawsRegsType {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  type_name!: string;

  @OneToMany(() => LawsRegsSection, (section) => section.type)
  sections!: LawsRegsSection[];

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}